import { useSearchParams } from 'react-router-dom';
import DateInput from '../../input/DateInput';
import './TravelDatesContainer.css';

const TravelDatesContainer = () => {

  const [searchParams] = useSearchParams();

  return (
    <div className='travel-date__container'>
      <h3>Дата поездки</h3>
      <DateInput nameClass='travel-date__container-date-from'
        data={searchParams.get('dateFrom') ? searchParams.get('dateFrom')! : ''} />
      <h3>Дата возвращения</h3>
      <DateInput nameClass='travel-date__container-date-to'
        data={searchParams.get('dateTo') ? searchParams.get('dateTo')! : ''} />
    </div>
  )
}

export default TravelDatesContainer;