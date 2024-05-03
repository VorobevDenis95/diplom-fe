import { useEffect, useState } from "react";
import ListValues from "./ListValues/ListValues";
// import { SelectInputProps } from "./SelectInput";
import { TypeDocument } from "../PassengerDocumentContainer/PassengerDocumentContainer";
import './SelectInputDocument.css'

interface SelectInputDocument {
  list: TypeDocument[];
  index: number;
  clickElement: (index: number) => void;
  clickInput: () => void;
  isActive: boolean;

}

const SelectInputDocument = ({ list, index, clickElement, clickInput, isActive }: SelectInputDocument) => {

  const [isActiveList, setActiveList] = useState(false);

  useEffect(() => {
    isActive ? setActiveList(false) : setActiveList(true);
  }, [isActive])

  return (
    <>
      {isActive &&
        <div className='input_type-passenger-wrapper-small'>
          <input className='input_type-passenger-small'
            type="text" defaultValue={list[index]} onClick={clickInput} />
        </div>}
      <ListValues active={isActiveList} list={list as TypeDocument[]}
        onClick={clickElement} />
    </>

  )
}

export default SelectInputDocument