import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { fetchRoutes } from "../asyncThunks/getRouteAsynkThunk";
import { CityProps } from "../../types/types";
import { ItemRoutes, ResponseRoutes } from "../../types/typesRoutesBilets";

// interface DirectionSliceProps {
//   cityFrom: CityProps,
//   cityTo: CityProps,
//   dateStart: string,
//   dateTo: string,
// }

interface DirectionStore {
  cityFrom: CityProps;
  cityTo: CityProps;
  items: ItemRoutes[];
  totalCount: number,
  dateStart: string;
  dateTo: string;
  limit: number;
  ofset: number;
  error: string;
  loading: boolean;
  status: string;
}

const initialState: DirectionStore = {
  cityFrom: {
    id: '',
    name: ''
  },
  cityTo: {
    id: '',
    name: ''
  },
  items: [],
  totalCount: 0,
  limit: 5,
  ofset: 0,
  dateStart: '',
  dateTo: '',
  error: '',
  loading: false,
  status: '',
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
    
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRoutes.pending, (state) => {
      state.loading = true;
      state.items = [];
      state.status = 'loading';
      state.error = '';
    }),
    builder.addCase(fetchRoutes.fulfilled, (state, action: PayloadAction<ResponseRoutes>) => {
      state.loading = false;
      
      state.status = 'succes';
      state.items = action.payload.items;
      state.totalCount = action.payload.total_count;
    }),
    builder.addCase(fetchRoutes.rejected, (state, action) => {
      state.loading = false;
      
      state.status = 'failed'
      state.error = action.payload as string;
    })
  },
})

export const {setCityFrom, setCityTo, setDateStart, setDateEnd, changingCities} = direction.actions;

export default direction.reducer;