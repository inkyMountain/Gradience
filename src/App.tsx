import React from 'react';
import {Icon} from './component/Icon/Icon';

const clickHandler: React.MouseEventHandler = event => {
  console.log(event.currentTarget.classList);
};

const App: React.FunctionComponent = () => {
  return <div id="app">
    <Icon name='wechat' onClick={clickHandler}/>
    <Icon name='alipay'/>
    <Icon name='right'/>
  </div>;
};

export {App};
