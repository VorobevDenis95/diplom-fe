import { useState } from 'react';
import './SelectInput.css';
import ListValues, { TicketType } from './ListValues/ListValues';
import { TypeDocument } from '../PassengerDocumentContainer/PassengerDocumentContainer';

export interface SelectInputProps {
  list: (TicketType | TypeDocument)[];
}

const SelectInput = ({list}: SelectInputProps) => {
  const [isActive, setActive] = useState(true);  
  const [index, setIndex] = useState(0);
  const [isActiveList, setActiveList] = useState(false);
  
  
  const changeList = () => {
    setActive(false);
    setActiveList(true);
  }

  const clickItemList = (i: number) => {
    setActiveList(!isActiveList);
    setActive(true);
    setIndex(i);
  }
  
  
  return (
    <>
      { isActive &&
        <div className='input_type-passenger-wrapper'>
          <input className='input_type-passenger' 
          type="text" value={list[index]} onClick={changeList}/>

        </div>
        }

      <ListValues active={isActiveList} list={list as TicketType[]}
      onClick={clickItemList}
      />

    </>
  )
}

export default SelectInput;