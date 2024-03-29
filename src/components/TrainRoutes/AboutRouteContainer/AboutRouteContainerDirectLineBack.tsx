import { TraineRoutesItemProps } from '../../../shared/types/typesRoutesBilets';
import { capitalized, getDateTimeTrain, getTravelTime } from '../../utils';
import './AboutRouteContainerDirectLine.css';
import arrow from '../../../assets/images/svg/arrowRoute.svg';

const AboutRouteContainerDirectLineBack = ({item} : TraineRoutesItemProps) => {

  return (
      <>

      { item.arrival && 
      <div className='direct-line-route revers-flex'>
      <div className='direct-line-route__container'>
        <span className='direct-line-route__container__date'>{getDateTimeTrain(item.arrival.from.datetime)}</span>
        <span className='direct-line-route__container__city'>{ capitalized(item.arrival.from.city.name)}</span>
        <span className='direct-line-route__container__station'>{item.arrival.from.railway_station_name}</span>
      </div>
  
      <div className="direct-line-route__direct-time-arrow">
        <span className='direct-line-route__direct-time-arrow__time'>
          {getTravelTime(item.arrival.duration)}
        </span>
        <img src={arrow} className='reversArrow' alt="arrow" />
      </div>
  
      <div className='direct-line-route__container'>
        <span className='direct-line-route__container__date'>{getDateTimeTrain(item.arrival.to.datetime)}</span>
        <span className='direct-line-route__container__city'>{capitalized(item.arrival.to.city.name)}</span>
        <span className='direct-line-route__container__station'>{item.arrival.to.railway_station_name}</span>
      </div>
  
    </div> 

      }
      
      </>
    

    





  )
}

export default AboutRouteContainerDirectLineBack;