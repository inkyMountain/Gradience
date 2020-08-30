import React from 'react';
import classes from '../utils/classes';

export interface FooterProps extends React.HTMLAttributes<any> {

}

const Footer: React.FC<FooterProps> = props => {
  const {children, className, ...restProps} = props;
  return (
    <div className={classes('gui-layout-footer', className)} {...restProps}>
      {children}
    </div>
  );
};

export default Footer;
