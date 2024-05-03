import { useState, useMemo} from "react";
import { months } from "./utils";
import './Datepicker.css';
import { DateCellItem, DatePickerProps } from "../../../shared/types/types";
import { useLocation } from "react-router-dom";

const getDaysAmountInAMonth = (year: number, month: number) => {
  const nextMonthDate = new Date(year, month + 1, 1);
  nextMonthDate.setMinutes(-1);
  return nextMonthDate.getDate();
}

const getDaysPrevMonth = (year: number, month: number) => {
  let currentYear = year;
  let currentMonth = month - 1;
  if (currentMonth === -1) {
    currentMonth = 11;
    currentYear = year - 1;
  } 
  const lastDateMonth = getDaysAmountInAMonth(currentYear, currentMonth);
  
  return {day: lastDateMonth, month: currentMonth, year: currentYear};
}

const getDaysNextMonth = (year: number, month: number) => {
  let currentYear = year;
  let currentMonth= month + 1;
  if (currentMonth === 12) {
    currentMonth = 0;
    currentYear = year + 1;
  } 
  return {day: 1, month: currentMonth, year: currentYear}; 
}

const getPreviousMonthDays = (year: number, month: number) => {
  const cellsPreviousDays: DateCellItem[] = [];
  const day = new Date(year, month, 1);
  
  let dayWeek= day.getDay();
  if (dayWeek === 0) dayWeek = 7;
  if (dayWeek === 1) return cellsPreviousDays;
  const date = getDaysPrevMonth(year, month);
  dayWeek = (7- (8 - dayWeek));
  for (let i = dayWeek - 1; i >= 0; i = i -1) {
    const currentDate: DateCellItem = {...date};
    currentDate.day = currentDate.day - i;
    currentDate.hidden = true;
    cellsPreviousDays.push(currentDate);
  }
  return cellsPreviousDays;
}

const getNextMonthDays = (year: number, month: number) => {
  const cellsNextMonthDays: DateCellItem[] = [];
  const day = new Date(year, month, getDaysAmountInAMonth(year, month));
  let dayWeek= day.getDay();
    
  if (dayWeek === 0) return cellsNextMonthDays 
  else dayWeek = 7 - dayWeek;

  const date = getDaysNextMonth(year, month);
  for (let i = 0; i < dayWeek; i++) {
    const currentDate: DateCellItem = {...date};
    currentDate.day = currentDate.day + i;
    currentDate.hidden = true;
    cellsNextMonthDays.push(currentDate);
  }
  return cellsNextMonthDays;
}

const getCurrentMonthDays = (year: number, month: number, numberOfDays: number) => {
  const dateCells: DateCellItem[] = [];
  for (let i = 1; i <= numberOfDays; i++) {
    const date = {
      day: i,
      month: month,
      year: year
    }
    dateCells.push(date);
  }
  return dateCells;
}

const getAllCells = (year: number, month: number) => {
  return [...getPreviousMonthDays(year, month), 
  ...getCurrentMonthDays(year, month, getDaysAmountInAMonth(year, month)),
  ...getNextMonthDays(year, month)
  ]
}

const DatePicker = ({value, coordinates, inputRef, timeout, onChange, onClickDate} : DatePickerProps) => {
  const [panelYear, setPanelYear] = useState(value.getFullYear());
  const [panelMonth, setPanelMonth] = useState(value.getMonth());

  const location = useLocation();


  const CalendarStyles = { 
    top: location.pathname === '/' ? `${coordinates.y + coordinates.height}px` : `${coordinates.y - coordinates.height * 3}px`,
    left: location.pathname === '/' ? `${coordinates.x - 15}px` : `${coordinates.x + 45}px`,
  }

  const dateCells = useMemo(() => {
    const items: DateCellItem[] = getAllCells(panelYear, panelMonth);
    return items;
  }, [panelYear, panelMonth]);


  const onDateSelect = (dateCells: DateCellItem) => {
    // onChange(`${dateCells.year}, ${dateCells.month}, ${dateCells.day}`);
    onChange(new Date(dateCells.year, dateCells.month, dateCells.day));
    onClickDate(false);
  };

  const nextMonth = () => {
    inputRef.current?.focus();
    if (timeout) clearTimeout(timeout);
    if (panelMonth === 11) {
      setPanelMonth(0);
      setPanelYear(panelYear + 1);
    } else {
      setPanelMonth(panelMonth + 1);
    }
  }

  const prevMonth = () => {
    inputRef.current?.focus();
    if (timeout) clearTimeout(timeout);
    if (panelMonth === 0) {
      setPanelMonth(11);
      setPanelYear(panelYear - 1);
    } else {
      setPanelMonth(panelMonth - 1);
    }
  }

  return (
    <div className="calendar"
      style={CalendarStyles}>
        <div className="calendar__header">
          <button type='button' className='calendar__btn' onClick={prevMonth}>◂</button>
          <span className="calendar__header-month" >{months[panelMonth]}</span>
          <button type="button" className='calendar__btn' onClick={nextMonth}>▸</button>
      </div>
      <div className="calendar__container">
        {
          dateCells.map(el => (
            <div key={`${el.day}${el.month}${el.year}`}
            onClick={() => onDateSelect(el)} 
            className={`calendar__container-item ${el.hidden 
              ? 'calendar__item__hidden' : '' }`}>{el.day}</div>
          ))
        }
      </div>
    </div>
  )
}

export default DatePicker;