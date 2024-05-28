import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { fetchRoutes } from "../asyncThunks/getRouteAsynkThunk";
import { CityProps } from "../../types/types";
import { ResponseRoutes } from "../../types/typesRoutesBilets";
import { DirectionStore } from "../../types/store/directionStore";

const initialCityState: CityProps = {
  id: '',
  name: ''
}

const initialState: DirectionStore = {
  cityFrom: initialCityState,
  cityTo: initialCityState,
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
    },
    clearDirectionState(state) {
      Object.assign(state, initialState)
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

export const {setCityFrom, setCityTo, setDateStart, setDateEnd, changingCities,
  clearDirectionState
} = direction.actions;

export default direction.reducer;