import React from 'react';

interface AsideProps extends React.PropsWithChildren<any> {

}

const Layout: React.FC<AsideProps> = props => {
  const {children, ...restProps} = props;
  return (
    <div className="gui-layout-aside" {...restProps}>
      {children}
    </div>
  );
};

export default Layout;
