import { useNavigate } from 'react-router-dom';
import TrainRoutes from '../../components/TrainRoutes/TrainRoutes';
import { useAppSelector } from '../../shared/redux/redux-hooks';
import { ItemRoutes } from '../../shared/types/typesRoutesBilets';
import './Confirmation.css';
import { sendCurrentDateToServer } from '../../components/form/FormDirection/utils';
import ConfirmationContainer from '../../components/ConfirmationContainer/ConfirmationContainer';
import { useState } from 'react';

const Confirmation = () => {




  const navigate = useNavigate();
  const { item, tickets, passengers } = useAppSelector(state => state.train)
  const { cityFrom, cityTo, dateStart, dateTo } = useAppSelector(state => state.direction);

  const [totalPrice] = useState(tickets.reduce((acc, value) => acc + value.price, 0));

  const handleEditBtn = (item: ItemRoutes) => {
    navigate(`/routes/${cityFrom.id}/${cityTo.id}${dateStart
      ? `/${sendCurrentDateToServer(dateStart)}${dateTo
        ? `/${sendCurrentDateToServer(dateTo)}` : ''}` : ''}`);
    console.log(item)
  }



  return (
    <div className='confirmation'>
      {item && <TrainRoutes item={item} >
        <button onClick={() => handleEditBtn(item)}
          className="train-routes__item__btn-edit-train">Изменить</button>
      </TrainRoutes>}
      <ConfirmationContainer list={passengers} 
      totalAmount={totalPrice}/>
    </div>
  )
}

export default Confirmation;
