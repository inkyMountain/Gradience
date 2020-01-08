import React from 'react';

interface MainProps extends React.PropsWithChildren<any> {

}

const Layout: React.FC<MainProps> = props => {
  const {children, ...restProps} = props;
  return (
    <div className="gui-layout-content" {...restProps}>
      {children}
    </div>
  );
};

export default Layout;
