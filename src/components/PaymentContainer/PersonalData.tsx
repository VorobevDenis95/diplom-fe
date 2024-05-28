import InputPassenger from "../Passengers/InputContainer/InputPassenger";
import WrapperContainer from "../Passengers/WrapperContainer/WrapperContainer";
import './PersonalData.css'
import PhoneContainer from "../Passengers/PhoneContainer/PhoneContainer";
import EmailContainer from "../Passengers/EmailContainer/EmailContainer";
import { PersonalDataProps } from "../../shared/types/components/componentsTypes";

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
            <InputPassenger type="last_name"
              changeInput={handleInputFullName} value={lastNameValue} />
          </WrapperContainer>

          <WrapperContainer title="Имя" 
          classname="wrapper_input-container-title-color-black">
            <InputPassenger type="first_name"
              changeInput={handleInputFullName} value={firstNameValue} />
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