import { RailwayCarriageItemProps } from '../../RailwaysCarriage/ThirthRailwayCarriage/ThirthRailwayCarriage';
import SeatItem from '../SeatItem';
import './SeatPositionFirst.css';

const SeatPositionFirst = ({seats} :RailwayCarriageItemProps) => {
  return (
    <div className="railway__carriage_map static-map">
      <div className="first-line-luxary">{seats.map((el) => (
        <SeatItem seatItem={el} key={el.index} position='seat-luxary' />
      ))}</div>
    </div>
  )
}

export default SeatPositionFirst;