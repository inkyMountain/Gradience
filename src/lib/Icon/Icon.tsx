import React from 'react';
import '../static/icons/index.js';
import './Icon.scss';
import classes from '../utils/classes';

interface IconProps extends React.HTMLAttributes<SVGElement> {
  name: string;
}

const Icon: React.FunctionComponent<IconProps> = props => {
  const {name, className, ...restProps} = props;
  return <svg className={classes('component-icon', className)} {...restProps}>
    <use xlinkHref={`#${name}`}/>
  </svg>;
};

export default Icon;
