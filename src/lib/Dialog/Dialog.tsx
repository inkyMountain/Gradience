import React, {Fragment} from 'react';
import '../../static/icons/index.js';
import Button from '../Button/Button';
import './Dialog.scss';

interface DialogProps extends React.HTMLAttributes<HTMLDivElement> {
  visible: boolean,
  onConfirm?: (event: React.MouseEvent<HTMLDivElement>) => void,
  onCancel?: (event: React.MouseEvent<HTMLDivElement>) => void,
}

const Dialog: React.FunctionComponent<DialogProps> = props => {
  const {
    className, visible, children, onConfirm,
    onCancel, ...restProps
  } = props;
  const dialog = (
    <Fragment>
      <div className="gui-dialog-mask"/>
      <div className={`gui-dialog ${className || ''}`} {...restProps}>
        <header className="title">title</header>
        <main className="content">{children}</main>
        <footer className="buttons">
          <Button className={'confirm button'}
                  onClick={(event) => onConfirm && onConfirm(event)}
                  colortype={'blue'}>Confirm</Button>
          <Button className={'cancel button'}
                  onClick={(event) => onCancel && onCancel(event)}
                  colortype={'red'}>Cancel</Button>
        </footer>
      </div>
    </Fragment>
  );
  return visible ? dialog : null;
};

export default Dialog;
