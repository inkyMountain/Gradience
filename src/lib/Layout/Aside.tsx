import React from 'react';
import classes from '../utils/classes';

interface AsideProps extends React.HTMLAttributes<any> {

}

const Layout: React.FC<AsideProps> = props => {
  const {children, className, ...restProps} = props;
  return (
    <div className={classes('gui-layout-aside', className)} {...restProps}>
      {children}
    </div>
  );
};

export default Layout;
