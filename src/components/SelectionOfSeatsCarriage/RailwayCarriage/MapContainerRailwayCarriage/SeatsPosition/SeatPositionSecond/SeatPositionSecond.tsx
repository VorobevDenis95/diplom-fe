import { RailwayCarriageItemProps } from '../../RailwaysCarriage/ThirthRailwayCarriage/ThirthRailwayCarriage';
import SeatItem from '../SeatItem';
import { filterSeatsArrEven, filterSeatsArrOdd } from '../utils';
import './SeatPositionSecond.css';

const SeatPositionSecond = ({seats} :RailwayCarriageItemProps) => {
  return (
    <>
    <div className="first-line">{filterSeatsArrOdd(seats).map((el) => (
      <SeatItem key={el.index} seatItem={el} />
    ))}</div>
    <div className="second-line">{filterSeatsArrEven(seats).map((el) => (
      <SeatItem key={el.index} seatItem={el} />
    ))}</div>
    </>

  )
}

export default SeatPositionSecond;