import './DateInput.css';

const DateInput = () => {
  return (
    <input className='input-date' 
    type="text" placeholder='ДД.ММ.ГГ' 
    pattern='\d{2}\.\d{2}\.\d{4}'
    required/>
  )
}

export default DateInput;