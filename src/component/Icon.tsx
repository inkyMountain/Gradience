import React from 'react';
import '../static/icons/index.js';


interface IconProps {
  name?: string;
}

const Icon = (props: IconProps) => {
  return <div className='component-icon'>
    <svg>
      <use xlinkHref={`#${props.name}`}/>
    </svg>
  </div>;
};

export {Icon};
