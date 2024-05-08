import { ChangeEvent, useEffect, useRef } from 'react';
import './InputPassenger.css';
import { capitalized } from '../../utils';

export type InputType = 'first_name' | 'last_name' | 'patronymic' | 'birthday';

export interface InputPassengerProps {
  type: InputType;
  changeInput: (type: InputType, e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const InputPassenger = ({ type, changeInput, value }: InputPassengerProps) => {

  const myInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (value !== undefined && myInput.current) {
      myInput.current.value = capitalized(value);
    }
  }, []);

  const inputValue = myInput.current?.value ? capitalized(myInput.current.value) : '';

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    changeInput(type, e);
  }

  return (
    <input
      className='passenger_input-fullname'
      onChange={handleChange}
      ref={myInput}
      value={inputValue}
      type='text'
      required
    />
  )
}

export default InputPassenger;