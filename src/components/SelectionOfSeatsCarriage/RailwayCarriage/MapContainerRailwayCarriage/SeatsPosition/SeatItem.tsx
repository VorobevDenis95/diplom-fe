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
  avaliable: boolean;
  index: number;
}

export type SeatPosition = 'seat-static' | 'seat-passage' | 'seat-luxary' | 'sedentary'; 

interface SeatItemProps {
  position?: SeatPosition; 
  seatItem: SeatsProps;
  onClick?: (el: seatElProps) => void;
}

const SeatItem = ({seatItem, position = 'seat-static'} : SeatItemProps) => {
  const dispatch = useAppDispatch();
  const {coach, servicesObj} = useAppSelector(state => state.train);
  const [isActive, setActive] = useState(false);
  const {tickets, activeTypeTicket, activeNumberCars} = useAppSelector(state => state.train);

  useEffect(() => {
    console.log(position)
  }, [])

useEffect(() => {
  const find = tickets.find((el) => el.index === seatItem.index && el.numberCars === activeNumberCars);
  find ? setActive(true) : setActive(false);
}, [tickets, activeNumberCars, seatItem.index]);
  
  const clickItemSeat = (seatItem: seatElProps) => {
    if (activeTypeTicket === "childWithoutSeat") {
      const index = tickets.findIndex((el) => (el.is_adult
        && el.index === seatItem.index))
      if (index >= 0) dispatch(setInclude_children_seat(index))
        return
    }
    if (activeNumberCars && coach && position) {
      const price = getPrice(position, seatItem.index);
      const linensPrice =  servicesObj.inCludesLinens || servicesObj.linens ? coach.linens_price : 0; 
      const wifiPrice = servicesObj.wifi ? coach.wifi_price : 0;
      
      const coeff = activeTypeTicket === "adult" ? 1 : 0.5;
      const totalPrice = (coach[price] + linensPrice + wifiPrice) * coeff;
      const obj = {
        ...seatItem,
        numberCars: activeNumberCars!,
        is_adult: activeTypeTicket === "adult" ? true : false,
        include_children_seat: false,
        type: activeTypeTicket,
        price: totalPrice,
      }
      console.log(obj)
      dispatch(addRemoveTicket(obj));
    }
  }

  return (
    <div onClick={() => clickItemSeat(seatItem)}  
    className={`${position} ${seatItem.avaliable ? 'seat-busy' : 'seat'}
    ${isActive ? 'seat-selected' : ''} `}>
    {seatItem.index}
    </div>
  )
}

export default SeatItem;