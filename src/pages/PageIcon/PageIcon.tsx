import React from 'react';
import Icon from '../../lib/Icon/Icon';
import './PageIcon.scss';

export interface PageIconProps {
  name?: string
}

const PageIcon: React.FunctionComponent<PageIconProps> = props => {
  return <div className='page-icon'>
    <Icon name='wechat'/>
    <Icon name='alipay'/>
    <Icon name='right'/>
  </div>;
};

export default PageIcon;
