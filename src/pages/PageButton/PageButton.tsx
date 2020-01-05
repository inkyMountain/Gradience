import React from 'react';
import Button from '../../lib/Button/Button';
import './PageButton.scss';
import {ColorType} from '../../utils/colorUtils';

export interface PageButtonProps {
}

const onButtonClick = (output: string) => {
  return () => console.log(output);
};
const buttons = ['red', 'orange', 'yellow', 'green', 'blue', 'khaki'].map(
  (color: ColorType, index) => (
    <Button onClick={onButtonClick(color)} colortype={color} key={index}>
      <span className="custom-text">{color}</span>
    </Button>
  )
);

const PageButton: React.FunctionComponent<React.PropsWithChildren<PageButtonProps>> = props => {
  return (
    <div className='page-button'>{...buttons}</div>
  );
};

export default PageButton;
