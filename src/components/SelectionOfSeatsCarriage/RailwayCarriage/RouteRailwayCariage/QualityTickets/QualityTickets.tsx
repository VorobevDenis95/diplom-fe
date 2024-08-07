import { useEffect, useState } from 'react';
import { useAppSelector } from '../../../../../shared/redux/redux-hooks';
import './QualityTickets.css';
import { TicketProps } from '../../../../../shared/types/store/trainStore';
import QualityTicketsItem from './QualityTicketsItem/QualityTicketsItem';
import { TicketType } from '../../../../../shared/types/typesTrain';
import { SeatsRequestProps } from '../../../../../shared/types/typesSeats';

interface QualityTicketsProps {
  list: SeatsRequestProps[];
  typeDirection: 'departure' | 'arrival';
}

const QualityTickets = ({ list, typeDirection }: QualityTicketsProps) => {

  const [available_seats, setAvailable_seats] = useState(0);
  const { tickets } = useAppSelector(state => state.train);
  const [quantityAddTickets, setQuantityAddTickets] = useState(0);
  const [ticketsAduls, setTicketsAduls] = useState<TicketProps[]>([]);
  const [ticketsChild, setTicketsChild] = useState<TicketProps[]>([]);
  const [ticketsChildNotSeat, setTicketsChildNotSeat] = useState<TicketProps[]>([]);

  useEffect(() => {
    if (list) {
      setAvailable_seats(list.reduce((acc, curVal) => {
        return acc + curVal.coach.available_seats;
      }, 0))
    }
  }, [list])

  useEffect(() => {
    setQuantityAddTickets(available_seats - tickets.length);
  }, [list, tickets])


  function filterTickets(tickets: TicketProps[], type: TicketType) {
    return tickets.filter((el) => el.type === type).filter((el) => el.typeDirection === typeDirection);
  }

  useEffect(() => {
    setTicketsAduls(filterTickets(tickets, 'adult'));
    setTicketsChild(filterTickets(tickets, 'child'));
    setTicketsChildNotSeat(tickets.filter((el) => el.include_children_seat));
  }, [tickets])

  const textAdult = `
    Можно добавить еще ${quantityAddTickets} пассажиров 
  `;

  const textChild = `
  Можно добавить еще ${quantityAddTickets} детей до 10 лет.
  Свое место в вагоне, как у взрослых, но дешевле в среднем на 50-65% 
`;

  return (
    <div className='railway-carriage__tickets'>
      <h3>Количество билетов</h3>
      <div className="railway-carriage__tickets-container">
        <QualityTicketsItem name='Взрослых' type='adult'
          countTickets={ticketsAduls.length}
          typeDirection={typeDirection}
          text={textAdult} />
        <QualityTicketsItem name='Детских' type='child'
          countTickets={ticketsChild.length}
          typeDirection={typeDirection}
          text={textChild} />
        <QualityTicketsItem name='Детских "без места"'
          type='childWithoutSeat'
          typeDirection={typeDirection}
          countTickets={ticketsChildNotSeat.length} />
      </div>
    </div>
  )
}

export default QualityTickets;