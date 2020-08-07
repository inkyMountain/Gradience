import React, {
  useCallback,
  useEffect,
  // useMemo,
  useRef,
  useState
} from 'react';
import classes from '../../utils/classes';
import './ScrollBar.scss';
import measureScrollBarWidth from '../../utils/measureScrollBarWidth';
import {useListener} from '../../hooks/useListener';

interface ScrollBarProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  viewHeight: number;
  scrollBarClass?: string;
}

interface ScrollPosition {
  x: number;
  y: number;
  offset: number;
}

const ScrollBar: React.FunctionComponent<ScrollBarProps> = (props) => {
  const {children, scrollBarClass, viewHeight} = props;
  const [barHeight, setBarHeight] = useState(0);

  const scrollRef = useRef<HTMLDivElement>() as { current: HTMLDivElement };
  const barRef = useRef<HTMLDivElement>() as { current: HTMLDivElement };

  // show scroll bar only when needed
  const [
    scrollElementStyle,
    setScrollElementStyle
  ] = useState({right: 0});
  const [
    shouldSimulateScrollBar,
    setShouldSimulateScrollBar
  ] = useState(false);
  useEffect(() => {
    const _shouldSimulateScrollBar =
      scrollRef.current.clientHeight !== scrollRef.current.scrollHeight;
    setShouldSimulateScrollBar(_shouldSimulateScrollBar);
    if (_shouldSimulateScrollBar) {
      setScrollElementStyle({right: -measureScrollBarWidth()});
    }
  }, [scrollRef]);

  // calculate scroll bar height
  useEffect(() => {
    const scrollHeight = scrollRef.current.scrollHeight;
    setBarHeight(viewHeight / scrollHeight * viewHeight);
  }, [scrollRef]);

  // barHeight / viewHeight = scrollTop / scrollHeight = scrollPercent
  const [barOffset, setBarOffset] = useState(0);

  // change scroll bar offset when dragging with mouse
  const isDraggingBar = useRef<boolean>(false);
  const primaryMousePosition = useRef<ScrollPosition>({
    x: 0,
    y: 0,
    offset: 0
  });

  const onBarMouseDown = useCallback((event: React.MouseEvent) => {
    isDraggingBar.current = true;
    primaryMousePosition.current = {
      x: event.clientX,
      y: event.clientY,
      offset: barOffset
    };
  }, [isDraggingBar]);

  useEffect(() => {
    const mouseMoveListener = (event: MouseEvent) => {
      if (!isDraggingBar.current) return;
      const delta = event.clientY - primaryMousePosition.current.y;
      const newOffset = delta + primaryMousePosition.current.offset;
      const maxBarOffset = viewHeight - barHeight;
      setBarOffset(Math.max(0, Math.min(maxBarOffset, newOffset)));
    };
    document.addEventListener('mousemove', mouseMoveListener);
    return () => {
      document.removeEventListener('mousemove', mouseMoveListener);
    };
  }, [barHeight]);

  useEffect(() => {
    scrollRef.current.scrollTop =
      (barOffset / viewHeight) * scrollRef.current.scrollHeight;
  }, [barOffset, viewHeight, scrollRef]);

  useEffect(() => {
    const mouseUpListener = () => {
      isDraggingBar.current = false;
    };
    document.addEventListener('mouseup', mouseUpListener);
    return () => {
      document.removeEventListener('mouseup', mouseUpListener);
    };
  }, []);

  // prevent unexpected selection when moving scroll bar with mouse.
  useListener('selectstart', barRef, (event: Event) => {
    const shouldPreventDefault = event.currentTarget === barRef.current;
    shouldPreventDefault && event.preventDefault();
  });

  // making scroll bar react to scroll event.
  const onScroll = useCallback(
    (event: React.UIEvent<HTMLDivElement>) => {
      const {scrollTop, scrollHeight} = event.currentTarget;
      setBarOffset(scrollTop / scrollHeight * viewHeight);
    },
    [scrollRef]
  );

  return (
    <div className="gui-scroll-bar-hider" style={{height: viewHeight}}>
      {/* scroll container */}
      <div className="gui-scroll-element"
           style={scrollElementStyle}
           ref={scrollRef}
           onScroll={onScroll}
      >
        {/* the content that needs scroll */}
        {children}
      </div>

      {/* scroll bar simulation */}
      <div className="gui-scroll-bar-wrapper" style={{
        height: barHeight,
        transform: `translateY(${barOffset}px)`
      }}>
        <div
          className={classes(scrollBarClass, shouldSimulateScrollBar ? '' : 'hidden')}
          ref={barRef}
          onMouseDown={onBarMouseDown}
        />
      </div>
    </div>
  );
};

ScrollBar.defaultProps = {
  viewHeight: 500,
  scrollBarClass: 'gui-scroll-bar'
};

export default ScrollBar;
