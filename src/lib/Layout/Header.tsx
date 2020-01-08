import React from 'react';

interface HeaderProps extends React.PropsWithChildren<any> {

}

const Layout: React.FC<HeaderProps> = props => {
  const {children, ...restProps} = props;
  return (
    <div className="gui-layout-header" {...restProps}>
      {children}
    </div>
  );
};

export default Layout;
