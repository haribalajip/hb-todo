import { createSlice } from "@reduxjs/toolkit";
import { getCurrentUserId } from "../utils/loginUtil";
import {
  getFirestore,
  doc,
  getDocs,
  addDoc,
  collection,
  deleteDoc,
} from "firebase/firestore";

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
      const db = getFirestore(window.firebaseApp);
      let taskDocs = await getDocs(
        collection(db, "users", getCurrentUserId(), "tasks")
      );
      let tasks = [];
      taskDocs.forEach((taskDoc) =>
        tasks.push({ id: taskDoc.id, ...taskDoc.data() })
      );
      dispatch(itemsSliceActions.setItems(tasks));
    } catch (e) {
      console.log(e);
      alert("Could not fetch tasks. Try again.");
    }
  };
};

export const deleteItemReq = (dispatch, id) => {
  return async () => {
    try {
      const db = getFirestore(window.firebaseApp);
      await deleteDoc(doc(db, "users", getCurrentUserId(), "tasks", id));
      dispatch(itemsSliceActions.deleteItem(id));
    } catch (e) {
      alert("Could not fetch tasks. Try again.");
    }
  };
};

export const addItemReq = (dispatch, item) => {
  return async () => {
    try {
      const db = getFirestore(window.firebaseApp);

      const taskDoc = await addDoc(
        collection(db, "users", getCurrentUserId(), "tasks"),
        item
      );

      dispatch(itemsSliceActions.addItem({ id: taskDoc.id, ...item }));
    } catch (e) {
      console.log(e);
      alert("Could not fetch tasks. Try again.");
    }
  };
};

export const itemsSliceActions = itemsSlice.actions;
export const itemsSliceReducer = itemsSlice.reducer;
