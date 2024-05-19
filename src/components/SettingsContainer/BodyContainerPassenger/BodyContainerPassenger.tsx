import { capitalized } from '../../utils';
import DirectContainer from '../DirectContainer/DirectContainer';
import './BodyContainerPassenger.css';
import BodyDirectionContainer from './BodyDirectionContainer/BodyDirectionContainer';
import { getCurrentDate } from './utils';

interface BodyContainerPassenger {
  backStatus: boolean;
  activeContainer: boolean;
  handleClickBtnAddShow: (active: boolean) => void;
  timeFrom: number;
  timeTo: number;
  nameTrain: string;
  cityFrom: string;
  cityTo: string;
  stationFrom: string;
  stationTo: string;
  duration: number;
  title: string;
  image: string;
}

const BodyContainerPassenger = ({ backStatus, activeContainer, handleClickBtnAddShow
  ,  nameTrain, cityFrom, cityTo, stationFrom, stationTo, duration,
  timeFrom, timeTo, title, image
}: BodyContainerPassenger) => {

  return (
    <div className="body-container__passenger">
      <DirectContainer img={image} title={title} 
        active={activeContainer} clickBtnDirect={handleClickBtnAddShow}>
        {getCurrentDate(timeFrom)}
      </DirectContainer>
      {
        activeContainer &&
        <div className='settings-container__body'>
          <div className='settings-container__body-train'>
            <span className='body-container__passenger-light-white'>№ поезда</span>
            <span className='settings-container__body-train-number'>{nameTrain}</span>
          </div>
          <div className='settings-container__body-train'>
            <span className='body-container__passenger-light-white'>Название</span>
            <div className='settings-container__body-train-column'>
              <span>
                {capitalized(cityFrom)}
              </span>
              <span>
                {capitalized(cityTo)}
              </span>

            </div>
          </div>
          <BodyDirectionContainer
            back={backStatus}
            cityFrom={cityFrom}
            cityTo={cityTo}
            stationFrom={stationFrom}
            stationTo={stationTo}
            timeFrom={timeFrom}
            timeTo={timeTo}
            dateFrom={getCurrentDate(timeFrom)}
            dateTo={getCurrentDate(timeTo)}
            duration={duration}
          />

        </div>
      }

    </div>
  )
}

export default BodyContainerPassenger;