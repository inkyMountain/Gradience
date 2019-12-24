import React from 'react';

interface IconProps {
  name?: string;
}

const Icon = (props: IconProps) => {
  return <div className='component-icon'>
    <span className="name">Icon name: {props.name || 'name empty'}</span>
  </div>;
};

export {Icon};
