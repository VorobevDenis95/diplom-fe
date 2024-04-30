import { useState } from "react";
import ListValues from "./ListValues/ListValues";
import { SelectInputProps } from "./SelectInput";
import { TypeDocument } from "../PassengerDocumentContainer/PassengerDocumentContainer";
import './SelectInputDocument.css'

interface SelectInputDocument {
  list: TypeDocument[],
  index: number
  clickElement: (index: number) => void;
}

// const SelectInputDocument = ({ list, index, clickElement }: SelectInputProps) => {
const SelectInputDocument = ({ list }: SelectInputProps) => {
  
  const [isActive, setActive] = useState(true);
  const [index] = useState(0);
  const [isActiveList, setActiveList] = useState(false);

  const clickInput = () => {
    setActive(!isActive);
    setActiveList(!isActiveList);
  }

  // const clickItem = (i: number) => {
  const clickItem = () => {

    setActiveList(!isActiveList);
    setActive(true);
    // setIndex(i);
  }

  return (
    <>
      {isActive &&
        <div className='input_type-passenger-wrapper-small'>
          <input className='input_type-passenger-small'
            type="text" value={list[index]} onClick={clickInput} />
        </div>}
      <ListValues active={isActiveList} list={list as TypeDocument[]}
        onClick={clickItem} />
      
    </>

  )
}

export default SelectInputDocument