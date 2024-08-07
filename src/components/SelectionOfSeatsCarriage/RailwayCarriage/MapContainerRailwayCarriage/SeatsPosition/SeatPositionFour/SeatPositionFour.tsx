import { RailwayCarriageItemMapProps } from '../../MapRailwayCarriage';
import SeatItem from '../SeatItem';
import { filterSeatsArrEven, filterSeatsArrEvenOther, filterSeatsArrOdd, filterSeatsArrOddOther } from '../utils';
import './SeatPositionFour.css';

const SeatPositionFour = ({seats, typeDirection} :RailwayCarriageItemMapProps) => {
  
  return (
    <>
    <div className="railway__carriage_map four-class-map">
      <div className="second-line">{filterSeatsArrEven(seats).map((el) => (
        <SeatItem key={el.index} position='sedentary' seatItem={el} 
        typeDirection={typeDirection}/>
      ))}</div>
      <div className="first-line">{filterSeatsArrOdd(seats).map((el) => (
        <SeatItem key={el.index} position='sedentary' seatItem={el}
        typeDirection={typeDirection} />
      ))}</div>
            <div className="thirth-line">{filterSeatsArrOddOther(seats).map((el) => (
        <SeatItem key={el.index} position='sedentary' seatItem={el}
        typeDirection={typeDirection} />

      ))}</div>
            <div className="four-line">{filterSeatsArrEvenOther(seats).map((el) => (
        <SeatItem key={el.index} position='sedentary' seatItem={el}
        typeDirection={typeDirection} />
      ))}</div>
    </div>
    </>
  )
}

export default SeatPositionFour;