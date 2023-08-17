import { configureStore } from "@reduxjs/toolkit";
import { itemsSliceReducer } from "./itemsSlice";
export const store = configureStore({
  reducer: { todoListItems: itemsSliceReducer },
});
