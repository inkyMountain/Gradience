import React from 'react';
import './Input.scss';
import classes from '../../utils/classes';

interface InputProps extends React.InputHTMLAttributes<any> {
}

const Layout: React.FC<InputProps> = props => {
  const {className, ...restProps} = props;
  return (
    <input className={classes('gui-input', className)} {...restProps} />
  );
};

export default Layout;
