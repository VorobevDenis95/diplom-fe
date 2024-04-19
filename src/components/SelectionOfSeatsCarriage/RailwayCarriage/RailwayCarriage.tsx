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
import { clearTrain } from '../../../shared/redux/slice/trainSlice';
import ContainerRailwayCarriage from './MapContainerRailwayCarriage/RailwaysCarriage/ContainerRailwayCarriage/ContainerRailwayCarriage';

// interface RailwayCarriageProps {

// }

const RailwayCarriage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate() 
  
  const [response, setResponse] = useState<SeatsRequestProps[]>([]);
  console.log(response)
  const params = useParams();
  const {id} = params;

  const {item} = useAppSelector(state => state.train);

  useEffect(() => {
    if (id) {
      const getData = async () => {
        console.log(id);
        const data = await getSeats(id);
        if (data) setResponse(data);    
        console.log(data);
      }
      getData();
    }
  }, [])
  console.log(params);
  console.log(item)

  const clickChangeTrain = () => {
    dispatch(clearTrain());
    navigate(-1);
  }

  

  return (
    <div className='railway-carriage'>
      <div className='railway-carriage__button-container'>
        <img src={arrowRight} alt="icon arrow" />
        <button className='railway-carriage__btn-back' 
        onClick={clickChangeTrain}>
          Выбрать другой поезд
        </button>

      </div>
      {/* <RouteRailwayCarriage list={response as SeatsRequestProps} /> */}
      {item && <RouteRailwayCarriage item={item.departure} />}
      { response && <QualityTickets list={response}/>}
      <ContainerRailwayCarriage data={response}/>
    </div>

  )
}

export default RailwayCarriage;