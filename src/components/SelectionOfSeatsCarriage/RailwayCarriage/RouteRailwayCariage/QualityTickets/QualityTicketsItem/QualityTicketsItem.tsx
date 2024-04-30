import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../../../shared/redux/redux-hooks';
import { TicketType } from '../../../../../../shared/types/typesTrain';
import './QualityTicketsItem.css';
import { setActiveTypeTicket } from '../../../../../../shared/redux/slice/trainSlice';

interface QualityTicketsItemProps {
  name: string;
  countTickets?: number;
  type: TicketType, 
  typeDirection: 'departure' | 'arrival',
  text?: string;
} 

const QualityTicketsItem = ({name, countTickets, type, text, typeDirection}: QualityTicketsItemProps) => {
  
  
  const {arrival, departure} = useAppSelector(state => state.train);
  
  const [activeDirection, setActiveDirection] = useState(typeDirection ==="departure" ? departure : arrival);

  useEffect(() => { 
    typeDirection ==="departure" ? setActiveDirection(departure) : setActiveDirection(arrival);
  }, [typeDirection, departure, arrival])

  
  
  // const {activeTypeTicket} = useAppSelector(state => state.train);
  const dispatch = useAppDispatch();
  
  const [isActive, setActive] = useState(type === activeDirection.activeTypeTicket ? true : false);

  useEffect(() => {
    activeDirection.activeTypeTicket !== type ? setActive(false) : setActive(true); 
  }, [activeDirection.activeTypeTicket])

  const clickTypeTicket = () => {
    if (activeDirection.activeTypeTicket !== type)
    dispatch(setActiveTypeTicket({ticketType :type, typeDirection}))  
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