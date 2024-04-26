import { useNavigate, useParams } from 'react-router-dom';
import './RailwayCarriage.css';
import { useEffect, useState } from 'react';
import { getSeats } from '../../../shared/api/serviceApi';
import { SeatsRequestProps } from '../../../shared/types/typesSeats';
import RouteRailwayCarriage from './RouteRailwayCariage/RouteRailwayCarriage';
import { useAppDispatch, useAppSelector } from '../../../shared/redux/redux-hooks';
import arrowRight from '../../../assets/images/svg/time__container/blockArrowRight.svg';
// import arrowLeft from '../../../assets/images/svg/time__container/blockArrowLeft.svg';
import QualityTickets from './RouteRailwayCariage/QualityTickets/QualityTickets';
import { clearActiveTypeRailwayCarriage, clearTrain } from '../../../shared/redux/slice/trainSlice';
import ContainerRailwayCarriage from './MapContainerRailwayCarriage/RailwaysCarriage/ContainerRailwayCarriage/ContainerRailwayCarriage';
import AsideSelection from '../../input/AsideContainer/AsideSelection';
import { sendCurrentDateToServer } from '../../form/FormDirection/utils';

// interface RailwayCarriageProps {

// }

const RailwayCarriage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate()

  const [responseDeparture, setResponseDeparture] = useState<SeatsRequestProps[]>([]);
  const [responseArrival, setResponseArrival] = useState<SeatsRequestProps[]>([]);

  const params = useParams();
  const { id, id2 } = params;

  const { item } = useAppSelector(state => state.train);
  const { cityFrom, cityTo, dateStart, dateTo } = useAppSelector(state => state.direction);


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
    dispatch(clearActiveTypeRailwayCarriage());


    navigate(`/routes/${cityFrom.id}/${cityTo.id}${dateStart
      ? `/${sendCurrentDateToServer(dateStart)}${dateTo
        ? `/${sendCurrentDateToServer(dateTo)}` : ''}` : ''}`);
  }


  return (

    <div className="flex-container-align">
      {/* <AsideSelection /> */}
      <div className='railway-carriage'>
        <div className='railway-carriage__button-container'>
          <img src={arrowRight} alt="icon arrow" />
          <button className='railway-carriage__btn-back'
            onClick={clickChangeTrain}>
            Выбрать другой поезд
          </button>

        </div>
        {/* <RouteRailwayCarriage list={response as SeatsRequestProps} /> */}

        <div>
          {item?.departure && <RouteRailwayCarriage item={item.departure} />}
          {responseDeparture && <QualityTickets list={responseDeparture} />}
          <ContainerRailwayCarriage data={responseDeparture} />
        </div>
        {item?.arrival && <div>

          {item?.arrival && <RouteRailwayCarriage item={item.arrival} />}
          {responseDeparture && <QualityTickets list={responseDeparture} />}
          <ContainerRailwayCarriage data={responseDeparture} />
        </div>
        }
      </div>
    </div>
  )
}

export default RailwayCarriage;