import { useState } from 'react';
import './DirectTimeContainer.css';
import SliderContainer from '../SliderContainer/SliderContainer';

interface DirectTImeContainerProps {
  src: string;
  title: string;
}

const DirectTImeContainer = ({src, title} :DirectTImeContainerProps) => {
  const [isActive, setActive] = useState(false);
  const [value, setValue] = useState({min: 0, max: 24});
  const [valueFrom, setValueFrom] = useState({min: 0, max: 24});

  return (
    <div className="direct-time__container">
      <div className='direct-time__container-main'>
        <div className='direct-time__container-main-flex'>
          <img src={src} alt="icon arrow" />
          <h2>{title}</h2>

        </div>
        <button onClick={() => {setActive(!isActive)}}
        className={`direct-time__container_btn-show-content ${isActive ? 'active__btn' : ''}`}>
          {isActive ? '-' : '+'}
        </button>
      </div>
      {
        isActive && 
        <>
          <span>Время отбытия</span>
          <SliderContainer time
          min={0} max={24} value={value} step={1} onChange={setValue} />
          <span>Время прибытия</span>
          <SliderContainer time 
          min={0} max={24} value={valueFrom} step={1} onChange={setValueFrom} />
        </>
      }
    </div> 
  )
}

export default DirectTImeContainer;