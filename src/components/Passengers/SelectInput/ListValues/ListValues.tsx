import { TypeDocument } from '../../PassengerDocumentContainer/PassengerDocumentContainer';
import './ListValues.css';

export type TicketType = 'Взрослый' | 'Детский'; 

interface ListValuesProps {
  list: (TypeDocument | TicketType)[];
  onClick: (i: number) => void;
  active: boolean;
}

const ListValues = ({list, onClick, active}: ListValuesProps) => {
  return (
    <>
{    
    active && 
    list.map((el, i: number) => (
      <div className='input_type-passenger_list-item' onClick={() => onClick(i)} 
      key={el}>{el}</div>
    ))
    
    }
    
    </>
  )
}

export default ListValues