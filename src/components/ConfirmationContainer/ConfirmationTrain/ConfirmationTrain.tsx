import { ItemRoutes } from '../../../shared/types/typesRoutesBilets';
import TrainRoutes from '../../TrainRoutes/TrainRoutes';
import ConfirmationTitle from '../ConfirmationTitle/ConfirmationTitle';
import './ConfirmationTrain.css';

interface ConfirmationTrainProps {
  item: ItemRoutes,
  onClick: (item: ItemRoutes) => void
}

const ConfirmationTrain = ({ item, onClick }: ConfirmationTrainProps) => {

  return (

    <div className='confirmation__train-container'>
      <ConfirmationTitle title='Поезд' />
      <TrainRoutes item={item} >
        <button onClick={() => onClick(item)}
          className="train-routes__item__btn-edit-train">Изменить</button>
      </TrainRoutes>

    </div>

  )
}

export default ConfirmationTrain;