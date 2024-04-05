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
      params={} /> 
      <CheckBoxItem key={coupeIcon} src={coupeIcon} title='Плацкарт'
      params={} /> 
      <CheckBoxItem key={coupeIcon} src={coupeIcon} title='Сидячий'
      params={} /> 
      <CheckBoxItem key={coupeIcon} src={coupeIcon} title='Люкс'
      params={} /> 
      <CheckBoxItem key={coupeIcon} src={coupeIcon} title='Wifi'
      params={} /> 
      <CheckBoxItem key={coupeIcon} src={coupeIcon} title='Экспресс'
      params={} /> 
    </>
  )
}

export default CheckBoxContainer;