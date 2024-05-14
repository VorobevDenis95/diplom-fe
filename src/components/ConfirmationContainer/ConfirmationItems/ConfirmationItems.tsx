import { PassengerDataSeats } from "../../Passengers/PassengerContainer/PassengerContainer"
import ConfirmationItemPassenger from "../ConfirmationItemPassenger/ConfirmationItemPassenger"

interface ConfirmationItemsProps {
  list: PassengerDataSeats[]
}

const ConfirmationItems = ({list}: ConfirmationItemsProps) => {
  return (
    <>
      {list.map((item) => (
        <ConfirmationItemPassenger item={item} key={item.document_data} />
      ))}
    </>
  )
}

export default ConfirmationItems