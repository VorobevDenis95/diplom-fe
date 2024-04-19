import { RailwayCarriageItemProps } from '../../RailwaysCarriage/ThirthRailwayCarriage/ThirthRailwayCarriage';
import SeatItem from '../SeatItem';
import { filterSeatsArrEven, filterSeatsArrEvenOther, filterSeatsArrOdd, filterSeatsArrOddOther } from '../utils';
import './SeatPositionFour.css';

const SeatPositionFour = ({seats} :RailwayCarriageItemProps) => {
  
  return (
    <>
      <div className="second-line">{filterSeatsArrEven(seats).map((el) => (
        <SeatItem key={el.index} position='sedentary' seatItem={el} />
      ))}</div>
      <div className="first-line">{filterSeatsArrOdd(seats).map((el) => (
        <SeatItem key={el.index} position='sedentary' seatItem={el} />
      ))}</div>
            <div className="thirth-line">{filterSeatsArrOddOther(seats).map((el) => (
        <SeatItem key={el.index} position='sedentary' seatItem={el} />

      ))}</div>
            <div className="four-line">{filterSeatsArrEvenOther(seats).map((el) => (
        <SeatItem key={el.index} position='sedentary' seatItem={el} />
      ))}</div>
    </>
  )
}

export default SeatPositionFour;