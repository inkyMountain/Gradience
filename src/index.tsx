import React from 'react';
import ReactDom from 'react-dom';

const button = <button
  onClick={() => console.log('button clicked')}>点击后打印</button>;
ReactDom.render(button, document.querySelector('#root'));
console.log('entry run');
