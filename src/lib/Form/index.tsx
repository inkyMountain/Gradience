import React, {ChangeEvent, CSSProperties, FormEvent, ReactElement} from 'react';
import Input from '../input';
import './index.scss';
import Button from '../button';

interface FormProps {
  fields: Field[],
  onChange: OnInputChange,
  onSubmit: (event: FormEvent) => void,
  className?: string,
  style?: CSSProperties,
  buttons?: ReactElement,
  errors: { [Key: string]: boolean }
}

export interface Field {
  name: string,
  label: string,
  value?: string,
  placeholder?: string,
}

export type OnInputChange = (
  change: { index: number, newContent: string },
  event?: ChangeEvent
) => void

const Form: React.FC<FormProps> = props => {
  const {fields, buttons, errors} = props;
  const onChange = (index: number, newContent: string, event: ChangeEvent) => {
    props.onChange({index, newContent}, event);
  };


  return (
    <form className={'gui-form'} onSubmit={event => {
      event.preventDefault();
      props.onSubmit(event);
    }}>
      <table className='gui-form-table'>
        <tbody>
        {fields.map((field, index) =>
          <tr key={index}>
            <td className="gui-form-label" key={index}>
              <div>{field.label}</div>
            </td>
            <td className="gui-form-input">
              <Input key={index}
                     value={field.value}
                     onChange={(event) =>
                       onChange(index, event.target.value, event)
                     }/>
              <div className="error">{errors[field.name]}</div>
            </td>
          </tr>
        )}
        <tr>
          <td/>
          <td className={'gui-form-buttons'}>
            {buttons || <Button type={'submit'}>提交</Button>}
          </td>
        </tr>
        </tbody>
      </table>
    </form>
  );
};

export default Form;
