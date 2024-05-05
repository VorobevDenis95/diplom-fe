import { ChangeEvent, useEffect, useState } from 'react';
import './PassengerContainer.css';
import openIcon from '../../../assets/images/svg/passenger /open-btn.svg';
import closeIcon from '../../../assets/images/svg/passenger /close-btn.svg';
import closeIcon2 from '../../../assets/images/svg/passenger /close2.svg';
import { TicketProps } from '../../../shared/redux/slice/trainSlice';
import PassengerInfoContainer from '../PassengerInfoConrainer/PassengerInfoContainer';
import PassengerDocumentContainer, { TypeDocument } from '../PassengerDocumentContainer/PassengerDocumentContainer';
import { InputType } from '../InputContainer/InputPassenger';
import { TicketType } from '../SelectInput/ListValues/ListValues';
import { GenderType } from '../InputContainer/RadioBtn/RadioBtnItem';
import { requiredFieldsObject } from './utils';
import RequiestContainer from '../RequiestContainer/RequiestContainer';

export interface PassengerContainerProps {
  index: number,
  el: TicketProps,
}

export interface PassengerDataSeats {
  is_adult: boolean;
  first_name: string;
  last_name: string;
  patronymic: string;
  gender: boolean;
  birthday: string;
  document_type: 'паспорт' | 'свидетельство';
  document_data: string;
}

const initPassengerDataSeats: PassengerDataSeats = {
  is_adult: true,
  gender: true,
  first_name: '',
  last_name: '',
  patronymic: '',
  birthday: '',
  document_data: '',
  document_type: 'паспорт',
}

