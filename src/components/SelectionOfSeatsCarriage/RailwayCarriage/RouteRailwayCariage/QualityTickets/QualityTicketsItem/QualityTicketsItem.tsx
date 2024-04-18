import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../../../shared/redux/redux-hooks';
import { TicketType } from '../../../../../../shared/types/typesTrain';
import './QualityTicketsItem.css';
import { setActiveTypeTicket } from '../../../../../../shared/redux/slice/trainSlice';

interface QualityTicketsItemProps {
  name: string;
  countTickets?: number;
  type: TicketType, 
  text?: string;
} 

const QualityTicketsItem = ({name, countTickets, type, text}: QualityTicketsItemProps) => {
  const {activeTypeTicket} = useAppSelector(state => state.train);
  const dispatch = useAppDispatch();
  
  const [isActive, setActive] = useState(type === activeTypeTicket ? true : false);

  useEffect(() => {
    activeTypeTicket !== type ? setActive(false) : setActive(true); 
  }, [activeTypeTicket])

  const clickTypeTicket = () => {
    if (activeTypeTicket !== type)
    dispatch(setActiveTypeTicket(type))  
  }

  return (
    <div onClick={clickTypeTicket} 
    className={`railway-carriage__tickets-container_item ${isActive ? 'type-ticket-active' : ''}`}>
      <div className='railway-carriage__tickets-container_item-type'>
        {`${name} - ${countTickets}`}
      </div>
      {text && <p className='railway-carriage__tickets-container_item-text'>
        {text}
      </p>}
    </div>
  )
}

export default QualityTicketsItem;