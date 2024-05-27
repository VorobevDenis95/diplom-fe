import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import './CheckboxItem.css';
import CheckBox from "./СheckBox";

interface CheckBoxItemProps {
  src: string;
  title: string;
  params: string
}

const CheckBoxItem = ({src, title, params}: CheckBoxItemProps) => {

  const [searchParams, setSearchParams] = useSearchParams();

  const [value, setValue] = useState(searchParams.get(params) ? !!searchParams.get(params) : false);

  const prevParams = Object.fromEntries(searchParams);
  // const obj = {params: `${value}`};
  // setSearchParams({...prevParams, [params] :`${value}`})

  useEffect(() => {
    if (value && prevParams[params] !== `${value}`) {
      setSearchParams({...prevParams, [params]: `${value}`})
    }
    if (searchParams.get(params)) {
      if (!value && prevParams[params]) {
        delete prevParams[params];
        // удаляем свойство из гет параметра при значении фолс
      setSearchParams({...prevParams});
      }
    }
  }, [value])
  
  return (
    <div className="setting__checkbox__container">
      <img src={src} alt="icon__wagon-type" />
      <span>{title}</span>
        <CheckBox name={title}
        value={value} onChange={() => {
          setValue(!value)
        }} />
    </div>
  )
}

export default CheckBoxItem;