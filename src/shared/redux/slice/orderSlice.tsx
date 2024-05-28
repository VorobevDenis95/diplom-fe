import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { OrderDataProps } from "../../types/typesOrder";
import { OrderStore } from "../../types/store/orderStore";

const initialState : OrderStore = {
  order: null,
}

const order = createSlice({
  name: 'order',
  initialState,
  reducers: {
    setOrder(state, action: PayloadAction<OrderDataProps>) {
      state.order = action.payload;
    },
    clearOrderState(state) {
      Object.assign(state, initialState);
    }
  }
})

export const { setOrder, clearOrderState } = order.actions;
export default order.reducer;