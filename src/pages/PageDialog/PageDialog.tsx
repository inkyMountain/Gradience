import React, {useState} from 'react';
import Button from '../../lib/Button/Button';
import Dialog from '../../lib/Dialog/Dialog';
import './PageDialog.scss';

export interface PageIconProps {
  name?: string
}

const PageDialog: React.FunctionComponent<PageIconProps> = props => {
  const [visible, setVisible] = useState(false);
  return (
    <div className='page-Dialog'>
      <Button onClick={() => setVisible(true)}>打开对话框</Button>
      <Dialog visible={visible} onConfirm={() => console.log('Dialog confirmed~')}
              onCancel={() => setVisible(false)}>
        中间的文字
      </Dialog>
    </div>
  );
};

export default PageDialog;
