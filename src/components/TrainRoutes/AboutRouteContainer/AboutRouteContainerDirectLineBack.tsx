import { RouteRailwayCarriageProps } from '../../../shared/types/typesRoutesBilets';
import { capitalized, getDateTimeTrain, getTravelTime } from '../../utils';
import './AboutRouteContainerDirectLine.css';
import arrow from '../../../assets/images/svg/arrowRoute.svg';

const AboutRouteContainerDirectLineBack = ({item, isNotTime = false}: RouteRailwayCarriageProps) => {
  return (
      <>
      <div className='direct-line-route revers-flex'>
      <div className='direct-line-route__container'>
        <span className='direct-line-route__container__date'>{getDateTimeTrain(item.from.datetime)}</span>
        <span className='direct-line-route__container__city'>{ capitalized(item.from.city.name)}</span>
        <span className='direct-line-route__container__station'>{item.from.railway_station_name}</span>
      </div>
  
      <div className="direct-line-route__direct-time-arrow">
        {
          !isNotTime && 
        <span className='direct-line-route__direct-time-arrow__time'>
          {getTravelTime(item.duration)}
        </span>
        }
        <img src={arrow} className='reversArrow' alt="arrow" />
      </div>
  
      <div className='direct-line-route__container'>
        <span className='direct-line-route__container__date'>{getDateTimeTrain(item.to.datetime)}</span>
        <span className='direct-line-route__container__city'>{capitalized(item.to.city.name)}</span>
        <span className='direct-line-route__container__station'>{item.to.railway_station_name}</span>
      </div>
  
    </div> 
      </>
  )
}

export default AboutRouteContainerDirectLineBack;