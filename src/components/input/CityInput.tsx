import React, { useEffect, useState } from "react"
import { InputProps } from "../../shared/types/types";
import { getCities } from "../../shared/api/serviceApi";
import DropdownListOfHints from "./Additional/DropdownListOfHints";
import { CitiesProps, CityProps } from "../../shared/types/types";
import useDebounce from "../../shared/hooks/useDebounce";


const CityInput = ({nameClass, placeholder}: InputProps) => {
  const [inputValue, setInputValue] = useState('');
  const [isActive, setActiveList] = useState(false);
  // const abortControllerRef = useRef<AbortController>(new AbortController());
  const [listCities, setListCities] = useState<CitiesProps['list']>([]);

  const debounceGetCities = useDebounce(inputValue);

  useEffect(() => {
    if (!inputValue.trim()) {
      setListCities([]);
      setActiveList(false)
      return;
    }
  (async () => {
    // const data = await debounceGetCities(inputValue);
    const data = await getCities(debounceGetCities)
    if (data) {
      const list : CitiesProps['list'] = data;
      setListCities(list);
      setActiveList(true);
      
    }
  }
    )()
    
  }, [debounceGetCities])

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  }

  const handleClick = (el: CityProps) => {
    if (el) setActiveList(false);
    setInputValue(el.name);
  }

  return (
    <>
      <input className={nameClass} type="text" required
        placeholder={placeholder}
        value={inputValue} onChange={onChangeValue}
    />
      <DropdownListOfHints 
        isActive={isActive}
        handleClick={handleClick} list={listCities}/>
    </>
  )
}

export default CityInput