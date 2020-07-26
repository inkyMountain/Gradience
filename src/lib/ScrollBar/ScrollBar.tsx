import React from 'react';
import './ScrollBar.scss';
import measureScrollBarWidth from '../../utils/measureScrollBarWidth';

interface ScrollBarProps extends React.ComponentProps<any> {
  viewHeight: number;
}

const scrollBarWidth = measureScrollBarWidth();

const ScrollBar: React.FunctionComponent<ScrollBarProps> = (props) => {
  const {children, viewHeight} = props;
  return (
    <div className="gui-scroll-bar-hider" style={{height: viewHeight}}>
      <div className="gui-scroll-element"
           style={{right: -scrollBarWidth}}>
        {children}
      </div>
    </div>
  );
};

ScrollBar.defaultProps = {
  viewHeight: 500,
  scrollBarClass: 'gui-scroll-bar'
};

export default ScrollBar;
