import React from 'react';

interface FooterProps extends React.PropsWithChildren<any> {

}

const Layout: React.FC<FooterProps> = props => {
  const {children, ...restProps} = props;
  return (
    <div className="gui-layout-footer" {...restProps}>
      {children}
    </div>
  );
};

export default Layout;
