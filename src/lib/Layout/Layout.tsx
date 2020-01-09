import './Layout.scss';
import React, {ReactElement} from 'react';
import Aside from './Aside';
import classes from '../../utils/classes';

interface LayoutProps extends React.PropsWithChildren<any> {

}

const Layout: React.FC<LayoutProps> = props => {
  const {children, className, ...restProps} = props;
  const hasAsideChild = children
    && length in (children as ReactElement)
    && (children as Array<ReactElement>).some(child => child.type === Aside);
  return (
    <div
      className={classes(className, 'gui-layout', hasAsideChild ? '' : 'verticle')}
      {...restProps}>
      {children}
    </div>
  );
};

export default Layout;
export {Layout};
export {default as Aside} from './Aside';
export {default as Content} from './Content';
export {default as Header} from './Header';
export {default as Footer} from './Footer';
