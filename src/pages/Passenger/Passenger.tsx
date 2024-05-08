import { useEffect, useState } from "react";
import AsidePassenger from "../../components/AsideContainer/AsidePassenger";
import NextButton from "../../components/NextButton/NextButton";
import PassengerContainer from "../../components/Passengers/PassengerContainer/PassengerContainer";
import { useAppSelector } from "../../shared/redux/redux-hooks";
import './Passenger.css';
import { useNavigate } from "react-router-dom";

const Passenger = () => {
  const { tickets, passengers } = useAppSelector(state => state.train);
  const navigator = useNavigate();

  useEffect(() => {
    console.log(passengers)
    passengers.length === tickets.length && tickets.length !== 0 
    ? setBtnNextPageActive(true) : setBtnNextPageActive(false);
  }, [passengers])

  const [btnNextPageActive, setBtnNextPageActive] = useState(false);

  const nextPage = () => {
    if (btnNextPageActive)
    navigator('/payment');
  }

  return (
    <>
      <div className="flex">
        <AsidePassenger />
        <div className="passenger">
          {tickets.map((el, index) => (
            <PassengerContainer el={el} index={index + 1}
              key={index} />
          ))}
          <NextButton title="Далее" type="button"
           clickAction={nextPage} active={btnNextPageActive} />

        </div>

      </div>

    </>
  )
}

export default Passenger;