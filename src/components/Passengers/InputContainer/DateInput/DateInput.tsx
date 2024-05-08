import { ChangeEvent, useEffect, useRef } from 'react';
import './DateInput.css';
import { addPointDate } from './utils';

export type InputType = 'first_name' | 'last_name' | 'patronymic' | 'birthday' ; 

export interface InputPassengerProps {
  type: InputType;
  changeInput: (type: InputType, e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

function getCurrentValue (value: string) {

  const data = value.split('.');
  console.log(data)

  const day = data[2];
  const month = data[1]
  const year = data[0];

  if (day && month && year) {
    const newYear = year[0] === '2' 
    ? Number(year) - 2000 : Number(year) - 1900;
    return `${day}.${month}.${newYear}`;
  }

  return ''
}


const DateInput = ({type, changeInput, value} : InputPassengerProps) => {
  
  const myDateInput = useRef<HTMLInputElement>(null);
  // const myInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (value !== undefined && myDateInput.current) {
      if (value) {
        getCurrentValue(value);
        myDateInput.current.value = getCurrentValue(value);
      }
    }
  }, []);

  const inputValue = myDateInput.current?.value ? addPointDate(myDateInput.current.value) : '';


  return (
    <input className='input-date' 
    type="text" placeholder='ДД.ММ.ГГ' 
    onChange={(e) => changeInput(type, e)}
    ref={myDateInput}
    value={inputValue}
    pattern='\d{2}\.\d{2}\.\d{4}'
    required/>
  )
}

export default DateInput;