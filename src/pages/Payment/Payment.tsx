import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import PaymentMethodContainer from '../../components/PaymentContainer/PaymentMethodContainer';
import PersonalData from '../../components/PaymentContainer/PersonalData';
import './Payment .css';
import { InputType } from '../../components/Passengers/InputContainer/InputPassenger';
import { EmailPhoneInput } from '../../components/Passengers/PhoneContainer/PhoneContainer';
import NextButton from '../../components/NextButton/NextButton';
// import { useNavigate } from 'react-router-dom';
// import { useAppDispatch } from '../../shared/redux/redux-hooks';
// import {useForm, SubmitHandler} from 'react-hook-form';

export type PaymentMethodType = 'cash' | 'online';

// interface MyPaymentForm {
//   first_name: string;
//   last_name: string;
//   patronymic: string;
//   phone: string;
//   email: string;
//   payment_method: PaymentMethodType;
// }

// const {
//   register,
//   handleSubmit,
//   watch,
//   formState: { errors },
// } = useForm<MyPaymentForm>()
// const onSubmit: SubmitHandler<MyPaymentForm> = (data) => console.log(data)

interface DataPaymentPassenger {
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

  // const navigator = useNavigate();
  // const dispatch = useAppDispatch();

  const [data, setData] = useState(initDataPayment);

  //personalData logic
  const [firstNameValue, setFirstNameValue] = useState('');
  const [lastNameValue, setLastNameValue] = useState('');
  const [patronymicValue, setPatronymicValue] = useState('');
  const [phoneValue, setPhoneValue] = useState('');
  const [emailValue, setEmailValue] = useState('');

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
        setPhoneValue(e.target.value);
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
  // const handleClickCheckboxes = (value: boolean, title?: string) => {
  //   if (title && value) {
  //     setCheckBoxesType('Не выбрано');
  //     setPaymentType('cash');
  //     return
  //   }
  //   if (title && !value) {
  //     title === 'Наличные' ? setCheckBoxesType('Наличными') : setCheckBoxesType('Онлайн');
  //     title === 'Наличные' ? setPaymentType('cash') : setPaymentType('online');
  //     return;
  //   }
  // }

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
    e.preventDefault()
    console.log(data)
  }

  return (

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

  )
}

export default Payment;