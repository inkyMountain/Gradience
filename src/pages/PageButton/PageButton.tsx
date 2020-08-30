import * as React from 'react';
import {Button} from '../../../dist/lib';
import '../../../dist/lib/Button/Button.scss';
import './PageButton.scss';
import {ColorType} from '../../lib/utils/colorUtils';

export interface PageButtonProps {
}

const onButtonClick = (output: string) => {
  return () => console.log(output);
};

const buttons = ['red', 'orange', 'yellow', 'green', 'blue', 'khaki'].map(
  (color: ColorType, index) => (
    // <div key={index}>page button</div>
    <Button onClick={onButtonClick(color)} colortype={color} key={index}>
      <span className="custom-text">{color}</span>
    </Button>
  )
);

const PageButton: React.FunctionComponent<React.PropsWithChildren<PageButtonProps>> = props => {
  return (
    <div className='page-button'>
      {buttons}
      {/* <Button ghost={true} onClick={() => {console.log('ghost');}}>Ghost</Button> */}
    </div>
  );
};

export default PageButton;
