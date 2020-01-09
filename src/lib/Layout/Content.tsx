import React from 'react';
import classes from '../../utils/classes';

interface MainProps extends React.PropsWithChildren<any> {

}

const Layout: React.FC<MainProps> = props => {
  const {children, className, ...restProps} = props;
  return (
    <div className={classes('gui-layout-content', className)} {...restProps}>
      {children}
    </div>
  );
};

export default Layout;
