import { useNavigate } from 'react-router-dom';
import ConfirmationTitle from '../ConfirmationTitle/ConfirmationTitle';
import './ConfirmationPayment.css';


const ConfirmationPayment = ({text }: {text: string}) => {

  const navigate = useNavigate();

  const handleEditBtn = () => {
    navigate('/diplom-fe/payment');
  }

  return (
    <div className='confirmation__container'>
      <ConfirmationTitle title='Способ оплаты' />
      <div className='confirmation__container-pay-container'>
        <span>{text}</span>
        <div className='confirmation__container-box'>
        <button onClick={() => handleEditBtn()}
              className="train-routes__item__btn-edit-train">Изменить</button>
        </div>
      </div>
    </div> 
  )
}

export default ConfirmationPayment;