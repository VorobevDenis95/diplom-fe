import { PassengerDataSeats } from '../../Passengers/PassengerContainer/PassengerContainer';
import './ConfirmationItemPassenger.css';
import iconPassenger from '../../../assets/images/svg/confirmation/passenger-icon.svg';

interface ConfirmationItemPassengerProps {
  item: PassengerDataSeats,
}

const ConfirmationItemPassenger = ({item} : ConfirmationItemPassengerProps) => {
  return (
    <div className='confirmation__passenger-item'>
      <div className='confirmation__passenger-item-column'>
        <img src={iconPassenger} alt="icon passenger" />
        <span>{item.is_adult ? 'Взрослый' : 'Детский'}</span>
      </div>
      <div className='confirmation__passenger-item-column'>
        <span className='confirmation__passenger-item-fullname'>
          {`${item.first_name} ${item.last_name} ${item.patronymic}`}
        </span>
        <span>Пол {item.gender ? 'мужской' : 'женский'}</span>
        <span>Дата рождения {item.birthday}</span>
        <span>{item.document_type === 'паспорт' ? 'Паспорт РФ' : 'Свидетельство о рождении'}
        {item.document_data}
        </span>
      </div>
    </div>
  )
}

export default ConfirmationItemPassenger;