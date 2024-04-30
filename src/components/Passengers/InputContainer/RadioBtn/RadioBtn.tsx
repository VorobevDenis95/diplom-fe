import { useState } from 'react';
import './RadioBtn.css';
import RadioBtnItem, { GenderType } from './RadioBtnItem';

const RadioBtn = () => {

  const [isActiveType, setActiveType] = useState<GenderType>('male');

  const clickBtn = (type:  GenderType) => {
    setActiveType(type);
  }
  
  
  return (
    <div className="radio__btn">
      <RadioBtnItem type='male' activeType={isActiveType} clickItem={clickBtn}/>
      <RadioBtnItem type='female' activeType={isActiveType} clickItem={clickBtn}/>
    </div>
  )
}

export default RadioBtn;