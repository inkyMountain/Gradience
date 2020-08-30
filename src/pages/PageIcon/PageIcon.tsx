import React from 'react';
// import Icon from '../../lib/Icon/Icon';
import Icon from '../../../dist/lib/Icon/Icon';
import './PageIcon.scss';
import CodeFragment from '../components/CodeFragment/CodeFragment';

export interface PageIconProps {
  name?: string
}

const {default: codeExample} = require('!!raw-loader!../../lib/Icon/Icon.example');
const PageIcon: React.FunctionComponent<PageIconProps> = props => {
  return <div className='page-icon'>
    <Icon name='wechat'/>
    <Icon name='alipay'/>
    <Icon name='right'/>
    <CodeFragment>
      {codeExample}
    </CodeFragment>
  </div>;
};

export default PageIcon;
