import { RailwayCarriageItemMapProps } from '../../MapRailwayCarriage';
import SeatItem from '../SeatItem';
import './SeatPositionFirst.css';

const SeatPositionFirst = ({seats, typeDirection} :RailwayCarriageItemMapProps) => {
  return (
    <div className="railway__carriage_map static-map">
      <div className="first-line-luxary">{seats.map((el) => (
        <SeatItem seatItem={el} key={el.index} position='seat-luxary' 
        typeDirection={typeDirection}/>
      ))}</div>
    </div>
  )
}

export default SeatPositionFirst;