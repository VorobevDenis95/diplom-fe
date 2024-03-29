import React, { useEffect, useState, useRef } from "react"
import { InputProps } from "../../shared/types/types";
import { getCities } from "../../shared/api/serviceApi";
import DropdownListOfHints from "./Additional/DropdownListOfHints";
import { CitiesProps, CityProps } from "../../shared/types/types";
import useDebounce from "../../shared/hooks/useDebounce";
import { useAppDispatch, useAppSelector } from "../../shared/redux/redux-hooks";
import { setCityFrom, setCityTo } from "../../shared/redux/slice/directionSlice";


const CityInput = ({nameClass, placeholder}: InputProps) => {
  const [inputValue, setInputValue] = useState('');
  const [isActive, setActiveList] = useState(false);
  // const abortControllerRef = new AbortController();
  const abortControllerRef = useRef<AbortController>(new AbortController());
  const [listCities, setListCities] = useState<CitiesProps['list']>([]);
  const debounceGetCities = useDebounce(inputValue);
  // const [timeout, setMyTimeout] = useState(0);
  const [city, setCity] = useState<CityProps>({
    id: '',
    name: '',
  });

  const {cityFrom, cityTo} = useAppSelector(state => state.direction);

  const currentCity = nameClass === 'form-direction__city-from' ? cityFrom : cityTo;

  const dispatch = useAppDispatch();

  const changeInput = (value: string) => {
    setCity((prevstate) => {
      return {
        ...prevstate,
        name: value,
      }
    })
  }

  // передавать в диспач город
  // useEffect(() => {

  // }, [city])

  useEffect(() => {
    if (!inputValue.trim()) {
      setListCities([]);
      setActiveList(false)
      return;
    }
  (async () => {
    // const data = await debounceGetCities(inputValue);
    const data = await getCities(debounceGetCities, abortControllerRef.current!)
    if (data) {
      // если город в инпуте равен городу в подсказке
      // выбираем город и не показываем подсказку
      if (data.length === 1 && data[0].name === inputValue ) {
        setCity(data[0]) 
        setActiveList(false);
        return;
      }

      const list : CitiesProps['list'] = data;
      setListCities(list);
      setActiveList(true);
    }
    if (data?.length === 0) {
      setListCities([]);
      setActiveList(false);
    }
  }
    )()
    
  }, [debounceGetCities]);

  useEffect(() => {
    if (nameClass === 'form-direction__city-from') dispatch(setCityFrom(city));
     
    if (nameClass === 'form-direction__city-to') dispatch(setCityTo(city))
  }, [city])

  useEffect(() => {
    changeInput(inputValue);
  }, [inputValue])

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(listCities[0].name);
    // if ( listCities.length > 0 && e.target.value === listCities[0].name) {
    //   console.log(2)

    // }
    if (abortControllerRef.current.signal.aborted) 
      abortControllerRef.current = new AbortController();
      setInputValue(e.target.value);
    }
    
    const handleClick = (el: CityProps) => {
      if (city?.id !== el._id) {
        setCity(el);
        setInputValue(el.name);
      }
      if (inputValue !== el.name) setInputValue(el.name);
      
      if (el) setActiveList(false);
      abortControllerRef.current.abort();
      // abortControllerRef.current = new AbortController();
    // setActiveList(false);
    
  }

  return (
    <>
      <div className="city-input">
        <input className={nameClass} type="text" required
          placeholder={placeholder}
          // onBlur={
          //   (e) => {
          //     if (!city) {
                       
          //     }
          //   }
          // }
          value={currentCity.name} onChange={onChangeValue}
      />
        <DropdownListOfHints 
          isActive={isActive}
          handleClick={handleClick} list={listCities}/>
      </div>
    </>
  )
}

export default CityInput;