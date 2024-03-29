import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { CityProps } from "../../types/types";

// interface DirectionSliceProps {
//   cityFrom: CityProps,
//   cityTo: CityProps,
//   dateStart: string,
//   dateTo: string,
// }

const initialState = {
  cityFrom: {
    id: '',
    name: ''
  },
  cityTo: {
    id: '',
    name: ''
  },
  dateStart: '',
  dateTo: ''
}

const direction = createSlice({
  name: 'direction',
  initialState,
  reducers: {
    setCityFrom(state, action: PayloadAction<CityProps>) {
      state.cityFrom.id = action.payload._id!;
      state.cityFrom.name = action.payload.name;
    },
    setCityTo(state, action: PayloadAction<CityProps>) {
      state.cityTo.id = action.payload._id!;
      state.cityTo.name = action.payload.name;
    },
    setDateStart(state, action: PayloadAction<string>) {
      state.dateStart = action.payload;
    },
    setDateEnd(state, action: PayloadAction<string>) {
      state.dateTo = action.payload;
    },
    changingCities(state) {
      const from = {...state.cityFrom};
      const to = {...state.cityTo};
      state.cityFrom = to;
      state.cityTo = from;
    }
  }
})

export const {setCityFrom, setCityTo, setDateStart, setDateEnd, changingCities} = direction.actions;

export default direction.reducer;