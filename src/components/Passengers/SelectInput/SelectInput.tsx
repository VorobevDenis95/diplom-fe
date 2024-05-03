import './SelectInput.css';
import ListValues, { TicketType } from './ListValues/ListValues';

export interface SelectInputProps {
  list: TicketType[];
  clickItemList: (i: number) => void;
  changeList: () => void;
  active: boolean;
  index: number;

}

const SelectInput = ({ list, clickItemList, changeList, active, index }: SelectInputProps) => {

  return (
    <>
      {active &&
        <div className='input_type-passenger-wrapper'>
          <input className='input_type-passenger'
            type="text" defaultValue={list[index]} onClick={changeList} />

        </div>
      }

      <ListValues active={!active} list={list as TicketType[]}
        onClick={clickItemList}
      />

    </>
  )
}

export default SelectInput;