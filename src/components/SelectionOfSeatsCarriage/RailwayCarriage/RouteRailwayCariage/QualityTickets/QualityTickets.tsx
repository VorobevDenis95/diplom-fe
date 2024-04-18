import { useEffect, useState } from 'react';
import { useAppSelector } from '../../../../../shared/redux/redux-hooks';
// import { RouteRailwayCarriageProps } from '../../../../../shared/types/typesRoutesBilets';
import './QualityTickets.css';
import { TicketProps } from '../../../../../shared/redux/slice/trainSlice';
import QualityTicketsItem from './QualityTicketsItem/QualityTicketsItem';
import { TicketType } from '../../../../../shared/types/typesTrain';
import { SeatsRequestProps } from '../../../../../shared/types/typesSeats';

interface QualityTicketsProps {
  list: SeatsRequestProps[];
}

const QualityTickets = ({list} :QualityTicketsProps ) => {  
  // console.log(list)

  const [available_seats, setAvailable_seats] = useState(0);
  const {tickets} = useAppSelector(state => state.train);
  const  [quantityAddTickets, setQuantityAddTickets] = useState(0);
  const [ticketsAduls, setTicketsAduls] = useState<TicketProps[]>([]);
  const [ticketsChild, setTicketsChild] = useState<TicketProps[]>([]);
  const [ticketsChildNotSeat, SetTicketsChildNotSeat] = useState<TicketProps[]>([]);

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


  function filterTickets (tickets: TicketProps[], type: TicketType) {
    return tickets.filter((el) => {
      el.type === type;
    } )
  }

  useEffect(() => {
    setTicketsAduls(filterTickets(tickets, 'adult'));
    setTicketsChild(filterTickets(tickets, 'child'));
    SetTicketsChildNotSeat(filterTickets(tickets, 'childWithoutSeat'));

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
          text={textAdult} />
          <QualityTicketsItem name='Детских' type='child'
          countTickets={ticketsChild.length}
          text={textChild} />
          <QualityTicketsItem name='Детских "без места"'
          type='childWithoutSeat' countTickets={ticketsChildNotSeat.length} />
        </div>
    </div>
  )
}

export default QualityTickets;