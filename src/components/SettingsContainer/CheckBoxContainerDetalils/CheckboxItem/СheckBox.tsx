import './CheckBox.css';

interface CheckBoxProps {
  name: string;
  value: boolean;
  onChange: () => void;
}

const CheckBox = ({name, value, onChange}: CheckBoxProps) => {
  return (
    <>
      <input type="checkbox" id={`checkbox${name}` } 
      defaultChecked={value} onChange={onChange}/>
      <label htmlFor={`checkbox${name}`}></label>
    </>
  )
}

export default CheckBox;