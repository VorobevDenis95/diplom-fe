import './SelectSeatsContainer.css'
import wifiIcon from '../../../assets/images/svg/wifi__Icon.svg';
import expressIcon from '../../../assets/images/svg/express__icon.svg'
import airConditionIcon from '../../../assets/images/svg/airCondition.svg'


interface SelectSeatsContainerProps { 
  have_wifi?: boolean;
  have_air_conditioning?: boolean;
  is_express?: boolean;
}

const SelectSeatsContainer = ({have_wifi, have_air_conditioning, is_express} : SelectSeatsContainerProps) => {
  
  return (
    <div className='service__container'>
      {have_wifi &&
      <img src={wifiIcon} alt="service__icon" />
      }
      {is_express &&
      <img src={expressIcon} alt="service__icon" />
    }
    {have_air_conditioning && 
    <img src={airConditionIcon} alt="service__icon" />
    }
    </div>
  )
}

export default SelectSeatsContainer;