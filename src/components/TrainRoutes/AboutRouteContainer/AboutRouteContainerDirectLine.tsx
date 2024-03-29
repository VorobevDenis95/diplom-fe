import { TraineRoutesItemProps } from '../../../shared/types/typesRoutesBilets';
import { capitalized, getDateTimeTrain, getTravelTime } from '../../utils';
import './AboutRouteContainerDirectLine.css';
import arrow from '../../../assets/images/svg/arrowRoute.svg';

const AboutRouteContainerDirectLine = ({item} : TraineRoutesItemProps) => {


  return (
    <div className='direct-line-route'>
      <div className='direct-line-route__container'>
        <span className='direct-line-route__container__date'>{getDateTimeTrain(item.departure.from.datetime)}</span>
        <span className='direct-line-route__container__city'>{ capitalized(item.departure.from.city.name)}</span>
        <span className='direct-line-route__container__station'>{item.departure.from.railway_station_name}</span>
      </div>

      <div className="direct-line-route__direct-time-arrow">
        <span className='direct-line-route__direct-time-arrow__time'>
          {getTravelTime(item.departure.duration)}
        </span>
        <img src={arrow} alt="arrow" />
      </div>

      <div className='direct-line-route__container'>
        <span className='direct-line-route__container__date'>{getDateTimeTrain(item.departure.to.datetime)}</span>
        <span className='direct-line-route__container__city'>{capitalized(item.departure.to.city.name)}</span>
        <span className='direct-line-route__container__station'>{item.departure.to.railway_station_name}</span>
      </div>

    </div> 
  )
}

export default AboutRouteContainerDirectLine;