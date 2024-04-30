import { useEffect, useState } from "react";


export type GenderType = 'male' | 'female'; 

interface RadioBtnItem {
  type: GenderType;
  activeType: GenderType;
  clickItem: (type: GenderType) => void;
}

const RadioBtnItem = ({type, activeType, clickItem}: RadioBtnItem) => {
  
  const [text, setText] = useState(type === 'male' ? 'М' : 'Ж');
  
  useEffect(() => {
    type === 'male' ? setText('М') : setText('Ж');
  }, [type])
  
  return (
    <div onClick={() => clickItem(type)} 
    className={`radio__btn-item ${activeType === type ? 'radio__btn-item-active' : ''}`} >
      {text}
    </div>
  )
}

export default RadioBtnItem;