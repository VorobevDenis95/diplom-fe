import { RailwayCarriageItemMapProps } from '../../MapRailwayCarriage';
import SeatItem from '../SeatItem';
import { filterSeatsArrEven, filterSeatsArrOdd } from '../utils';

const SeatPositionSecond = ({seats, typeDirection} :RailwayCarriageItemMapProps) => {
  return (
    <div className="railway__carriage_map static-map">
      <div className="first-line">{filterSeatsArrOdd(seats).map((el) => (
        <SeatItem key={el.index} seatItem={el}
        typeDirection={typeDirection} />
      ))}</div>
      <div className="second-line">{filterSeatsArrEven(seats).map((el) => (
        <SeatItem key={el.index} seatItem={el}
        typeDirection={typeDirection} />
      ))}</div>
    </div>

  )
}

export default SeatPositionSecond;