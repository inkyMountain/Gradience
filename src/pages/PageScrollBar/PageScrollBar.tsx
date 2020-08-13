import ScrollBar from '../../lib/ScrollBar/ScrollBar';
import './PageScrollBar.scss';
import React from 'react';

interface PageScrollBar extends React.ComponentProps<any> {}

const mockList = [...new Array(50)].map((key, index) => index);

const PageScrollBar: React.FunctionComponent<PageScrollBar> = () => {
  return (
    <div className="page-scroll-bar">
      <ScrollBar viewHeight={500}>
        {mockList.map((number) => {
          return (
            <div className="mock-item" key={number}>
              {number}
            </div>
          );
        })}
      </ScrollBar>
    </div>
  );
};

export default PageScrollBar;
