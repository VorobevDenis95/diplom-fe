import TrainRoutes from '../../components/TrainRoutes/TrainRoutes';
import { useAppSelector } from '../../shared/redux/redux-hooks';
import { ItemRoutes } from '../../shared/types/typesRoutesBilets';
import './Confirmation.css';

const Confirmation = () => {
  const { item } = useAppSelector(state => state.train)
  const {} = useAppSelector(state => state.direction);
  const handleEditBtn = (item: ItemRoutes) => {
    console.log(item)
  }

  return (
    <div>
      <TrainRoutes item={item!} >
        <button onClick={() => handleEditBtn(item!)}
          className="train-routes__item__btn-select-seats">Изменить</button>

      </TrainRoutes>
    </div>
  )
}

export default Confirmation;