import React from 'react';
import '../../static/icons/index.js';
import './icon.scss';

interface IconProps extends React.HTMLAttributes<SVGElement> {
  name: string;
}

const Icon: React.FunctionComponent<IconProps> =
  (props) => {
    const {name, className, ...restProps} = props;
    return <svg className={`component-icon ${className || ''}`} {...restProps}>
      <use xlinkHref={`#${name}`}/>
    </svg>;
  };

export default Icon;
