import { useEffect, useState } from 'react';
import SliderContainer from '../SettingsContainer/SliderContainer/SliderContainer';
import './PriceContainer.css';
import { useSearchParams } from 'react-router-dom';
import useDebounce from '../../shared/hooks/useDebounce';
// import { useAppSelector } from '../../shared/redux/redux-hooks';

// const PriceContainer = ({items} : Omit<ResponseRoutes, 'total_count'>) => {
const PriceContainer = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [value, setValue] = useState({min: 100, max: 20000});
  const prevParams = Object.fromEntries(searchParams);
  const debounceValue = useDebounce(value);
  
  // const {status} = useAppSelector(state => state.direction)
  useEffect(() => {
    // setSearchParams({ ...prevParams, price_from: `${value.max}`});
    setSearchParams({ ...prevParams, price_to: `${debounceValue.max}`});
  }, [debounceValue.max])

  useEffect(() => {
    setSearchParams({ ...prevParams, price_from: `${debounceValue.min}`});
    }, [debounceValue.min])

  return (
    <>
      <div className='price__container'>
        <h2>Стоимость</h2>
        <div className='price__container__sort-name'>
          <span>от</span>
          <span>до</span>
        </div>
        <SliderContainer min={100} max={20000} step={1}
        value={value} onChange={setValue}/>
      </div>

    </>
  )
}

export default PriceContainer;