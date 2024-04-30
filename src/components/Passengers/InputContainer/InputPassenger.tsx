import './InputPassenger.css';

interface InputPassengerProps {
  type: 'first_name' | 'last_name' | 'patronymic';

}

const InputPassenger = ({type} : InputPassengerProps) => {
// const InputPassenger = () => {

  console.log(type);

  return (
    <input className='passenger_input-fullname'
     type='text' required/>
  )
}

export default InputPassenger