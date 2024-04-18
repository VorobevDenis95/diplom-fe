import { useEffect, useRef, useState } from "react";
import DatePicker from "./Additional/Datepicker";
import { getCurrentDate, setCurrentDate } from "./utils";
import { CoordinatesProps, InputProps } from "../../shared/types/types";
import { useAppDispatch, useAppSelector } from "../../shared/redux/redux-hooks";
import { setDateEnd, setDateStart } from "../../shared/redux/slice/directionSlice";

const DateInput = ({nameClass }: InputProps) => {
  const [date, setDate] = useState<Date>();
  const [isDatepicker, setActiveDatePicker] = useState(false);
  const myInput  = useRef<HTMLInputElement>(null);
  const [coordinates, setСoordinates] = useState<CoordinatesProps>();
  const currentDate = date ? date : new Date();

  const [timeout, setTimeoutBlur] = useState(0);

  const [valueInput, setValueInput] = useState('');

  const {dateStart, dateTo} = useAppSelector(state => state.direction);
  const currentDateInput = nameClass === 'search-form__input-date-from' ? dateStart : dateTo;
  const dispatch = useAppDispatch();

  

  useEffect(() => {
    if (nameClass === 'search-form__input-date-from') {
      dispatch(setDateStart(valueInput));
    } else { 
      dispatch(setDateEnd(valueInput));
    } 
  }, [valueInput])

  useEffect(() => {

    const el = myInput.current?.getBoundingClientRect();
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
      return
    }
    
    const time = setTimeout((() => {
      if (isDatepicker) {
        setActiveDatePicker(false);
        return;
      }
    }), 200);
    setTimeoutBlur(time);
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
    value={currentDateInput}
    onChange={(e) => {
      setValueInput(e.target.value)
    }}
    // required={unRequired ? false : true}
    
    />

    {
      isDatepicker && 
      <DatePicker value={currentDate}
      timeout={timeout}
      inputRef={myInput}
      coordinates={coordinates as CoordinatesProps}  
      onClickDate={setActiveDatePicker}
      onChange={setDate}/>
    }
    </>
  )
}

export default DateInput;