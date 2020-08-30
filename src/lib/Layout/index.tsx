import './index.scss';
import React, {ReactElement} from 'react';
import Aside, {AsideProps} from './Aside';
import Content, {ContentProps} from './Content';
import Header, {HeaderProps} from './Header';
import Footer, {FooterProps} from './Footer';
import classes from '../utils/classes';

interface LayoutProps extends React.HTMLAttributes<any> {}

const LayoutComponent: React.FC<LayoutProps> = (props) => {
  const {children, className, ...restProps} = props;
  const hasAsideChild =
    children &&
    length in (children as ReactElement) &&
    (children as Array<ReactElement>).some((child) => child.type === Aside);
  return (
    <div
      className={classes(
        className,
        'gui-layout',
        hasAsideChild ? '' : 'verticle'
      )}
      {...restProps}
    >
      {children}
    </div>
  );
};

export default Object.defineProperties(LayoutComponent, {
  Aside: {
    get() {
      return Aside;
    },
  },
  Content: {
    get() {
      return Content;
    },
  },
  Header: {
    get() {
      return Header;
    },
  },
  Footer: {
    get() {
      return Footer;
    },
  },
}) as React.FC<LayoutProps> & {
  Aside: React.FC<AsideProps>;
  Content: React.FC<ContentProps>;
  Header: React.FC<HeaderProps>;
  Footer: React.FC<FooterProps>;
};
