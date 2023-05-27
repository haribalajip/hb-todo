import { createSlice } from "@reduxjs/toolkit";
import { getCurrentUserId } from "../utils/loginUtil";
const initialState = [];
const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    setItems(state, { payload }) {
      state = [...payload];
      return state;
    },

    addItem(state, { payload }) {
      state.push(payload);
      return state;
    },

    deleteItem(state, { payload }) {
      state = state.filter((item) => {
        return item.id !== payload;
      });
      return state;
    },
  },
});

export const fetchItems = (dispatch) => {
  return async () => {
    try {
      let response = await fetch(
        "https://632fc772591935f3c8852c54.mockapi.io/tasks"
      );
      let tasks = await response.json();
      tasks = tasks.filter((task) => task.uid === getCurrentUserId());
      dispatch(itemsSliceActions.setItems(tasks));
    } catch (e) {
      alert("Could not fetch tasks. Try again.");
    }
  };
};

export const deleteItemReq = (dispatch, id) => {
  return async () => {
    try {
      let response = await fetch(
        `https://632fc772591935f3c8852c54.mockapi.io/tasks/${id}`,
        { method: "DELETE" }
      );
      if (response.ok) {
        dispatch(itemsSliceActions.deleteItem(id));
      }
    } catch (e) {
      alert("Could not fetch tasks. Try again.");
    }
  };
};

export const addItemReq = (dispatch, item) => {
  return async () => {
    try {
      let response = await fetch(
        `https://632fc772591935f3c8852c54.mockapi.io/tasks`,
        {
          method: "POST",
          body: JSON.stringify(item),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      let itemFromServer = await response.json();
      dispatch(itemsSliceActions.addItem(itemFromServer));
    } catch (e) {
      alert("Could not fetch tasks. Try again.");
    }
  };
};

export const itemsSliceActions = itemsSlice.actions;
export const itemsSliceReducer = itemsSlice.reducer;
