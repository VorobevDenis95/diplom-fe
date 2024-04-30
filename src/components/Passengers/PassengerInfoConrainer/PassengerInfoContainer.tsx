
import CheckboxContainer from "../InputContainer/CheckboxContainer/CheckboxContainer"
import DateInput from "../InputContainer/DateInput/DateInput"
import InputPassenger from "../InputContainer/InputPassenger"
import RadioBtn from "../InputContainer/RadioBtn/RadioBtn"
import SelectInput from "../SelectInput/SelectInput"
import WrapperContainer from "../WrapperContainer/WrapperContainer"

const PassengerInfoContainer = () => {
  return (
    <div className='passenger__item__container'>
      <SelectInput list={["Взрослый", "Детский"]} />
      <div className="passenger__fullname-container">
        <WrapperContainer title='Фамилия'>
          <InputPassenger type='last_name' />
        </WrapperContainer>
        <WrapperContainer title='Имя'>
          <InputPassenger type='first_name' />
        </WrapperContainer>
        <WrapperContainer title='Отчество'>
          <InputPassenger type='patronymic' />
        </WrapperContainer>
      </div>

      <div className='passenger__date-gender-container'>
        <WrapperContainer title='Пол'>
          <RadioBtn />
        </WrapperContainer>

        <WrapperContainer title='Дата рождения'>
          <DateInput />
        </WrapperContainer>

      </div>

      <CheckboxContainer />
    </div>
  )
}

export default PassengerInfoContainer