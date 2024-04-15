import { TraineRoutesItemProps } from '../../../shared/types/typesRoutesBilets';
import SeatsContainer from '../SeatsContainer/SeatsContainer';
import './RouteCategoriesSeatsContainer.css';


const RouteCategoriesSeatsContainer = ({item} : TraineRoutesItemProps) => {
  return (
    <div className='route__seats-container'>
      <SeatsContainer item={item}/>

      <div className='route__seats-container__services'>

      </div>
    </div>
  )
}

export default RouteCategoriesSeatsContainer;