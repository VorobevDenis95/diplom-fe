// import { useEffect, useState } from 'react';
// import CheckboxContainer from '../Passengers/InputContainer/CheckboxContainer/CheckboxContainer';
import './PaymentMethodContainer.css';
import RadioContainer from '../Passengers/InputContainer/RadioContainer/RadioContainer';
import { PaymentMethodType } from '../../pages/Payment/Payment';

export type PaymentCheckboxType = 'Онлайн' | 'Наличными' | 'Не выбрано'; 

export interface PaymentMethodContainerProps {
  onChangeRadio: (value: PaymentMethodType) => void;
}

const PaymentMethodContainer = ({onChangeRadio} : PaymentMethodContainerProps) => {

  // const [checkedOnline, setCheckedOnline] = useState(false);
  // const [checkedCash, setCheckedCash] = useState(false);

  // useEffect(() => {
  //   if (type === 'Не выбрано') {
  //     setCheckedOnline(false);
  //     setCheckedCash(false);
  //   }
  //   if (type === 'Наличными') {
  //     setCheckedCash(true);
  //     setCheckedOnline(false)
  //   }
  //   if (type === 'Онлайн') {
  //     setCheckedOnline(true);
  //     setCheckedCash(false);
  //   }
  // }, [type])

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