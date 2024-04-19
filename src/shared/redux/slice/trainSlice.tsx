import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { TraineRoutesItemProps } from "../../types/typesRoutesBilets";
import { TicketType, TypeRailwayCarriage } from "../../types/typesTrain";

// interface DirectionSliceProps {
//   cityFrom: CityProps,
//   cityTo: CityProps,
//   dateStart: string,
//   dateTo: string,
// }

export interface TicketProps {
  type: TicketType,
  number: number;
}

export interface trainStore {
  item: TraineRoutesItemProps['item'] | null;
  activeTypeTicket: TicketType;
  activeTypeRailwayCarriage: TypeRailwayCarriage | null;
  tickets: TicketProps[];
}

const initialState: trainStore = {
  item: null,
  activeTypeTicket: "adult",
  activeTypeRailwayCarriage: null,
  tickets: [],
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
    setActiveTypeTicket(state, action: PayloadAction<TicketType>) {
        state.activeTypeTicket = action.payload;
    },
    setActiveTypeRailwayCarriage(state, action: PayloadAction<TypeRailwayCarriage>) {
      state.activeTypeRailwayCarriage = action.payload;
    }
  },
})

export const {setTrain, clearTrain, setActiveTypeTicket, setActiveTypeRailwayCarriage} = train.actions;

export default train.reducer;