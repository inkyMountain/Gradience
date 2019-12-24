import React from 'react';
import {Icon} from './component/Icon';

const App: React.FunctionComponent = () => {
  const name = 'wechat';
  return <div id="app">
    <Icon name={name}/>
  </div>;
};

export {App};
