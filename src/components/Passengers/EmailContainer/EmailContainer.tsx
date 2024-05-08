import { useEffect, useRef } from 'react';
import { PhoneEmailContainerProps } from '../PhoneContainer/PhoneContainer';
import './EmailContainer.css';

const EmailContainer = ({value, onChange, type} :PhoneEmailContainerProps) => {

  const myInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (value !== undefined && myInput.current) {
      myInput.current.value = value;
    }
  }, []);

  const inputValue = myInput.current?.value ? myInput.current?.value : '';

  return (
    <input onChange={(e) => onChange(type, e)}
      value={inputValue}
      ref={myInput}
      className='passenger_input-fullname passenger_input-long' type="email"
      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2}$" required 
      placeholder='inbox@gmail.ru'/>
  )
}

export default EmailContainer;