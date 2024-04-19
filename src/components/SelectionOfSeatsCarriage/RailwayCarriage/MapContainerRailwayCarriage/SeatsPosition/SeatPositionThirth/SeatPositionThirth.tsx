import { RailwayCarriageItemProps } from "../../RailwaysCarriage/ThirthRailwayCarriage/ThirthRailwayCarriage";
import SeatItem from "../SeatItem";
import { filterSeatsArrEven, filterSeatsArrOdd, filterSeatsArrOther } from "../utils";
import './SeatPositionThirth.css';


const SeatPositionThirth = ({seats} :RailwayCarriageItemProps) => {
  return (
    <>
      <div className="first-line">{filterSeatsArrEven(seats).map((el) => (
        <SeatItem key={el.index} seatItem={el} />
      ))}</div>
    <div className="second-line">{filterSeatsArrOdd(seats).map((el) => (
      <SeatItem key={el.index} seatItem={el} />
    ))}</div>
    <div className="thirth-line">{filterSeatsArrOther(seats).map((el) => (
      <SeatItem key={el.index} seatItem={el} position="seat-passage" />
    ))}</div>
    </>

  )
}

export default SeatPositionThirth;