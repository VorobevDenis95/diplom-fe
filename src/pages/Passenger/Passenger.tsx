import { useEffect, useState } from "react";
import AsidePassenger from "../../components/AsideContainer/AsidePassenger";
import NextButton from "../../components/NextButton/NextButton";
import PassengerContainer from "../../components/Passengers/PassengerContainer/PassengerContainer";
import { useAppSelector } from "../../shared/redux/redux-hooks";
import './Passenger.css';
import { useNavigate } from "react-router-dom";
import AddPasseger from "../../components/Passengers/PassengerContainer/AddPassenger/AddPassenger";

const Passenger = () => {
  const { tickets, passengers } = useAppSelector(state => state.train);
  const navigator = useNavigate();
  const { item } = useAppSelector(state => state.train);

  const arrivalTickets = tickets.filter((el) => el.typeDirection === 'arrival');

  const currentArr = arrivalTickets.length > 0 ? arrivalTickets : tickets;

  useEffect(() => {
    if (arrivalTickets.length > 0) {
      arrivalTickets.length === passengers.length ? setBtnNextPageActive(true) : setBtnNextPageActive(false);
    } else {
      passengers.length === tickets.length && tickets.length !== 0
        ? setBtnNextPageActive(true) : setBtnNextPageActive(false);
    }
  }, [passengers])

  const [btnNextPageActive, setBtnNextPageActive] = useState(false);

  const nextPage = () => {
    if (btnNextPageActive)
      navigator('/payment');
  }

  const handleAddPassenger = () => {
    item && navigator(`/routes/${item.departure._id}${item.arrival?._id ? `/${item.arrival._id}` : ''}/seats`);
  }

  return (
    <>
      <div className="flex flex-start">
        <AsidePassenger />
        <div className="passenger">
          {currentArr.map((el, index) => (
            <PassengerContainer el={el} index={index + 1}
              key={index} />
          ))}
        <AddPasseger clickAction={handleAddPassenger}/>
          <NextButton title="Далее" type="button"
            clickAction={nextPage} active={btnNextPageActive} />

        </div>

      </div>

    </>
  )
}

export default Passenger;