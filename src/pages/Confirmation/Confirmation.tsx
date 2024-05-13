import { useNavigate } from 'react-router-dom';
import TrainRoutes from '../../components/TrainRoutes/TrainRoutes';
import { useAppSelector } from '../../shared/redux/redux-hooks';
import { ItemRoutes } from '../../shared/types/typesRoutesBilets';
import './Confirmation.css';
import {sendCurrentDateToServer} from '../../components/form/FormDirection/utils';

const Confirmation = () => {
  const navigate = useNavigate();
  // const { cityFrom, cityTo, dateStart, dateTo } = useAppSelector(state => state.direction);
  // const dispatch = useAppDispatch();
  const { item } = useAppSelector(state => state.train)
  const {cityFrom, cityTo, dateStart, dateTo} = useAppSelector(state => state.direction);
  const handleEditBtn = (item: ItemRoutes) => {
    navigate(`/routes/${cityFrom.id}/${cityTo.id}${dateStart
      ? `/${sendCurrentDateToServer(dateStart)}${dateTo
        ? `/${sendCurrentDateToServer(dateTo)}` : ''}` : ''}`);
        console.log(item)
  }

  return (
    <div>
      <TrainRoutes item={item!} >
        <button onClick={() => handleEditBtn(item!)}
          className="train-routes__item__btn-edit-train">Изменить</button>

      </TrainRoutes>
    </div>
  )
}

export default Confirmation;