const PassengerContainer = ({ index }: PassengerContainerProps) => {

  const [isActive, setActive] = useState(false);
  const [currentImage, setCurrentImage] = useState(isActive ? closeIcon : openIcon);

  const [data, setData] = useState<PassengerDataSeats>(initPassengerDataSeats);

  useEffect(() => {
    isActive ? setCurrentImage(closeIcon) : setCurrentImage(openIcon);
    setChecked(false);
  }, [isActive])



  // changeInput: (type: InputType, e: ChangeEvent<HTMLInputElement>) => void;


  const changeInputEl = (type: InputType, e: ChangeEvent<HTMLInputElement>) => {

    if (type === 'birthday') {
      setData((prevstate) => {
        return {
          ...prevstate,
          [type]: currentBirthday(e),
        }
      })
      return;
    }

    setData((prevstate) => {
      return {
        ...prevstate,
        [type]: e.target.value,
      }
    })
  }

  const currentBirthday = (e: ChangeEvent<HTMLInputElement>) => {
    const data = e.target.value.split('.');
    const day = data[0];
    const month = data[1];
    const year = Number(data[2]);
    const currentYear = new Date().getFullYear() - 2000;

    const newYear = year >= 0 && year <= currentYear ?
      Number(`20${year}`) : Number(`19${year}`);

    return `${day}.${month}.${newYear}`

  }

  // useEffect(() => {
  //   console.log(data);
  // }, [data])



  //info container  logic

  const [isActiveInfoContainer, setActiveInfoContainer] = useState(true);
  const listInfoContainer: TicketType[] = ['Взрослый', 'Детский'];
  // const [isActiveListInfoContainer, setActiveListInfoContainer] = useState(false);

  const [indexInfoContainer, setIndexInfoContainer] = useState(0);

  const clickValueInfoContainer = (i: number) => {
    console.log(i)
    setIndexInfoContainer(i);
    // setActiveListInfoContainer(!isActiveListInfoContainer);
    setActiveInfoContainer(!isActiveInfoContainer);
  }

  const clickInputInfoContainer = () => {
    // setActiveListInfoContainer(!isActiveListInfoContainer);
    setActiveInfoContainer(!isActiveInfoContainer);
  }

  useEffect(() => {
    setData((prevstate) => {
      return {
        ...prevstate,
        is_adult: indexInfoContainer === 0 ? true : false,
      }
    })
  }, [indexInfoContainer])


  // // document container logic


  const [isActiveDocument, setActiveDocument] = useState(true);
  // const [isActiveList, setActiveList] = useState(false);
  const listDocument: TypeDocument[] = ['Паспорт РФ', 'Свидетельство о рождении'];

  const [indexDocument, setIndexDocument] = useState(0);

  const clickValueDocument = (i: number) => {
    console.log(i)
    setIndexDocument(i);
    setActiveDocument(!isActiveDocument);
  }

  const clickInputDocument = () => {
    setActiveDocument(!isActiveDocument);
  }

  useEffect(() => {
    setPassportValue('');
    setCertificateValue('');

    setData((prevstate) => {
      return {
        ...prevstate,
        document_type: indexDocument === 0 ? 'паспорт' : 'свидетельство',
        document_data: indexDocument === 0 ? passportValue : certificateValue,
      }
    })
  }, [indexDocument])

  // radio btn logic

  const [isActiveTypeGender, setActiveTypeGender] = useState<GenderType>('male');

  const clickBtnGender = (type: GenderType) => {
    setActiveTypeGender(type);
  }

  useEffect(() => {
    setData((prevstate) => {
      return {
        ...prevstate,
        gender: isActiveTypeGender === 'male' ? true : false,
      }
    })
  }, [isActiveTypeGender])

  // limited mobility 

  const [isCheckedLimited, setCheckedLimited] = useState(false);

  const handlerChangeChecked = (value: boolean) => {
    setCheckedLimited(!value);
  }

  // logic document change
  const [passportValue, setPassportValue] = useState('');

  const [certificateValue, setCertificateValue] = useState('');


  const changeSeriesPassport = (series: string, number: string) => {
    setPassportValue(`${series} ${number}`);
  }

  const changeNumberPassport = (series: string, number: string) => {
    setPassportValue(`${series} ${number}`);
  }

  // certificate number logic

  const changeInputCertificateNumber = (text: string) => {
    setCertificateValue(text);
  }

  useEffect(() => {
    setData((prevstate) => {
      return {
        ...prevstate,
        document_data: indexDocument === 0 ? passportValue : certificateValue,
      }
    })
  }, [passportValue, certificateValue])

  // logic required fields

  const [required, setRequired] = useState(requiredFieldsObject(data));
  const [isChecked, setChecked] = useState(false);

  useEffect(() => {
    setRequired(requiredFieldsObject(data));
  }, [data])

  const clickRequired = () => {
    setRequired(requiredFieldsObject(data));
    setChecked(true);
    console.log(required);
  }

  // function statusCheck () {

  // }

  // const [statusRequiredContainer, setStatusRequiredContainer] = useState();

  return (
    <div className="passenger__item">
      <div className={`passenger__item__header 
      ${isActive ? 'passenger__item__header-active' : ''}`} >
        <div className='passenger__item__header-container'>
          <button onClick={() => setActive(!isActive)}>
            <img src={currentImage} alt="" />
          </button>
          <h3>Пассажир {index}</h3>
        </div>
        {isActive && <button
          onClick={() => { setActive(!isActive) }}
          className='passenger__item-close-btn'>
          <img src={closeIcon2} alt="close icon" />
        </button>}
      </div>
      {
        isActive &&
        <>
          <PassengerInfoContainer changeInput={changeInputEl} clickInput={clickInputInfoContainer}
            clickValue={clickValueInfoContainer} list={listInfoContainer} activeTypeGender={isActiveTypeGender}
            clickBtnGender={clickBtnGender}
            checked={isCheckedLimited}
            onChangeChecked={handlerChangeChecked}
            index={indexInfoContainer} isActive={isActiveInfoContainer} 
            data={data}/>
          <PassengerDocumentContainer list={listDocument} isActive={isActiveDocument}
            clickValue={clickValueDocument} clickInput={clickInputDocument} index={indexDocument}
            changeInputPassportNumber={changeNumberPassport} changeInputPassportSeries={changeSeriesPassport}
            changeInputCertificateNumber={changeInputCertificateNumber} />
          <RequiestContainer data={required} clickBtnPassenger={clickRequired}
            checkStatus={isChecked} />
        </>
      }

    </div>
  )
}

export default PassengerContainer;