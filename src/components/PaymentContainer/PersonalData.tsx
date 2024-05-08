import { ChangeEvent } from "react";
import InputPassenger, { InputType } from "../Passengers/InputContainer/InputPassenger";
import WrapperContainer from "../Passengers/WrapperContainer/WrapperContainer";
import './PersonalData.css'
import PhoneContainer, { EmailPhoneInput } from "../Passengers/PhoneContainer/PhoneContainer";
import EmailContainer from "../Passengers/EmailContainer/EmailContainer";

interface PersonalDataProps {
  handleInputFullName: (type: InputType | EmailPhoneInput, e: ChangeEvent<HTMLInputElement>) => void;
  firstNameValue: string;
  lastNameValue: string;
  patronymicValue: string;
  phoneValue: string;
  emailValue: string;
}

const PersonalData = ({handleInputFullName, firstNameValue, lastNameValue, patronymicValue, phoneValue, emailValue}: PersonalDataProps) => {

  return (
    <div className="personal-data">
      <h4 className="title-container">
        Персональные данные
      </h4>
      <div className="personal-data-body">
        <div className="personal-data-body-container">
          <WrapperContainer title="Фамилия" 
          classname="wrapper_input-container-title-color-black">
            <InputPassenger type="first_name"
              changeInput={handleInputFullName} value={firstNameValue} />
          </WrapperContainer>

          <WrapperContainer title="Имя"
          classname="wrapper_input-container-title-color-black">
            <InputPassenger type="last_name"
              changeInput={handleInputFullName} value={lastNameValue} />
          </WrapperContainer>
          
          <WrapperContainer title="Отчество"
          classname="wrapper_input-container-title-color-black">
            <InputPassenger type="patronymic"
              changeInput={handleInputFullName} value={patronymicValue} />
          </WrapperContainer>
          

        </div>
        <div>
          <WrapperContainer title="Контактный телефон"
          classname="wrapper_input-container-title-color-black">
            <PhoneContainer onChange={handleInputFullName} value={phoneValue}
            type="phone" />
          </WrapperContainer>
        </div>
        <div>
          <WrapperContainer title="E-mail"
          classname="wrapper_input-container-title-color-black">
            <EmailContainer onChange={handleInputFullName} value={emailValue}
            type="email"/>
          </WrapperContainer>

        </div>
      </div>
    </div>
  )
}

export default PersonalData;