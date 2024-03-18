import { useEffect, useRef, useState } from "react";
import DatePicker from "./Additional/Datepicker";
import { getCurrentDate, setCurrentDate } from "./utils";
import { CoordinatesProps, InputProps } from "../../shared/types/types";

const DateInput = ({nameClass }: InputProps) => {
  const [date, setDate] = useState<Date>();
  const [isDatepicker, setActiveDatePicker] = useState(false);
  const myInput  = useRef<HTMLInputElement>(null);
  const [coordinates, setСoordinates] = useState<CoordinatesProps>();
  const currentDate = date ? date : new Date();

  const [valueInput, setValueInput] = useState('');

  useEffect(() => {
    const el = myInput.current?.getBoundingClientRect();
    console.log(el)
    if (el) {
      const {x, y, height, width}  = el;
      setСoordinates({
        x, y, height, width
      })
    } 
  }, [])

  useEffect(() => {
    if (date) setValueInput(getCurrentDate(date))
  }, [date])

  const dateClick = () => {
    isDatepicker ? setActiveDatePicker(false) 
    : setActiveDatePicker(true);
  }

  const handleBlur = () => {
    if (!isDatepicker && valueInput.length === 8) {
      setDate(setCurrentDate(valueInput));
    }

    // setTimeout(() => {
    //   if (isDatepicker) {
    //     setActiveDatePicker(false);
    //     return;
    //   }
    // }, 100);
  }

  return (
    <>
    <input className={nameClass} type="text" 
    pattern="\d{2}\.\d{2}\.\d{2}"
    ref={myInput}
    onBlur={handleBlur} 
    onClick={dateClick}
    placeholder="ДД.ММ.ГГ"
    maxLength={8}
    minLength={8}
    value={valueInput}
    onChange={(e) => {
      setValueInput(e.target.value)
    }}

    required/>

    {
      isDatepicker && 
      <DatePicker value={currentDate}
      coordinates={coordinates as CoordinatesProps}  
      onClickDate={setActiveDatePicker}
      onChange={setDate}/>
    }
    </>
  )
}

export default DateInput;