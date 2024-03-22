import {configureStore} from '@reduxjs/toolkit';
import directionReducer from './slice/directionSlice';

export const store = configureStore({
  reducer: {
    direction: directionReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch