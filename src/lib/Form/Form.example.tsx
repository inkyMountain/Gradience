import React, {FormEvent, Fragment, useState} from 'react';
import Form from './index';
import {Field, OnInputChange} from './index';
import validator from './validator';

function checkUnique(value: string) {
  return new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      // const success = Math.random() > 0.5;
      // success ? resolve(true) : reject(false);
      reject();
    }, 2000);
  });
}

const FormExample: React.FC = (props) => {
  const [fields, setFields] = useState<Array<Field>>([
    {label: '早饭', value: '油条豆浆', name: 'breakfast'},
    {label: '中饭', value: '盖浇饭', name: 'meal'},
    {label: '晚饭', value: '牛排', name: 'dinner'},
  ]);
  const onInputChange: OnInputChange = ({index, newContent}) => {
    console.log(index, newContent);
    fields[index].value = newContent;
    setFields([...fields]);
  };
  const onSubmit = (event: FormEvent) => {
    validator(
      {
        breakfast: {required: true},
        meal: {required: true, validate: (value) => false},
        dinner: {
          required: false,
          validate: (value) => {
            return checkUnique(value);
          },
          suggestion: '晚饭一定要吃的哦晚饭一定要吃的哦晚饭一定要吃的哦',
        },
      },
      fields,
      (errors) => {
        console.log('errors', errors);
        setErrors(errors);
      }
    );
  };
  const [errors, setErrors] = useState<{[Key: string]: boolean}>({});

  return (
    <Fragment>
      <div className="form-example">
        <Form
          fields={fields}
          onChange={onInputChange}
          onSubmit={onSubmit}
          errors={errors}
        />
      </div>
    </Fragment>
  );
};

export default FormExample;
