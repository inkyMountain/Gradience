import React from 'react';
import classes from '../utils/classes';

export interface HeaderProps extends React.HTMLAttributes<any> {

}

const Header: React.FC<HeaderProps> = props => {
  const {children, className, ...restProps} = props;
  return (
    <div className={classes('gui-layout-header', className)} {...restProps}>
      {children}
    </div>
  );
};

export default Header;
