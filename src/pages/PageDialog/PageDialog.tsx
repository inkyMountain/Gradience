import React, {Fragment, useState} from 'react';
// import ReactDOM from 'react-dom';
import Button from '../../lib/Button/Button';
import Dialog, {modal, alert, confirm} from '../../lib/Dialog/Dialog';
import './PageDialog.scss';

export interface PageIconProps {
  name?: string
}

const PageDialog: React.FunctionComponent<PageIconProps> = props => {
  const [visible, setVisible] = useState(false);
  const title = <div className="title">标题</div>;
  const onConfirm = () => {
    console.log('Dialog confirmed~');
    setVisible(false);
  };
  const onCancel = () => {
    setVisible(false);
    console.log('Dialog cancled~');
  };
  const callModal = () => {
    const closeModal = modal(
      <div className="content">这里是自定义内容</div>,
      (
        <Fragment>
          <Button onClick={() => {closeModal();}}>自定义的取消</Button>
          <Button onClick={() => {closeModal();}}>自定义的确认</Button>
        </Fragment>
      ),
      <div className="title">自定义标题</div>
    );
  };
  const callAlert = () => alert(<div>这是一个alert</div>);
  const callConfirm = () => {
    const closeModal = confirm(
      () => {
        closeModal();
        console.log('confirm');
      },
      () => {
        closeModal();
        console.log('cancel');
      },
      <div className="content">这里是内容</div>
    );
  };

  return (
    <div className='page-dialog'>
      <Button onClick={() => setVisible(true)}>打开对话框</Button>
      <Button onClick={callAlert}>Alert</Button>
      <Button onClick={callConfirm}>Confirm</Button>
      <Button onClick={callModal}>Modal</Button>
      <Dialog visible={visible}
              onConfirm={onConfirm}
              onCancel={onCancel}
              titleNode={title}
      >
        <div className="dialog-content">
          中间的文字
        </div>
      </Dialog>
    </div>
  );
};

export default PageDialog;
