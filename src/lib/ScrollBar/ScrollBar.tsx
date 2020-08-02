import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react';
import classes from '../../utils/classes';
import './ScrollBar.scss';
import measureScrollBarWidth from '../../utils/measureScrollBarWidth';
import {useListener} from '../../hooks/useListener';

interface ScrollBarProps extends React.ComponentProps<any> {
  viewHeight: number;
  scrollBarClass?: string;
}

interface ScrollPosition {
  x: number;
  y: number;
  scrollTop: number;
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
  const [scrollPercent, setScrollPercent] = useState(0);

  // change scroll bar offset when dragging with mouse
  const isDraggingBar = useRef<boolean>(false);
  const primaryMousePosition = useRef<ScrollPosition>({
    x: 0,
    y: 0,
    scrollTop: 0
  });

  const onBarMouseDown = useCallback((event: React.MouseEvent) => {
    isDraggingBar.current = true;
    primaryMousePosition.current = {
      x: event.clientX,
      y: event.clientY,
      scrollTop: scrollRef.current.scrollTop
    };
  }, [isDraggingBar]);

  useEffect(() => {
    const mouseMoveListener = (event: MouseEvent) => {
      if (!isDraggingBar.current) return;
      const scrollHeight = scrollRef.current.scrollHeight
      const newOffset = event.clientY - primaryMousePosition.current.y
        + scrollPercent * viewHeight;
      const newScrollPercent = newOffset / viewHeight;
      const maxScrollPercent = (scrollHeight - viewHeight) / scrollHeight;
      setScrollPercent(Math.max(0, Math.min(maxScrollPercent, newScrollPercent)));
    };
    document.addEventListener('mousemove', mouseMoveListener);
    return () => {
      document.removeEventListener('mousemove', mouseMoveListener);
    };
  }, []);

  useEffect(() => {
    scrollRef.current.scrollTop =
      scrollPercent * scrollRef.current.scrollHeight;
  }, [scrollPercent]);

  useEffect(() => {
    const mouseUpListener = () => {
      isDraggingBar.current = false;
    };
    document.addEventListener('mouseup', mouseUpListener);
    return () => {
      document.removeEventListener('mouseup', mouseUpListener);
    };
  }, []);

  // calculate scroll bar style according to scroll percent
  const scrollBarStyle = useMemo(() => {
    const barOffset = scrollPercent * viewHeight;
    return {
      height: barHeight,
      transform: `translateY(${barOffset}px)`
    };
  }, [scrollPercent, barHeight]);

  // prevent unexpected selection when moving scroll bar with mouse.
  useListener('selectstart', barRef, (event: Event) => {
    const shouldPreventDefault = event.currentTarget === barRef.current;
    shouldPreventDefault && event.preventDefault();
  });

  // making scroll bar react to scroll event.
  const onScroll = useCallback(
    (event: React.UIEvent<HTMLDivElement>) => {
      const {scrollTop, scrollHeight} = event.currentTarget;
      setScrollPercent(scrollTop / scrollHeight);
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
      <div className="gui-scroll-bar-wrapper" style={scrollBarStyle}>
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
