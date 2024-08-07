import { useEffect, useState } from 'react';
import './DirectTimeContainer.css';
import SliderContainer from '../SliderContainer/SliderContainer';
import useDebounce from '../../../shared/hooks/useDebounce';
import { useSearchParams } from 'react-router-dom';
import { DirectTImeContainerProps } from '../../../shared/types/components/componentsTypes.tsx';

const DirectTImeContainer = ({src, title} :DirectTImeContainerProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const prevParams = Object.fromEntries(searchParams);
  const [currentParams] = useState<string>(title === 'Туда' ? 'start_' : 'end_');
  
  const [isActive, setActive] = useState(false);
  const [value, setValue] = useState({
    min: searchParams.get(`${currentParams}arrival_hour_from`) ? Number(searchParams.get(`${currentParams}arrival_hour_from`)) : 0,
    max: searchParams.get(`${currentParams}arrival_hour_to`) ? Number(searchParams.get(`${currentParams}arrival_hour_to`)) : 24
  });

  const [valueFrom, setValueFrom] = useState({

    min: searchParams.get(`${currentParams}departure_hour_from`) ? Number(searchParams.get(`${currentParams}departure_hour_from`)) : 0,
    max: searchParams.get(`${currentParams}departure_hour_to`) ? Number(searchParams.get(`${currentParams}departure_hour_to`)) : 24
  });

  const debounceValue = useDebounce(value);
  const debounceValueFrom = useDebounce(valueFrom);


  useEffect(() => {
    if (value.max !== Number(prevParams[`${currentParams}arrival_hour_to`]) && value.max !== 24) {
      setSearchParams({...prevParams, [`${currentParams}arrival_hour_to`]: `${value.max}`})
    }
    if (value.max === 24 && prevParams[`${currentParams}arrival_hour_to`]) {
      delete prevParams[`${currentParams}arrival_hour_to`];
      setSearchParams({...prevParams});
    }

  }, [debounceValue.max])

  useEffect(() => {
    if (value.min !== Number(prevParams[`${currentParams}arrival_hour_from`]) && value.min !== 0) {
      setSearchParams({...prevParams, [`${currentParams}arrival_hour_from`]: `${value.min}`})
    }
    if (value.min === 0 && prevParams[`${currentParams}arrival_hour_from`]) {
      delete prevParams[`${currentParams}arrival_hour_from`];
      setSearchParams({...prevParams});
    }
  }, [debounceValue.min])

  useEffect(() => {
    if (valueFrom.max !== Number(prevParams[`${currentParams}departure_hour_to`]) && valueFrom.max !== 24) {
      setSearchParams({...prevParams, [`${currentParams}departure_hour_to`]: `${valueFrom.max}`})
    }
    if (valueFrom.max === 24 && prevParams[`${currentParams}departure_hour_to`]) {
      delete prevParams[`${currentParams}departure_hour_to`];
      setSearchParams({...prevParams});
    }

  }, [debounceValueFrom.max])


  useEffect(() => {

    if (valueFrom.min !== Number(prevParams[`${currentParams}departure_hour_from`]) && valueFrom.min !== 0) {
      setSearchParams({...prevParams, [`${currentParams}departure_hour_from`]: `${valueFrom.min}`})
    }
    if (valueFrom.min === 0 && prevParams[`${currentParams}departure_hour_from`]) {
      delete prevParams[`${currentParams}departure_hour_from`];
      setSearchParams({...prevParams});
    }

  }, [debounceValueFrom.min])


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
          <SliderContainer 
          time direction={true}
          min={0} max={24} value={valueFrom} step={1} onChange={setValueFrom} />
          <span>Время прибытия</span>
          <SliderContainer direction={true} 
          time 
          min={0} max={24} value={value} step={1} onChange={setValue} />
        </>
      }
    </div> 
  )
}

export default DirectTImeContainer;