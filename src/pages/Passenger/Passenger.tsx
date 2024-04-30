import PassengerContainer from "../../components/Passengers/PassengerContainer/PassengerContainer";
import { useAppSelector } from "../../shared/redux/redux-hooks";

const Passenger = () => {

  const {tickets} = useAppSelector(state => state.train);

  return (
    <>
      {tickets.map((el, index) => (
        <PassengerContainer el={el} index={index + 1}
        key={index} />
      ))}
      

    </>
  )
}

export default Passenger;