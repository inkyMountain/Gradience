import React from 'react';
import '../../static/icons/index.js';
import './icon.scss';


interface IconProps {
  name: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const Icon = (props: IconProps) => {
  return <div className='component-icon' onClick={props.onClick}>
    <svg className='svg'>
      <use xlinkHref={`#${props.name}`}/>
    </svg>
  </div>;
};

export {Icon};
