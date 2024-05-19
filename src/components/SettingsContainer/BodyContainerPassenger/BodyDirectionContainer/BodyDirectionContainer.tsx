import './BodyDirectionContainer.css';
import arrowIcon from '../../../../assets/images/svg/arrowRoute.svg';
import { capitalized, getDateTimeTrain, getTravelTime } from '../../../utils';


interface BodyDirectionContainerProps {
  back: boolean;
  timeFrom: number;
  timeTo: number;
  dateFrom: string;
  dateTo: string;
  duration: number;
  cityFrom: string;
  cityTo: string;
  stationFrom: string;
  stationTo: string;
}
const BodyDirectionContainer = ({  timeFrom, timeTo, dateFrom, dateTo, duration,
  cityFrom, cityTo, stationFrom, stationTo
 }: BodyDirectionContainerProps) => {


  return (
    <div className="body-direction__container">
      <div className='body-direction__container-row'>
        <div className='body-direction__container-column'>
          <span>{getDateTimeTrain(timeFrom)}</span>
          <span 
          className='body-direction__container-grey'
          >{dateFrom}</span>
        </div>
        <div className='body-direction__container-column'>
          <span>{getTravelTime(duration)}</span>
          <img src={arrowIcon} alt="arrow icon" />
        </div>
        <div className='body-direction__container-column'>
          <span>{getDateTimeTrain(timeTo)}</span>
          <span 
          className='body-direction__container-grey'
          >{dateTo}</span>
        </div>
      </div>
      <div className='body-direction__container-row'>
        <div className='body-direction__container-column'>
          <span>{capitalized(cityFrom)}</span>
          <span
          className='body-direction__container-grey'
          >{capitalized(stationFrom)}</span>
        </div>
        <div className='settings-container__body-train-column'>
          <span>{capitalized(cityTo)}</span>
          <span
          className='body-direction__container-grey'
          >{capitalized(stationTo)}</span>
        </div>

      </div>
    </div>
  )
}

export default BodyDirectionContainer;