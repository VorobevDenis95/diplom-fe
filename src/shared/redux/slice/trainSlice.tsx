import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { TraineRoutesItemProps } from "../../types/typesRoutesBilets";
import { TicketType } from "../../types/typesTrain";

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
  item: TraineRoutesItemProps['item'] | null
  activeTypeTicket: TicketType;
  tickets: TicketProps[]
}

const initialState: trainStore = {
  item: null,
  activeTypeTicket: "adult",
  tickets: [],
}

const train = createSlice({
  name: 'train',
  initialState,
  reducers: {
    setTrain(state, action: PayloadAction<TraineRoutesItemProps['item']>) {
      state.item = action.payload;
    },
    setActiveTypeTicket(state, action: PayloadAction<TicketType>) {
        state.activeTypeTicket = action.payload;
    },
    clearTrain(state) {
      state.item = null;
    }
  },
})

export const {setTrain, setActiveTypeTicket, clearTrain} = train.actions;

export default train.reducer;