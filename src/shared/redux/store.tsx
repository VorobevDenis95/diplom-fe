import {configureStore} from '@reduxjs/toolkit';
import directionReducer from './slice/directionSlice';
import trainReducer from './slice/trainSlice';

export const store = configureStore({
  reducer: {
    direction: directionReducer,
    train: trainReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch