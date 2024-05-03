import { ChangeEvent, useRef } from 'react';
import './DateInput.css';
import { addPointDate } from './utils';

export type InputType = 'first_name' | 'last_name' | 'patronymic' | 'birthday' ; 

export interface InputPassengerProps {
  type: InputType;
  changeInput: (type: InputType, e: ChangeEvent<HTMLInputElement>) => void;
}

const DateInput = ({type, changeInput} : InputPassengerProps) => {
  
  const myDateInput = useRef<HTMLInputElement>(null);

  return (
    <input className='input-date' 
    type="text" placeholder='ДД.ММ.ГГ' 
    onChange={(e) => changeInput(type, e)}
    ref={myDateInput}
    value={addPointDate(myDateInput.current?.value ?? '')}
    pattern='\d{2}\.\d{2}\.\d{4}'
    required/>
  )
}

export default DateInput;