import { useEffect, useState } from 'react';
import SliderContainer from '../SettingsContainer/SliderContainer/SliderContainer';
import './PriceContainer.css';
import { useSearchParams } from 'react-router-dom';
import useDebounce from '../../shared/hooks/useDebounce';

const PriceContainer = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [value, setValue] = useState({
    min: searchParams.get('price_from') ? Number(searchParams.get('price_from')) : 100,
    max: searchParams.get('price_to') ? Number(searchParams.get('price_to')) : 20000
  });
  const prevParams = Object.fromEntries(searchParams);
  const debounceValue = useDebounce(value);

  useEffect(() => {
    if (value.max !== Number(prevParams.price_to) && value.max !== 20000) {
      setSearchParams({ ...prevParams, price_to: `${debounceValue.max}` });
    }
    if (value.max === 20000 && prevParams.price_to) {
      delete prevParams.price_to;
      setSearchParams(prevParams);
    }
  }, [debounceValue.max])

  useEffect(() => {
    if (value.min !== Number(prevParams.price_from) && value.min !== 100) {
      setSearchParams({ ...prevParams, price_from: `${debounceValue.min}` });
    }
    if (value.min === 100 && prevParams.price_from) {
      delete prevParams.price_from;
      setSearchParams(prevParams);
    }

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
          value={value} onChange={setValue} />
      </div>

    </>
  )
}

export default PriceContainer;