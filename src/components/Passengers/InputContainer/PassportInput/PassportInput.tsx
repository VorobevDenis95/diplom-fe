import { useRef } from "react";
import WrapperContainer from "../../WrapperContainer/WrapperContainer";
import './PassportInput.css';

interface PassportInputProps {
  changeSeries: (series: string, number: string) => void;
  changeNumber: (series: string, number: string) => void;
}

const PassportInput = ({changeSeries, changeNumber} : PassportInputProps) => {

  const series = useRef<HTMLInputElement>(null);
  const number = useRef<HTMLInputElement>(null);


  return (
    <>
      <WrapperContainer title="Серия">
        <input className="passenger_input" 
        type="text" onChange={() => changeSeries(series.current?.value ?? '', number.current?.value ?? '')}
        ref={series} placeholder="__   __   __   __"/>
      </WrapperContainer>
      <WrapperContainer title="Номер">
        <input className="passenger_input" 
        type="text" onChange={() => changeNumber(series.current?.value ?? '', number.current?.value ?? '')}
        ref={number} placeholder="__  __  __  __  __  __  "/>
      </WrapperContainer>
    </>
  )
}

export default PassportInput;