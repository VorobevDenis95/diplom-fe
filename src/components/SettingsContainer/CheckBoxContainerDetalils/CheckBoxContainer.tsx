import './CheckBoxContainer.css';
import CheckBoxItem from './CheckboxItem/CheckboxItem';
import coupeIcon from '../../../assets/images/svg/ railway__carriage/coupe.svg';
import reservedSeat from '../../../assets/images/svg/ railway__carriage/reserved__seat.svg';
import sedentary from '../../../assets/images/svg/ railway__carriage/sedentary.svg';
import luxary from '../../../assets/images/svg/ railway__carriage/luxary.svg';
import wifiIcom from '../../../assets/images/svg/ railway__carriage/wifi.svg';
import expressIcon from '../../../assets/images/svg/ railway__carriage/express.svg';




const CheckBoxContainer = () => {
  


  return (
    <>
      <CheckBoxItem key={coupeIcon} src={coupeIcon} title='Купе'
      params='have_second_class' /> 
      <CheckBoxItem key={reservedSeat} src={reservedSeat} title='Плацкарт'
      params='have_third_class' /> 
      <CheckBoxItem key={sedentary} src={sedentary} title='Сидячий'
      params='have_fourth_class' /> 
      <CheckBoxItem key={luxary} src={luxary} title='Люкс'
      params='have_first_class' /> 
      <CheckBoxItem key={wifiIcom} src={wifiIcom} title='Wifi'
      params='have_wifi' /> 
      <CheckBoxItem key={expressIcon} src={expressIcon} title='Экспресс'
      params='have_air_conditioning' /> 
    </>
  )
}

export default CheckBoxContainer;