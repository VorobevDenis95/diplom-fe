import { useNavigate } from 'react-router-dom';
// import TrainRoutes from '../../components/TrainRoutes/TrainRoutes';
import { useAppSelector } from '../../shared/redux/redux-hooks';
import { ItemRoutes } from '../../shared/types/typesRoutesBilets';
import './Confirmation.css';
import { sendCurrentDateToServer } from '../../components/form/FormDirection/utils';
import ConfirmationContainer from '../../components/ConfirmationContainer/ConfirmationContainer';
import { useEffect, useState } from 'react';
// import ConfirmationTitle from '../../components/ConfirmationContainer/ConfirmationTitle/ConfirmationTitle';
import ConfirmationTrain from '../../components/ConfirmationContainer/ConfirmationTrain/ConfirmationTrain';
import ConfirmationPayment from '../../components/ConfirmationContainer/ConfirmationPayment/ConfirmationPayment';
import NextButton from '../../components/NextButton/NextButton';
import { TicketProps } from '../../shared/redux/slice/trainSlice';
import { OrderDataProps, OrderDirectionProps, OrderSeatsProps } from '../../shared/types/typesOrder';
import { DataPaymentPassenger } from '../Payment/Payment';
import { formatPhoneNumber } from './utils';
import { sendOrder } from '../../shared/api/serviceApi';

const Confirmation = () => {

  const {user, item, tickets, passengers} = useAppSelector(state => state.train);
  // const {  } = useAppSelector(state => state.train)
  const [cashText, setCashText] = useState('');

  const departure: TicketProps[] = tickets.filter((el) => el.typeDirection === 'departure');
  const arrival: TicketProps[] = tickets.filter((el) => el.typeDirection === 'arrival');

  const departureSeats: OrderSeatsProps[] = departure.map((el, index) => {
    return {
      coach_id: el.coach_id,
      person_info: {
        ...passengers[index],
      },
      seat_number: el.index,
      is_child: !el.is_adult,
      setInclude_children_seat: el.include_children_seat,
    }
  });

  const arrivalSeats:OrderSeatsProps[] = arrival.map((el, index) => {
    return {
      coach_id: el.coach_id,
      person_info: {
        ...passengers[index],
      },
      seat_number: el.index,
      is_child: !el.is_adult,
      setInclude_children_seat: el.include_children_seat,
    }
  });

  useEffect(() => {

  

  }, [departure, arrival])


  useEffect(() => {
    user?.payment_method === 'cash' ? setCashText('Наличными') : setCashText('Онлайн')
  }, [user])

  const navigate = useNavigate();
  const { cityFrom, cityTo, dateStart, dateTo } = useAppSelector(state => state.direction);

  const [totalPrice] = useState(tickets.reduce((acc, value) => acc + value.price, 0));

  const handleEditBtn = (item: ItemRoutes) => {
    navigate(`/routes/${cityFrom.id}/${cityTo.id}${dateStart
      ? `/${sendCurrentDateToServer(dateStart)}${dateTo
        ? `/${sendCurrentDateToServer(dateTo)}` : ''}` : ''}`);
    console.log(item);
  }

  async function sendData(data: OrderDataProps) {
    const response = await sendOrder(data);
    console.log(response);
    // if (response) navigate('/order')
  }

  const handleClickNextPage = () => {

    // собираем данные для отправки на сервер

    const arrivalObj: OrderDirectionProps = {
        route_direction_id: arrival[0]?.route_direction_id,
        seats: [
          ...arrivalSeats,
        ]
    } 

    const orderData :OrderDataProps = {
      user: {
        ...user as DataPaymentPassenger,
        phone: formatPhoneNumber(user?.phone as string),
      },
      departure: {
        route_direction_id: departure[0].route_direction_id,
        seats: [
          ...departureSeats,
        ]
      },
    }

    if (arrivalObj.seats.length > 0) {
      orderData.arrival = arrivalObj;
    }

    sendData(orderData);
    
    // navigate('/order', {state: {orderData}});
    // navigate('/order');
  }



  return (
    <div className='confirmation'>
      {item && 
      <ConfirmationTrain item={item} onClick={handleEditBtn}/>
      }
      
      <ConfirmationContainer list={passengers} 
      totalAmount={totalPrice}/>

      <ConfirmationPayment text={cashText} />

      <NextButton title='Подтвердить'
          active={true}
          clickAction={handleClickNextPage}
          type='button'
        />
    </div>
  )
}

export default Confirmation;
