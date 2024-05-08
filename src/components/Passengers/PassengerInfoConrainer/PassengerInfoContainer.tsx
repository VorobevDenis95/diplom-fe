
import CheckboxContainer from "../InputContainer/CheckboxContainer/CheckboxContainer"
import DateInput from "../InputContainer/DateInput/DateInput"
import InputPassenger, { InputType } from "../InputContainer/InputPassenger"
import RadioBtn from "../InputContainer/RadioBtn/RadioBtn"
import { GenderType } from "../InputContainer/RadioBtn/RadioBtnItem"
import { PassengerDataSeats } from "../PassengerContainer/PassengerContainer"
import { TicketType } from "../SelectInput/ListValues/ListValues"
import SelectInput from "../SelectInput/SelectInput"
import WrapperContainer from "../WrapperContainer/WrapperContainer"
import { ChangeEvent } from 'react';


interface PassengerInfoConrainer {
  list: TicketType[];
  index: number;
  clickInput: () => void;
  clickValue: (i: number) => void;
  isActive: boolean;
  changeInput: (type: InputType, e: ChangeEvent<HTMLInputElement>) => void;
  activeTypeGender: GenderType;
  clickBtnGender: (type: GenderType) => void;
  checked: boolean;
  onChangeChecked: (checked: boolean) => void;
  data: PassengerDataSeats;
}

const PassengerInfoContainer = ({changeInput, list, index, clickInput, clickValue,
   isActive, activeTypeGender, clickBtnGender,
  checked, onChangeChecked, data} : PassengerInfoConrainer) => {
  return (
    <div className='passenger__item__container'>
      <SelectInput list={list} active={isActive}
      index={index} changeList={clickInput} clickItemList={clickValue} />
      <div className="passenger__fullname-container">
        <WrapperContainer title='Фамилия'>
          <InputPassenger type='last_name'
          value={data.last_name} 
          changeInput={changeInput}
          />
        </WrapperContainer>
        <WrapperContainer title='Имя'>
          <InputPassenger type='first_name'
          changeInput={changeInput} 
          value={data.first_name}/>
        </WrapperContainer>
        <WrapperContainer title='Отчество'>
          <InputPassenger type='patronymic'
          changeInput={changeInput}
          value={data.patronymic} />
        </WrapperContainer>
      </div>

      <div className='passenger__date-gender-container'>
        <WrapperContainer title='Пол'>
          <RadioBtn activeTypeGender={activeTypeGender} clickBtnGender={clickBtnGender}/>
        </WrapperContainer>

        <WrapperContainer title='Дата рождения'>
          <DateInput type="birthday" changeInput={changeInput}
          value={data.birthday}/>
        </WrapperContainer>

      </div>

      <CheckboxContainer checked={checked} onChange={onChangeChecked}
      title="ограниченная подвижность"/>
    </div>
  )
}

export default PassengerInfoContainer