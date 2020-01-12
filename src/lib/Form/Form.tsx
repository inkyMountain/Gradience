import React, {useRef, useState} from 'react';
import './Form.scss';

interface FormProps extends React.HTMLAttributes<any> {

}

const Layout: React.FC<FormProps> = props => {
  const [name, setName] = useState('');
  const nameInputRef = useRef<HTMLInputElement>(null);
  return (
    <form className={'gui-form'}>
      非受控组件<input type="text" defaultValue={''} ref={nameInputRef} onChange={event => {
      console.log(nameInputRef.current!.value);
    }}/>
      受控组件<input type="text" value={name} onChange={event => {
      console.log(event.target.value);
      setName(event.target.value);
    }}/>
    </form>
  );
};

export default Layout;
