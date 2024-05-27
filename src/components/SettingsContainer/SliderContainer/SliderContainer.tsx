import { useEffect, useState } from 'react';
import './SliderContainer.css'

interface SliderContainerProps {
  time?: boolean; 
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

const SliderContainer = ({ min, max, value, step, onChange, time }: SliderContainerProps) => {
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
    console.log(e.target.value)
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
          {value.min >= min * 20 && <div className='value-default__min'>{min.toLocaleString('ru-RU')}</div>}
          { value.max < max * 0.8 &&<div className='value-default__max'>{max.toLocaleString('ru-RU')}</div>}
        </div>
        <div className='control__value-container'>
          <div className='number value__start'
            style={{ left: `${minPos}%`, right: `${100 - maxPos}%` }}
          >{minValue.toLocaleString('ru-RU')}</div>
          <div className='number value__end'
            style={{ left: time ? `${maxPos * 0.9}%` : `${maxPos * 0.8}%` }}
          >{maxValue.toLocaleString('ru-RU')}</div>

        </div>

      </div>
    </>
  )
}

export default SliderContainer;