import { useParams } from 'react-router-dom';
import './RailwayCarriage.css';
import { useEffect } from 'react';
import { getSeats } from '../../../shared/api/serviceApi';

interface RailwayCarriageProps {

}

const RailwayCarriage = () => {

  const params = useParams();
  const {id} = params;
  useEffect(() => {
    if (id) 
    getSeats(id);    
  }, [])
  console.log(params);
  return (
    <div className='railway-carriage'>

      <button >
        Выбрать другой поезд
      </button>
    </div>

  )
}

export default RailwayCarriage;