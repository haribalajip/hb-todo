import { createSlice } from "@reduxjs/toolkit";
const initialState = [];
const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers:{
    getItems(state, { payload }) {
      return state;
    },

    addItem(state, { payload }) {
      state.push(payload);
      return state;
    }
  }
});

export const itemsSliceActions = itemsSlice.actions;
export const itemsSliceReducer = itemsSlice.reducer;