import { PassengerDataSeats } from "../../../components/Passengers/PassengerContainer/PassengerContainer";
import { DataPaymentPassenger } from "../../../pages/Payment/Payment";
import { TraineRoutesItemProps } from "../typesRoutesBilets";
import { CoachSeatsRequestProps } from "../typesSeats";
import { TicketType, TypeRailwayCarriage } from "../typesTrain";

export interface TicketProps {
  type: TicketType;
  route_direction_id: string;
  coach_id: string;
  available: boolean;
  index: number;
  numberCars: string;
  typeDirection: 'departure' | 'arrival';
  price: number;
  is_adult: boolean;
  include_children_seat: boolean;
}

export interface DirectionTrainStore {
  item?: TraineRoutesItemProps['item'] | null;
  coach?: null | CoachSeatsRequestProps;
  activeTypeTicket?: TicketType;
  activeTypeRailwayCarriage?: TypeRailwayCarriage | null;
  activeNumberCars?: string | null;
  totalPrice?: number;
  servicesObj: {
    conditional: boolean,
    wifi: boolean,
    linens: boolean,
    inCludesLinens: boolean,
  }
}

export interface TrainStore {
  item: TraineRoutesItemProps['item'] | null;
  coach: null | CoachSeatsRequestProps;
  departure: DirectionTrainStore,
  arrival: DirectionTrainStore,
  activeTypeTicket: TicketType;
  activeTypeRailwayCarriage: TypeRailwayCarriage | null;
  activeNumberCars: string | null;
  tickets: TicketProps[];
  totalPrice: number;
  servicesObj: {
    conditional: boolean,
    wifi: boolean,
    linens: boolean,
    inCludesLinens: boolean,
  };
  passengers: PassengerDataSeats[];
  user: DataPaymentPassenger | null;
}