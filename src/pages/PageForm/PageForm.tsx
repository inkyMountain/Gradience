import './PageForm.scss';
import React from 'react';
import FormExample from '../../lib/Form/FormExample';

export interface PageFormProps extends React.PropsWithChildren<any> {

}

const PageForm: React.FC<PageFormProps> = props => {
  return (
    <div className="page-form">
      <FormExample/>
    </div>
  );
};

export default PageForm;
