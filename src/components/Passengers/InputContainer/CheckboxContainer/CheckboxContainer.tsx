import './CheckboxContainer.css';

interface CheckboxContainerProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const CheckboxContainer = ({checked, onChange} :CheckboxContainerProps) => {
  
  
  return (
    <div className="passenger__limited-container">
      <input className='passenger__limited-container-checkbox' type="checkbox" checked={checked} onChange={() =>onChange(checked)} />
      <span className='passenger__limited-container-text'>ограниченная подвижность</span>
    </div>
  )
}

export default CheckboxContainer;``