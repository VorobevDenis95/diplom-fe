import { useEffect, useState } from 'react';
import './SliderContainer.css'
import { SliderContainerProps } from '../../../shared/types/components/componentsTypes';

const SliderContainer = ({ min, max, value, step, onChange, time, direction }: SliderContainerProps) => {
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

        <div className={`control-wrapper ${direction ? 'control-wrapper__direction' : ''}`}>
          <div className={`control ${direction ? 'control__direction' : ''}`} style={{ left: `${minPos}%` }} />
          <div className={`rail ${direction ? 'rail__direction' : ''}`}>
            <div
              className={`inner-rail ${direction ? 'inner-rail__direction' : ''}`}
              style={{ left: `${minPos}%`, right: `${100 - maxPos}%` }}
            />
          </div>
          <div className={`control ${direction ? 'control__direction' : ''}`} style={{ left: `${maxPos}%` }} />
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