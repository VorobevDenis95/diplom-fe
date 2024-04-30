import { RailwayCarriageItemMapProps } from "../../MapRailwayCarriage";
import SeatItem from "../SeatItem";
import { filterSeatsArrEven, filterSeatsArrOdd, filterSeatsArrOther } from "../utils";
import './SeatPositionThirth.css';


const SeatPositionThirth = ({seats, typeDirection} :RailwayCarriageItemMapProps) => {
  return (
    <div className="railway__carriage_map static-map">
      <div className="first-line">{filterSeatsArrEven(seats).map((el) => (
        <SeatItem key={el.index} seatItem={el}
        typeDirection={typeDirection} />
      ))}</div>
    <div className="second-line">{filterSeatsArrOdd(seats).map((el) => (
      <SeatItem key={el.index} seatItem={el}
      typeDirection={typeDirection} />
    ))}</div>
    <div className="thirth-line">{filterSeatsArrOther(seats).map((el) => (
      <SeatItem key={el.index} seatItem={el} position="seat-passage"
      typeDirection={typeDirection} />
    ))}</div>
    </div>

  )
}

export default SeatPositionThirth;