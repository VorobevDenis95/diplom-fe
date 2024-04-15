import DateInput from '../../input/DateInput';
import './TravelDatesContainer.css';

const TravelDatesContainer = () => {
  return (
    <div className='travel-date__container'>
      <h3>Дата поездки</h3>
      <DateInput nameClass='search-form__input-date-from'/>
      <h3>Дата возвращения</h3>

    </div>
  )
}

export default TravelDatesContainer;