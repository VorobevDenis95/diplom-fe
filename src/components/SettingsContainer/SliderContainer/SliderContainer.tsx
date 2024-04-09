import { useEffect, useRef, useState } from 'react';
import './SliderContainer.css'

interface SliderContainerProps {
  min: number;
  max: number;
  value: {
    min: number;
    max: number;
  };
  step: number;
  onChange: (objMinMax: {
    min: number;
    max: number;
  }) => void;
}

const SliderContainer = ({min, max, value, step, onChange}: SliderContainerProps) => {
  const [minValue, setMinValue] = useState(value ? value.min : min);
  const [maxValue, setMaxValue] = useState(value ? value.max : max);

  useEffect(() => {
    if (value) {
      setMinValue(value.min);
      setMaxValue(value.max);
    }
  }, [value])


  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const newMinVal = Math.min(+e.target.value, maxValue - step);
    if (!value) setMinValue(newMinVal);
    onChange({ min: newMinVal, max: maxValue });
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const newMaxVal = Math.max(+e.target.value, minValue + step);
    if (!value) setMaxValue(newMaxVal);
    onChange({ min: minValue, max: newMaxVal });
  };

  const minPos = ((minValue - min) / (max - min)) * 100;
  const maxPos = ((maxValue - min) / (max - min)) * 100;

  const myInput = useRef<HTMLDivElement>(null);
  const myStartSlider = useRef<HTMLDivElement>(null);
  const myEndSlider = useRef<HTMLDivElement>(null);
  
  
  // const handleClickPrice = (e) => {
  //   console.log(e)
  //   const target = e.target;
  //   const coordinates = target.getBoundingClientRect(); 
  //   console.log(coordinates);
  //   if (e.clientX < coordinates.right && e.clientX > coordinates.right - 20) {
  //     console.log(1);
  //   }
  // }


  return (
    <>
      <div className="wrapper">
      <div className="input-wrapper">
        <input
          className="input"
          type="range"
          value={minValue}
          min={min}
          max={max}
          step={step}
          onChange={handleMinChange}
        />
        <input
          className="input"
          type="range"
          value={maxValue}
          min={min}
          max={max}
          step={step}
          onChange={handleMaxChange}
        />
      </div>

      <div className="control-wrapper">
        <div className="control" style={{ left: `${minPos}%` }} />
        <div className="rail">
          <div
            className="inner-rail" 
            style={{ left: `${minPos}%`, right: `${100 - maxPos}%` }}
          />
        </div>
        <div className="control" style={{ left: `${maxPos}%` }} />
      </div>
    </div>
    <div className="control__container">
      <div className='control__value-default'>
        <div className='value-default__min'>{min}</div>
        <div className='value-default__max'>{max}</div>
      </div>
      <div className='control__value-container'>
        <div className='number value__start'
        style={{ left: `${minPos}%`, right: `${100 - maxPos}%` }}
        >{minValue}</div>
        <div className='number value__end'
        style={{ left: `${maxPos* 0.8}%` }}
        >{maxValue}</div>

      </div>

    </div>
    </>



    // <div className="price__container">
    //   <h3>Стоимость</h3>
    //   <div className='price__container__input'>
    //     <div className="price__container__inpit-filed"
    //       onClick={handleClickPrice}
    //       ref={myInput}>
    //       <div className='price__container__input__start'
    //       ref={myStartSlider}/>
    //       <div className='price__container__input__end'/>
    //     </div>
    //   </div>
    // </div>    
  )
}

export default SliderContainer;