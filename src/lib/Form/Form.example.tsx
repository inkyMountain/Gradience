import React, {FormEvent, Fragment, useState} from 'react';
import Form from './Form';
import {Field, OnInputChange} from './Form';
import Button from '../Button/Button';
import validator from './validator';
import {Errors} from './validator';

const FormExample: React.FC = props => {
  const onInputChange: OnInputChange = ({index, newContent}) => {
    console.log(index, newContent);
    fields[index].value = newContent;
    setFields(fields);
  };
  const [fields, setFields] = useState<Array<Field>>([
    {label: '早饭', value: '油条豆浆', name: 'breakfast'},
    {label: '中饭', value: '盖浇饭', name: 'meal'},
    {label: '晚饭', value: '牛排', name: 'dinner'}
  ]);
  const onSubmit = (event: FormEvent) => {
    const errors = validator({
      breakfast: {required: [true, '必须要吃早饭哦']},
      meal: {required: [true, '必须要吃中饭哦']},
      dinner: {required: [true, '必须要吃晚饭哦']},
    }, fields);
    console.log(errors);
    setErrors(errors);
  };
  const [errors, setErrors] = useState<Errors>({});
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




