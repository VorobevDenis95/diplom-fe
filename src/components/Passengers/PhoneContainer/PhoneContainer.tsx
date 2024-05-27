import { ChangeEvent, useEffect, useRef } from "react";
import './PhoneContainer.css';
// import { replaceNumberPhone } from "./utils";

export type EmailPhoneInput = 'phone' | 'email';

export interface PhoneEmailContainerProps {
  value: string;
  onChange: (type: EmailPhoneInput, e: ChangeEvent<HTMLInputElement>) => void;
  type: EmailPhoneInput;
}

const PhoneContainer = ({ value, onChange, type }: PhoneEmailContainerProps) => {

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
      className="passenger_input-fullname passenger_input-long"
      type="text" placeholder="+7 ___ ___ __ __"
      pattern="\+7\s[9]{1}[0-9]{2}\s[0-9]{3}\s[0-9]{2}\s[0-9]{2}" required />
  )
}

export default PhoneContainer;
