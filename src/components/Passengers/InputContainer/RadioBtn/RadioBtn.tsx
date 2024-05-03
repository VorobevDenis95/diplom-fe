import './RadioBtn.css';
import RadioBtnItem, { GenderType } from './RadioBtnItem';

interface RadioBtnProps {
  activeTypeGender: GenderType;
  clickBtnGender: (type: GenderType) => void
}

const RadioBtn = ({activeTypeGender, clickBtnGender} : RadioBtnProps) => {
  
  return (
    <div className="radio__btn">
      <RadioBtnItem type='male' activeType={activeTypeGender} clickItem={clickBtnGender}/>
      <RadioBtnItem type='female' activeType={activeTypeGender} clickItem={clickBtnGender}/>
    </div>
  )
}

export default RadioBtn;