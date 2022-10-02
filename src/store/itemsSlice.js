import { createSlice } from "@reduxjs/toolkit";
const initialState = [];
const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers:{
    setItems(state, { payload }) {
      state = [...payload]
      return state;
    },

    addItem(state, { payload }) {
      state.push(payload);
      return state;
    },

    deleteAll(state) {
      return [];
    },

    deleteItem(state, { payload }) {
      state = state.filter(item =>{
        return item.id != payload;
      });
      return state;
    }
  }
});

export const fetchItems = (dispatch) => {
  return async() => {
    try {
      let response = await fetch('https://632fc772591935f3c8852c54.mockapi.io/tasks');
      let tasks = await response.json();
      dispatch(itemsSliceActions.setItems(tasks));
    } catch(e) {
      alert('Could not fetch tasks. Try again.');
    }
  }
};

export const deleteItemReq = (dispatch, id) => {
  return async() => {
    try {
      let response = await fetch(`https://632fc772591935f3c8852c54.mockapi.io/tasks/${id}`, { method: 'DELETE' });
      if (response.ok) {
        dispatch(itemsSliceActions.deleteItem(id));
      }
    } catch(e) {
      alert('Could not fetch tasks. Try again.');
    }
  }
};


export const itemsSliceActions = itemsSlice.actions;
export const itemsSliceReducer = itemsSlice.reducer;