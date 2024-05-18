import { PassengerDataSeats } from "../../components/Passengers/PassengerContainer/PassengerContainer";
import { DataPaymentPassenger } from "../../pages/Payment/Payment";

// types order body request
export interface OrderDataProps {
  user: DataPaymentPassenger;
  departure: OrderDirectionProps;
  arrival?: OrderDirectionProps;
}

export interface OrderDirectionProps {
  route_direction_id: string;
  seats: OrderSeatsProps[];
}

export interface OrderSeatsProps {
  coach_id: string;
  person_info: PassengerDataSeats;
  seat_number: number;
  is_child: boolean;
  setInclude_children_seat: boolean;
}

//types order components props

export interface OrderMainProps {
  first_name: string;
  last_name: string;
}


export interface OrderStarProps {
  index: number;
  activeIndex: number;
  clickStar: (index: number) => void;
}