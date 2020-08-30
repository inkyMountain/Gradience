import React, {Fragment, useState} from 'react';
// import ReactDOM from 'react-dom';
import Button from '../../lib/button';
import Dialog, {modal, alert, confirm} from '../../lib/dialog';
import './PageDialog.scss';

export interface PageIconProps {
  name?: string;
}

const callModal = () => {
  const closeModal = modal({
    content: <div className="content">这里是自定义内容</div>,
    buttons: (
      <Fragment>
        <Button
          onClick={() => {
            closeModal();
          }}
        >
          自定义的取消
        </Button>
        <Button
          onClick={() => {
            closeModal();
          }}
        >
          自定义的确认
        </Button>
      </Fragment>
    ),
    title: <div className="title">自定义标题</div>,
  });
};
const callAlert = () =>
  alert({
    content: <div>这是一个alert</div>,
    onConfirm: (event) => {
      console.log('Alert confirmed');
    },
  });
const callConfirm = () => {
  const closeModal = confirm({
    onConfirm: () => {
      closeModal();
      console.log('confirm');
    },
    onCancel: () => {
      closeModal();
      console.log('cancel');
    },
    content: <div className="content">这里是内容</div>,
  });
};

const PageDialog: React.FunctionComponent<PageIconProps> = (props) => {
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

  return (
    <div className="page-dialog">
      <Button onClick={() => setVisible(true)}>打开对话框</Button>
      <Button onClick={callAlert}>Alert</Button>
      <Button onClick={callConfirm}>Confirm</Button>
      <Button onClick={callModal}>Modal</Button>
      <Dialog
        visible={visible}
        onConfirm={onConfirm}
        onCancel={onCancel}
        titleNode={title}
      >
        <div className="dialog-content">中间的文字</div>
      </Dialog>
    </div>
  );
};

export default PageDialog;
