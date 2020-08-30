import React from 'react';
import classes from '../utils/classes';

export interface ContentProps extends React.HTMLAttributes<any> {

}

const Content: React.FC<ContentProps> = props => {
  const {children, className, ...restProps} = props;
  return (
    <div className={classes('gui-layout-content', className)} {...restProps}>
      {children}
    </div>
  );
};

export default Content;
