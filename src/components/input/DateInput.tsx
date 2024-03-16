import { useEffect, useRef, useState } from "react";
import DatePicker from "./Additional/Datepicker";
import { getCurrentDate } from "./utils";
import { CoordinatesProps, InputProps } from "../../shared/types/types";

const DateInput = ({nameClass }: InputProps) => {
  const [date, setDate] = useState<Date>();
  const [isDatepicker, setActiveDatePicker] = useState(false);
  const myInput  = useRef<HTMLInputElement>(null);
  const [coordinates, setСoordinates] = useState<CoordinatesProps>();
  const currentDate = date ? date : new Date();

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

  const dateClick = () => {
    console.log(myInput.current);
    isDatepicker ? setActiveDatePicker(false) 
    : setActiveDatePicker(true);
  }

  const handleBlur = () => {
    setTimeout(() => {
      if (isDatepicker) setActiveDatePicker(false);
    }, 100)
  }

  return (
    <>
    <input className={nameClass} type="text" 
    ref={myInput}
    onBlur={handleBlur} 
    onClick={dateClick}
    placeholder="ДД.ММ.ГГ"
    defaultValue={date 
      ? getCurrentDate(date)
      : '' }
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