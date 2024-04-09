import { useState } from 'react';
import './DirectTimeContainer.css';
import SliderContainer from '../SliderContainer/SliderContainer';

const DirectTImeContainer = () => {
  const [isActive, setActive] = useState(false);


  return (
    <div className="direct-time__container">
      <img src="" alt="icon arrow" />
      <SliderContainer min={} />
    </div> 
  )
}

export default DirectTImeContainer;