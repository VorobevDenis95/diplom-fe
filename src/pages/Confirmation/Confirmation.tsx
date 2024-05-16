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

const Confirmation = () => {

  const {user} = useAppSelector(state => state.train);
  const [cashText, setCashText] = useState('');


  useEffect(() => {
    user?.payment_method === 'cash' ? setCashText('Наличными') : setCashText('Онлайн')
  }, [user])

  const navigate = useNavigate();
  const { item, tickets, passengers } = useAppSelector(state => state.train)
  const { cityFrom, cityTo, dateStart, dateTo } = useAppSelector(state => state.direction);

  const [totalPrice] = useState(tickets.reduce((acc, value) => acc + value.price, 0));

  const handleEditBtn = (item: ItemRoutes) => {
    navigate(`/routes/${cityFrom.id}/${cityTo.id}${dateStart
      ? `/${sendCurrentDateToServer(dateStart)}${dateTo
        ? `/${sendCurrentDateToServer(dateTo)}` : ''}` : ''}`);
    console.log(item);
  }

  const handleClickNextPage = () => {
    navigate('/order');
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
