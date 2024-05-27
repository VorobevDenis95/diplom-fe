import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import PaymentMethodContainer from '../../components/PaymentContainer/PaymentMethodContainer';
import PersonalData from '../../components/PaymentContainer/PersonalData';
import './Payment .css';
import { InputType } from '../../components/Passengers/InputContainer/InputPassenger';
import { EmailPhoneInput } from '../../components/Passengers/PhoneContainer/PhoneContainer';
import NextButton from '../../components/NextButton/NextButton';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../shared/redux/redux-hooks';
import { setUserTrain } from '../../shared/redux/slice/trainSlice';
import AsidePassenger from '../../components/AsideContainer/AsidePassenger';
// import { maskPhone } from './utils';
// import {useForm, SubmitHandler} from 'react-hook-form';

export type PaymentMethodType = 'cash' | 'online';

export interface DataPaymentPassenger {
  first_name: string;
  last_name: string;
  patronymic: string;
  phone: string;
  email: string;
  payment_method: PaymentMethodType | null;
}

const initDataPayment: DataPaymentPassenger = {
  first_name: '',
  last_name: '',
  patronymic: '',
  phone: '',
  email: '',
  payment_method: null
}

const Payment = () => {
  
  const {user} = useAppSelector(state => state.train)
  const navigator = useNavigate();
  const dispatch = useAppDispatch();

  const [data, setData] = useState(initDataPayment);

  //personalData logic
  const [firstNameValue, setFirstNameValue] = useState(user?.first_name ? user.first_name: '');
  const [lastNameValue, setLastNameValue] = useState(user?.last_name ? user.last_name: '');
  const [patronymicValue, setPatronymicValue] = useState(user?.patronymic ? user.patronymic: '');
  const [phoneValue, setPhoneValue] = useState(user?.phone ? user.phone: '');
  const [emailValue, setEmailValue] = useState(user?.email ? user.email: '');

  const handleInputFullName = (type: InputType | EmailPhoneInput, e: ChangeEvent<HTMLInputElement>) => {

    switch (type) {
      case 'first_name':
        setFirstNameValue(e.target.value);
        break;
      case 'last_name':
        setLastNameValue(e.target.value);
        break;
      case 'patronymic':
        setPatronymicValue(e.target.value);
        break;
      case 'phone':
        console.log('+7' + e.target.value)
        setPhoneValue(e.target.value)
        break;
      case 'email':
        setEmailValue(e.target.value);
        break;
      default:
        break;
    }
  }

  // paymentMethodContainer logic

  // const [checkboxesType, setCheckBoxesType] = useState<PaymentCheckboxType>('Не выбрано');
  const [paymentType, setPaymentType] = useState<PaymentMethodType | null>(null);

  const handleChangeRadio = (value: PaymentMethodType) => {
    setPaymentType(value);
  }

  useEffect(() => {
    setData((prevState) => {
      return {
        ...prevState,
        first_name: firstNameValue,
      }
    })
  }, [firstNameValue])

  useEffect(() => {
    setData((prevState) => {
      return {
        ...prevState,
        last_name: lastNameValue,
      }
    })
  }, [lastNameValue])

  useEffect(() => {
    setData((prevState) => {
      return {
        ...prevState,
        patronymic: patronymicValue,
      }
    })
  }, [patronymicValue])

  useEffect(() => {
    setData((prevState) => {
      return {
        ...prevState,
        phone: phoneValue,
      }
    })
  }, [phoneValue])

  useEffect(() => {
    setData((prevState) => {
      return {
        ...prevState,
        email: emailValue,
      }
    })
  }, [emailValue])

  useEffect(() => {
    setData((prevState) => {
      return {
        ...prevState,
        payment_method: paymentType,
      }
    })
  }, [paymentType])


  // const [nextPageActive, setNextPageActive] = useState(false);

  const handleClickNextPage = () => {
    // dispatch()
    // navigator('/');

  }

  const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setUserTrain(data));
    navigator('/confirmation');
    // console.log(data)
  }

  return (

    <div className="flex flex-start">
      <AsidePassenger />
      <div className="payment">
        <form onSubmit={(e) => handleSubmitForm(e)} >
          <div className='payment-body'>
            <PersonalData
              handleInputFullName={handleInputFullName}
              firstNameValue={firstNameValue}
              lastNameValue={lastNameValue}
              patronymicValue={patronymicValue}
              phoneValue={phoneValue}
              emailValue={emailValue}
            />
            <PaymentMethodContainer onChangeRadio={handleChangeRadio} />

          </div>

          <NextButton title='Купить биллеты'
            active={true}
            clickAction={handleClickNextPage}
            type='submit'
          />
        </form>

      </div>
    </div>

  )
}

export default Payment;