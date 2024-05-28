import './PaymentMethodContainer.css';
import RadioContainer from '../Passengers/InputContainer/RadioContainer/RadioContainer';
import { PaymentMethodContainerProps } from '../../shared/types/components/componentsTypes';

const PaymentMethodContainer = ({onChangeRadio} : PaymentMethodContainerProps) => {

  return (
    <div className="payment-method">
      <h4 className="title-container">
        Cпособ оплаты
      </h4>
      <div className="payment-method__container">
        <div>
          <RadioContainer title='Онлайн' 
          onChange={onChangeRadio}
          radioName='payment' value='online' />
        </div>
        <div className='payment-method__container-type-payment'>
          <p>Банковской картой</p>
          <p>PayPal</p>
          <p>Visa QIWI Wallet</p>
        </div>
      </div>
      <div className="payment-method__container">
        <RadioContainer onChange={onChangeRadio}
        title='Наличные' radioName='payment' value='cash'/>
      </div>
    </div>
  )
}

export default PaymentMethodContainer;