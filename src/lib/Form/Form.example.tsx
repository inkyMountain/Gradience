import React, {FormEvent, Fragment, useState} from 'react';
import Form from './Form';
import {Field, OnInputChange} from './Form';
import Button from '../Button/Button';
import validator from './validator';

// const rules = [
//   {name: ''}
// ]

const FormExample: React.FC = props => {
  const onInputChange: OnInputChange = ({index, newContent}) => {
    console.log(index, newContent);
    fields[index].value = newContent;
    setFields(fields);
  };
  const onSubmit = (event: FormEvent) => {
    setErrors(validator([]));
    console.log('表单提交');
  };
  const [fields, setFields] = useState<Array<Field>>([
    {label: '早饭吃什么', value: '早饭'},
    {label: '中饭吃什么', value: '中饭'},
    {label: '晚饭吃什么呀呀呀呀呀呀', value: '晚饭'}
  ]);
  const [errors, setErrors] = useState<Array<string>>(['']);
  const FormButtons = <Button type={'submit'}>提交</Button>;

  return (
    <Fragment>
      <div className="form-example">
        <Form fields={fields} onChange={onInputChange}
              onSubmit={onSubmit} buttons={FormButtons}
              errors={errors}
        />
      </div>
    </Fragment>
  );
};

export default FormExample;
