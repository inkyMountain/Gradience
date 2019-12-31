import React from 'react';
import Icon from '../../lib/Icon/Icon';
import './PageIcon.scss';

const PageIcon: React.FunctionComponent = () => {
  return <div className={'page-icon'}>
    <Icon name='wechat'/>
    <Icon name='alipay'/>
    <Icon name='right'/>
  </div>;
};

export default PageIcon;
