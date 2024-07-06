import { useNavigate, useParams } from 'react-router-dom';
import './RailwayCarriage.css';
import { useEffect, useState } from 'react';
import { getSeats } from '../../../shared/api/serviceApi';
import { SeatsRequestProps } from '../../../shared/types/typesSeats';
import RouteRailwayCarriage from './RouteRailwayCariage/RouteRailwayCarriage';
import { useAppDispatch, useAppSelector } from '../../../shared/redux/redux-hooks';
import arrowRight from '../../../assets/images/svg/time__container/blockArrowRight.svg';
import arrowLeft from '../../../assets/images/svg/time__container/blockArrowLeft.svg';
import QualityTickets from './RouteRailwayCariage/QualityTickets/QualityTickets';
import { clearActiveTypeRailwayCarriage, clearTrain } from '../../../shared/redux/slice/trainSlice';
import ContainerRailwayCarriage from './MapContainerRailwayCarriage/RailwaysCarriage/ContainerRailwayCarriage/ContainerRailwayCarriage';
import { sendCurrentDateToServer } from '../../form/FormDirection/utils';
import NextButton from '../../NextButton/NextButton';
import AsideSelection from '../../AsideContainer/AsideSelection';


const RailwayCarriage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate()

  const [responseDeparture, setResponseDeparture] = useState<SeatsRequestProps[]>([]);
  const [responseArrival, setResponseArrival] = useState<SeatsRequestProps[]>([]);

  const params = useParams();
  const { id, id2 } = params;

  const { item, tickets } = useAppSelector(state => state.train);
  const { cityFrom, cityTo, dateStart, dateTo } = useAppSelector(state => state.direction);
  const [btnActive, setBtnActive] = useState(false);

  useEffect(() => {

    if (id2) {
      const departureTickets = tickets.filter((el) => el.typeDirection === 'departure');
      const arrivalTickets = tickets.filter((el) => el.typeDirection === 'arrival');
      (departureTickets.length === arrivalTickets.length && tickets.length > 0) ?
        setBtnActive(true) : setBtnActive(false)
    } else {
      (tickets.length > 0) ? setBtnActive(true) : setBtnActive(false)
    }
  }, [tickets])

  useEffect(() => {
    if (id) {
      const getData = async () => {
        const data = await getSeats(id);
        if (data) setResponseDeparture(data);
      }
      getData();
    }
    if (id2) {
      const getData = async () => {
        const data = await getSeats(id2);
        if (data) setResponseArrival(data);
      }
      getData();
    }
  }, [])

  const clickChangeTrain = () => {
    dispatch(clearTrain());
    dispatch(clearActiveTypeRailwayCarriage('departure'));

    navigate(`/diplom-fe/routes/${cityFrom.id}/${cityTo.id}${dateStart
      ? `/${sendCurrentDateToServer(dateStart)}${dateTo
        ? `/${sendCurrentDateToServer(dateTo)}` : ''}` : ''}`);
  }

  const nextPage = () => {
    if (btnActive) {
      navigate('/diplom-fe/passengers')
    }

    return
  }

  return (

    <div className="flex-container-align">
      <AsideSelection />
      <div className='railway-carriage'>
        <div className="railway-carriage-item">

          <div className='railway-carriage__button-container'>
            <img src={arrowRight} alt="icon arrow" />
            <button className='railway-carriage__btn-back'
              onClick={clickChangeTrain}>
              Выбрать другой поезд
            </button>

          </div>
          {/* <RouteRailwayCarriage list={response as SeatsRequestProps} /> */}

          <div>
            {item?.departure && <RouteRailwayCarriage item={item.departure} typeDirection='departure' />}
            {responseDeparture && <QualityTickets list={responseDeparture} typeDirection='departure' />}
            <ContainerRailwayCarriage data={responseDeparture} typeDirection='departure' />

          </div>
        </div>
        {item?.arrival && <div className='railway-carriage-item'>
          <div className='railway-carriage__button-container container-back'>
            <img src={arrowLeft} alt="icon arrow" />
            <button className='railway-carriage__btn-back'
              onClick={clickChangeTrain}>
              Выбрать другой поезд
            </button>
          </div>
          {item?.arrival && <RouteRailwayCarriage item={item.arrival}
            typeDirection='arrival' />}
          {responseDeparture && <QualityTickets list={responseArrival} typeDirection='arrival' />}
          <ContainerRailwayCarriage data={responseArrival} typeDirection='arrival' />

        </div>
        }

        <NextButton title='Далее' type='button'
          clickAction={nextPage} active={btnActive} />
      </div>


    </div>
  )
}

export default RailwayCarriage;