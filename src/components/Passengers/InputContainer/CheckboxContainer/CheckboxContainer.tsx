import './CheckboxContainer.css';

interface CheckboxContainerProps {
  checked: boolean;
  onChange: (checked: boolean, title?: string) => void;
  title:string;
}

const CheckboxContainer = ({checked, onChange, title} :CheckboxContainerProps) => {
  
  
  return (
    <div className="passenger__limited-container-box">
      <input className='passenger__limited-container-box-checkbox'  
      type="checkbox" id='checkbox' checked={checked} 
      onChange={() =>onChange(checked, title)} />
      <label  
      htmlFor='checkbox' 
      className='passenger__limited-container-box-text'>{title}</label>
    </div>
  )
}

export default CheckboxContainer;``