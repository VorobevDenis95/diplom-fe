import { useEffect, useRef } from "react";
import WrapperContainer from "../../WrapperContainer/WrapperContainer";
import './PassportInput.css';

interface PassportInputProps {
  changeSeries: (series: string, number: string) => void;
  changeNumber: (series: string, number: string) => void;
  value: string;
}



const PassportInput = ({changeSeries, changeNumber, value} : PassportInputProps) => {

  const series = useRef<HTMLInputElement>(null);
  const number = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (value !== undefined && series.current && number.current) {
      series.current.value = value.split(' ')[0] ?? '';
      number.current.value = value.split(' ')[1] ?? '';
    }
  }, []);

  const valueSeries = series.current?.value ? series.current.value : '';
  const valueNumber = number.current?.value ? number.current.value : '';

  return (
    <>
      <WrapperContainer title="Серия">
        <input className="passenger_input" 
        type="text" onChange={() => changeSeries(series.current?.value ?? '', number.current?.value ?? '')}
        ref={series} placeholder="__   __   __   __"
        value={valueSeries}/>
      </WrapperContainer>
      <WrapperContainer title="Номер">
        <input className="passenger_input" 
        type="text" onChange={() => changeNumber(series.current?.value ?? '', number.current?.value ?? '')}
        ref={number} placeholder="__  __  __  __  __  __  "
        value={valueNumber}/>
      </WrapperContainer>
    </>
  )
}

export default PassportInput;