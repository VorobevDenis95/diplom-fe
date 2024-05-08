import { PaymentMethodType } from "../../../../pages/Payment/Payment";
import './RadioContainer.css'

interface RadioContainerProps {
  radioName: string;
  title: string;
  value: PaymentMethodType
  onChange: (value: PaymentMethodType) => void;
}

const RadioContainer = ({radioName, title, value, onChange} :RadioContainerProps) => {
  return (
    <div className="passenger__limited-container">
      <input className='passenger__limited-container-radio'
      id={value}
      value={value} type="radio" name={radioName} required
      onChange={() => onChange(value)}/>
      <label htmlFor={value} 
      className='passenger__limited-container-text'>{title}</label>
    </div>
  )
}

export default RadioContainer;

