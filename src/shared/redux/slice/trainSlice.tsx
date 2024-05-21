import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { TraineRoutesItemProps } from "../../types/typesRoutesBilets";
import { TicketType, TypeRailwayCarriage } from "../../types/typesTrain";
import { CoachSeatsRequestProps } from "../../types/typesSeats";
import { PassengerDataSeats } from "../../../components/Passengers/PassengerContainer/PassengerContainer";
import { DataPaymentPassenger } from "../../../pages/Payment/Payment";

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

const initialState: TrainStore = {
  item: null,
  coach: null,
  departure: {
    activeTypeTicket: "adult",
    totalPrice: 0,
    servicesObj: {
      conditional: false,
      wifi: false,
      linens: false,
      inCludesLinens: false,
    }
  },
  arrival: {
    activeTypeTicket: "adult",
    totalPrice: 0,
    servicesObj: {
      conditional: false,
      wifi: false,
      linens: false,
      inCludesLinens: false,
    }
  },
  activeTypeTicket: "adult",
  activeTypeRailwayCarriage: null,
  activeNumberCars: null,
  tickets: [],
  totalPrice: 0,
  servicesObj: {
    conditional: false,
    wifi: false,
    linens: false,
    inCludesLinens: false,
  },
  passengers: [],
  user: null,
}

const train = createSlice({
  name: 'train',
  initialState,
  reducers: {
    setTrain(state, action: PayloadAction<TraineRoutesItemProps['item']>) {
      state.item = action.payload;
    },
    // setIdTrain(state, action: PayloadAction<{ direction_id: string, typeDirection: 'arrival' | 'departure' }>) {
    //   state[action.payload.typeDirection].id = action.payload.direction_id;
    // },
    clearTrain(state) {
      state.item = null;
    },
    clearActiveTypeRailwayCarriage(state, action: PayloadAction<'arrival' | 'departure'>) {
      state[action.payload].activeTypeRailwayCarriage = null;
    },
    setActiveTypeTicket(state, action: PayloadAction<{ ticketType: TicketType, typeDirection: 'arrival' | 'departure' }>) {
      state[action.payload.typeDirection].activeTypeTicket = action.payload.ticketType;
    },
    setActiveTypeRailwayCarriage(state, action: PayloadAction<{ type: TypeRailwayCarriage, typeDirection: 'arrival' | 'departure' }>) {
      state[action.payload.typeDirection].activeTypeRailwayCarriage = state[action.payload.typeDirection].activeTypeRailwayCarriage === action.payload.type
        ? null
        : action.payload.type
    },
    setServicesObj(state, action: PayloadAction<{ key: keyof TrainStore['servicesObj'], value: boolean, typeDirection: 'arrival' | 'departure' }>) {
      state[action.payload.typeDirection].servicesObj[action.payload.key] = action.payload.value;
    },
    resetServicesObj(state) {
      state.servicesObj = {
        conditional: false,
        wifi: false,
        linens: false,
        inCludesLinens: false,
      }
    },
    addRemoveTicket(state, action: PayloadAction<{ ticket: TicketProps, typeDirection: 'arrival' | 'departure' }>) {
      const findEl = state.tickets.findIndex(el => el.index === action.payload.ticket.index && el.numberCars === state[action.payload.typeDirection].activeNumberCars
        && el.typeDirection === action.payload.typeDirection
      );
      // console.log(findEl)
      if (findEl === -1) {
        state.tickets.push(action.payload.ticket);
      } else {
        state.tickets = state.tickets.slice(0, findEl).concat(state.tickets.slice(findEl + 1));
      }
      state[action.payload.typeDirection].totalPrice = state.tickets.reduce((acc, item) => {
        const el = item.typeDirection === action.payload.typeDirection ? item.price : 0

        return acc + el;
      }, 0)
    },
    setActiveNumberCars(state, action: PayloadAction<{ numberCars: string | null, typeDirection: 'arrival' | 'departure' }>) {
      state[action.payload.typeDirection].activeNumberCars = action.payload.numberCars;
    },
    setCoach(state, action: PayloadAction<{ coach: CoachSeatsRequestProps, typeDirection: 'arrival' | 'departure' }>) {
      state[action.payload.typeDirection].coach = action.payload.coach;
    },
    clearCoach(state, action: PayloadAction<'arrival' | 'departure'>) {
      state[action.payload].coach = null;
    },
    setInclude_children_seat(state, action: PayloadAction<number>) {
      state.tickets[action.payload].include_children_seat = !state.tickets[action.payload].include_children_seat
    },
    addPassengers(state, action: PayloadAction<{ data: PassengerDataSeats, index: number }>) {
      console.log(action.payload.index)
      const findEl = state.passengers.findIndex((el) => el.index === action.payload.index)
      console.log(findEl)
      if (findEl === -1) {
        state.passengers.push({
          ...action.payload.data,
          index: action.payload.index
        })
      } else {
        state.passengers[findEl] = action.payload.data;
      }
    },
    removePassengers(state, action: PayloadAction<{ data: PassengerDataSeats, index: number }>) {
      const findEl = state.passengers.findIndex((el) => el.index === action.payload.index)

      if (findEl !== -1)
        state.passengers = state.passengers.slice(0, findEl).concat(state.passengers.slice(findEl + 1));
    },
    setUserTrain(state, action: PayloadAction<DataPaymentPassenger>) {
      state.user = action.payload;
    },
    clearTrainState(state) {
      Object.assign(state, initialState);
    }
  },
})

export const { setTrain, clearTrain, setActiveTypeTicket,
  setActiveTypeRailwayCarriage, clearActiveTypeRailwayCarriage,
  setServicesObj, resetServicesObj, addRemoveTicket, setActiveNumberCars,
  setCoach, clearCoach, setInclude_children_seat,
  addPassengers, removePassengers, clearTrainState,
  setUserTrain, 
} = train.actions;

export default train.reducer;

