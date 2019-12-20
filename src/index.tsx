import React from 'react';
import ReactDom from 'react-dom';
import {Button} from './Button';

ReactDom.render(<Button
  onClick={() => console.log('click button')}/>, document.querySelector('#root'));

export {
  Button
};
