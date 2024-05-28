import { useEffect, useRef, useState } from "react";
import DatePicker from "./Additional/Datepicker";
import { getCurrentDate, setCurrentDate } from "./utils";
import { useAppDispatch, useAppSelector } from "../../shared/redux/redux-hooks";
import { setDateEnd, setDateStart } from "../../shared/redux/slice/directionSlice";
import { useSearchParams } from "react-router-dom";
import { DateInputProps } from "../../shared/types/components/componentsTypes";

const DateInput = ({ nameClass, data }: DateInputProps) => {
  const [date, setDate] = useState<Date>();
  const [isDatepicker, setActiveDatePicker] = useState(false);
  const myInput = useRef<HTMLInputElement>(null);

  const currentDate = date ? date : new Date();
  
  const [timeout, setTimeoutBlur] = useState(0);
  
  const [valueInput, setValueInput] = useState(data ? data : '');
  
  const { dateStart, dateTo } = useAppSelector(state => state.direction);
  const currentDateInput = nameClass === 'search-form__input-date-from' ? dateStart : dateTo;
  
  const actualityDateInput = data ? data : currentDateInput;
  const dispatch = useAppDispatch();

  const [searchParams, setSearchParams] = useSearchParams();
  const prevParams = Object.fromEntries(searchParams);

  useEffect(() => {
    if (nameClass === 'search-form__input-date-from') {
      dispatch(setDateStart(valueInput));
    } 

    if (nameClass === 'search-form__input-date-to') {
      dispatch(setDateEnd(valueInput));
    }

    if (nameClass === 'travel-date__container-date-from' && prevParams.dateFrom !== valueInput && valueInput.trim()) {
      setSearchParams({...prevParams, dateFrom: valueInput});
    }

    if (nameClass === 'travel-date__container-date-to' && prevParams.dateTo !== valueInput && valueInput.trim()) {
      setSearchParams({...prevParams, dateTo: valueInput});
    }
  }, [valueInput])

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
      <div className="input-container-calendar"
      >
        <input className={nameClass} type="text"
          ref={myInput}
          pattern="\d{2}\.\d{2}\.\d{2}"
          onBlur={handleBlur}
          onClick={dateClick}
          placeholder="ДД.ММ.ГГ"
          maxLength={8}
          minLength={8}
          value={actualityDateInput}
          onChange={(e) => {
            setValueInput(e.target.value)
          }}
        />

        {
          isDatepicker &&
          <DatePicker value={currentDate}
            timeout={timeout}
            inputRef={myInput}
            onClickDate={setActiveDatePicker}
            onChange={setDate} />
        }
      </div>
    </>
  )
}

export default DateInput;