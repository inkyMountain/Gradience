import React from 'react';
import Button from '../../lib/Button/Button';
import './PageButton.scss';

export interface PageButtonProps {
}

const PageButton: React.FunctionComponent<React.PropsWithChildren<PageButtonProps>> = props => {
  return (
    <div className='page-button'>
      <Button onClick={() => console.log('red')} colortype='red' disable={true}>
        <span className="custom-text">按钮</span>
      </Button>
      <Button onClick={() => console.log('orange')} colortype='orange'>
        <span className="custom-text">按钮</span>
      </Button>
      <Button onClick={() => console.log('yellow')} colortype='yellow'>
        <span className="custom-text">按钮</span>
      </Button>
      <Button onClick={() => console.log('green')} colortype='green'>
        <span className="custom-text">按钮</span>
      </Button>
      <Button onClick={() => console.log('blue')} colortype='blue'>
        <span className="custom-text">按钮</span>
      </Button>
      <Button onClick={() => console.log('khaki')} colortype='khaki'>
        <span className="custom-text">按钮</span>
      </Button>
    </div>
  );
};

export default PageButton;
