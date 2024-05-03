import { ChangeEvent, useRef } from 'react';
import './InputPassenger.css';
import { capitalized } from '../../utils';

export type InputType = 'first_name' | 'last_name' | 'patronymic' | 'birthday';

export interface InputPassengerProps {
  type: InputType;
  changeInput: (type: InputType, e: ChangeEvent<HTMLInputElement>) => void;
}

const InputPassenger = ({ type, changeInput }: InputPassengerProps) => {

  const myInput = useRef<HTMLInputElement>(null);

  return (
    <input
      className='passenger_input-fullname'
      onChange={(e: ChangeEvent<HTMLInputElement>) => changeInput(type, e)}
      ref={myInput}
      value={capitalized(myInput.current?.value ?? '')}
      type='text'
    />
  )
}

export default InputPassenger;