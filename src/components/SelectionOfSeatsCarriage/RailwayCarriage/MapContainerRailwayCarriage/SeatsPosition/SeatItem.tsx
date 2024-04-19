import { TypeRailwayCarriage } from "../../../../../shared/types/typesTrain";
import './SeatItem.css'

interface seatElProps {
  line?: string;
  type?: TypeRailwayCarriage;
  avaliable: boolean;
  index: number;  
}

interface SeatItemProps {
  position?: 'seat-static' | 'seat-passage' | 'seat-luxary' | 'sedentary';  
  seatItem: seatElProps;
  onClick?: (el: seatElProps) => void;
}

const SeatItem = ({seatItem, position = 'seat-static', onClick} : SeatItemProps) => {

  return (
    <div  
    className={`${position} ${seatItem.avaliable ? 'seat-busy' : 'seat'}`}>
    {seatItem.index}
    </div>
  )
}

export default SeatItem;