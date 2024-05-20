import {configureStore} from '@reduxjs/toolkit';
import directionReducer from './slice/directionSlice';
import trainReducer from './slice/trainSlice';
import orderReducer from './slice/orderSlice';

export const store = configureStore({
  reducer: {
    direction: directionReducer,
    train: trainReducer,
    order: orderReducer
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch