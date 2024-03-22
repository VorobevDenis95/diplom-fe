import { createSlice } from "@reduxjs/toolkit"
import { CityProps } from "../../types/types";

interface DirectionSliceProps {
  cityFrom: CityProps,
  cityTo: CityProps,
  dateStart: string,
  dateTo: string,
}

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
    
  }
})

export default direction.reducer;