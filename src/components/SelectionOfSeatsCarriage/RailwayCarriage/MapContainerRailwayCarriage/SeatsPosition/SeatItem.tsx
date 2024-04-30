import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../../shared/redux/redux-hooks";
import { addRemoveTicket, setInclude_children_seat } from "../../../../../shared/redux/slice/trainSlice";
import { SeatsProps } from "../../../../../shared/types/typesSeats";
import { TypeRailwayCarriage } from "../../../../../shared/types/typesTrain";
import './SeatItem.css'
import { getPrice } from "./utils";

interface seatElProps {
  line?: string;
  type?: TypeRailwayCarriage;
  available: boolean;
  index: number;
}

export type SeatPosition = 'seat-static' | 'seat-passage' | 'seat-luxary' | 'sedentary'; 

interface SeatItemProps {
  position?: SeatPosition; 
  seatItem: SeatsProps;
  onClick?: (el: seatElProps) => void;
  typeDirection: 'departure' | 'arrival';
}

const SeatItem = ({seatItem, position = 'seat-static', typeDirection} : SeatItemProps) => {
  const dispatch = useAppDispatch();
  const [isActive, setActive] = useState(false);
  const {tickets} = useAppSelector(state => state.train);

  const {arrival, departure} = useAppSelector(state => state.train);
  
  const [activeDirection, setActiveDirection] = useState(typeDirection ==="departure" ? departure : arrival);

  useEffect(() => { 
    typeDirection ==="departure" ? setActiveDirection(departure) : setActiveDirection(arrival);
  }, [typeDirection, departure, arrival])

useEffect(() => {
  const find = tickets.find((el) => el.index === seatItem.index && el.numberCars === activeDirection.activeNumberCars);
  find ? setActive(true) : setActive(false);
}, [tickets, activeDirection.activeNumberCars, seatItem.index]);
  
  const clickItemSeat = (seatItem: seatElProps) => {
    console.log(12)
    if (activeDirection.activeTypeTicket === "childWithoutSeat") {
      const index = tickets.findIndex((el) => (el.is_adult
        && el.index === seatItem.index))
      if (index >= 0) dispatch(setInclude_children_seat(index))
        return
    }
    console.log(activeDirection.activeNumberCars)
    if (activeDirection.activeNumberCars && activeDirection.coach && position) {
      const price = getPrice(position, seatItem.index);
      const linensPrice =  activeDirection.servicesObj.inCludesLinens || activeDirection.servicesObj.linens ? activeDirection.coach.linens_price : 0; 
      const wifiPrice = activeDirection.servicesObj.wifi ? activeDirection.coach.wifi_price : 0;
      
      const coeff = activeDirection.activeTypeTicket === "adult" ? 1 : 0.5;
      const totalPrice = (activeDirection.coach[price] + linensPrice + wifiPrice) * coeff;
      const obj = {
        ...seatItem,
        numberCars: activeDirection.activeNumberCars!,
        is_adult: activeDirection.activeTypeTicket === "adult" ? true : false,
        include_children_seat: false,
        type: activeDirection.activeTypeTicket!,
        price: totalPrice,
        typeDirection: typeDirection,
        
      }
      console.log(seatItem)
      dispatch(addRemoveTicket({ticket: obj, typeDirection}));
    }
  }

  return (
    <div onClick={() => clickItemSeat(seatItem)}  
    className={`${position} ${seatItem.available ? 'seat' : 'seat-busy'}
    ${isActive ? 'seat-selected' : ''} `}>
    {seatItem.index}
    </div>
  )
}

export default SeatItem;