import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { TraineRoutesItemProps } from "../../types/typesRoutesBilets";
import { TicketType, TypeRailwayCarriage } from "../../types/typesTrain";
import { CoachSeatsRequestProps } from "../../types/typesSeats";

export interface TicketProps {
  type: TicketType;
  // number: number;
  avaliable: boolean;
  index: number;
  numberCars: string;
  price: number;
  is_adult: boolean;
  include_children_seat: boolean;
  // is_child?: boolean;
}

export interface DirectionTrainStore {
  item: TraineRoutesItemProps['item'] | null;
  activeTypeTicket: TicketType;
  activeTypeRailwayCarriage: TypeRailwayCarriage | null;
  activeNumberCars: string | null;
  totalPrice: number;
  servicesObj: {
    conditional?: boolean,
    wifi?: boolean,
    linens?: boolean,
    inCludesLinens?: boolean,
  } 
} 

export interface TrainStore {
  item: TraineRoutesItemProps['item'] | null;
  coach: null | CoachSeatsRequestProps;
  departure: [],
  arrival: [],
  activeTypeTicket: TicketType;
  activeTypeRailwayCarriage: TypeRailwayCarriage | null;
  activeNumberCars: string | null;
  tickets: TicketProps[];
  totalPrice: number;
  servicesObj: {
    conditional?: boolean,
    wifi?: boolean,
    linens?: boolean,
    inCludesLinens?: boolean,
  } 
}

const initialState: TrainStore = {
  item: null,
  coach: null,
  departure: [],
  arrival: [],
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
  }
}

const train = createSlice({
  name: 'train',
  initialState,
  reducers: {
    setTrain(state, action: PayloadAction<TraineRoutesItemProps['item']>) {
      state.item = action.payload;
    },
    clearTrain(state) {
      state.item = null;
    },
    clearActiveTypeRailwayCarriage(state) {
      state.activeTypeRailwayCarriage = null;
    },
    setActiveTypeTicket(state, action: PayloadAction<TicketType>) {
        state.activeTypeTicket = action.payload;
    },
    setActiveTypeRailwayCarriage(state, action: PayloadAction<TypeRailwayCarriage>) {
      state.activeTypeRailwayCarriage = action.payload;
    },
    setServicesObj(state, action: PayloadAction<{ key: keyof TrainStore['servicesObj'], value: boolean }>) {
      state.servicesObj[action.payload.key] = action.payload.value;
    },
    resetServicesObj(state) {
      state.servicesObj = {
        conditional: false,
        wifi: false,
        linens: false,
      }
    },
    addRemoveTicket(state, action: PayloadAction<TicketProps>) {
      const findEl = state.tickets.findIndex(el => el.index === action.payload.index);
      console.log(findEl)
      if (findEl === -1) {
        state.tickets.push(action.payload);
      } else {
        state.tickets = state.tickets.slice(0, findEl).concat(state.tickets.slice(findEl + 1));
      }
      state.totalPrice = state.tickets.reduce((acc, item) => {
        return acc + item.price;
      }, 0)
    },
    setActiveNumberCars(state, action: PayloadAction<string | null>) {
      state.activeNumberCars = action.payload;
    },
    setCoach(state, action: PayloadAction<CoachSeatsRequestProps>) {
      state.coach = action.payload;
    },
    clearCoach(state) {
      state.coach = null;
    },
    setInclude_children_seat(state, action: PayloadAction<number>) {
      console.log(action.payload)
      console.log(state.tickets[action.payload].include_children_seat)
      state.tickets[action.payload].include_children_seat = !state.tickets[action.payload].include_children_seat
      console.log(state.tickets[action.payload].include_children_seat)
      
    },
    setServices(state, action) {
      // state.servicesObj = {
      //   ...state.servicesObj,
      //   action.payload,
      // }
    }

  },
})

export const {setTrain, clearTrain, setActiveTypeTicket, 
  setActiveTypeRailwayCarriage, clearActiveTypeRailwayCarriage,
  setServicesObj, resetServicesObj, addRemoveTicket, setActiveNumberCars,
  setCoach, clearCoach, setServices, setInclude_children_seat
} = train.actions;

export default train.reducer;