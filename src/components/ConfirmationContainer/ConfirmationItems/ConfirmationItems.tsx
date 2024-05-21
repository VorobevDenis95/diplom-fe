import { PassengerDataSeats } from "../../Passengers/PassengerContainer/PassengerContainer"
import ConfirmationItemPassenger from "../ConfirmationItemPassenger/ConfirmationItemPassenger"
import './ConfirmationItems.css';

interface ConfirmationItemsProps {
  list: PassengerDataSeats[]
}

const ConfirmationItems = ({list}: ConfirmationItemsProps) => {
  return (
    <div className="confirmation__items">
      {list.map((item) => (
        <ConfirmationItemPassenger item={item} key={item.document_data} />
      ))}
    </div>
  )
}

export default ConfirmationItems