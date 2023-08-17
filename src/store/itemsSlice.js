import { createSlice } from "@reduxjs/toolkit";
import { getCurrentUserId } from "../utils/loginUtil";
import {
  getFirestore,
  doc,
  getDocs,
  updateDoc,
  addDoc,
  collection,
  deleteDoc,
} from "firebase/firestore";

const initialState = {
  isListLoading: true,
  items: [],
};
const itemsSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    setItems(state, { payload }) {
      state.items = [...payload];
      return state;
    },

    addItem(state, { payload }) {
      state.items.push(payload);
      return state;
    },

    deleteItem(state, { payload }) {
      state.items = state.items.filter((item) => {
        return item.id !== payload;
      });
      return state;
    },

    updateItem(state, { payload }) {
      state.items = state.items.map((item) => {
        if (item.id === payload.id) {
          return payload;
        }
        return item;
      });
      return state;
    },

    toggleListLoading(state, { payload }) {
      state.isListLoading = payload;
      return state;
    },
  },
});

export const fetchItems = (dispatch) => {
  return async () => {
    try {
      const db = getFirestore(window.firebaseApp);
      dispatch(itemsSliceActions.toggleListLoading(true));
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
    } finally {
      dispatch(itemsSliceActions.toggleListLoading(false));
    }
  };
};

export const deleteItemReq = ({ dispatch, id, setIsLoading }) => {
  return async () => {
    try {
      setIsLoading(true);
      const db = getFirestore(window.firebaseApp);
      await deleteDoc(doc(db, "users", getCurrentUserId(), "tasks", id));
      dispatch(itemsSliceActions.deleteItem(id));
    } catch (e) {
      alert("Could not delete tasks. Try again.");
    } finally {
      setIsLoading(false);
    }
  };
};

export const addItemReq = (dispatch, item) => {
  return async () => {
    try {
      dispatch(itemsSliceActions.toggleListLoading(true));
      const db = getFirestore(window.firebaseApp);
      const taskDoc = await addDoc(
        collection(db, "users", getCurrentUserId(), "tasks"),
        item
      );

      dispatch(itemsSliceActions.addItem({ id: taskDoc.id, ...item }));
    } catch (e) {
      console.log(e);
      alert("Could not add tasks. Try again.");
    } finally {
      dispatch(itemsSliceActions.toggleListLoading(false));
    }
  };
};

export const markDoneReq = ({ dispatch, item, setIsLoading }) => {
  return async () => {
    try {
      setIsLoading(true);
      const db = getFirestore(window.firebaseApp);
      const docRef = doc(db, "users", getCurrentUserId(), "tasks", item.id);
      await updateDoc(docRef, { isCompleted: true });
      dispatch(itemsSliceActions.updateItem({ ...item, isCompleted: true }));
    } catch (e) {
      alert("Could not update the task. Try again.");
    } finally {
      setIsLoading(false);
    }
  };
};
export const itemsSliceActions = itemsSlice.actions;
export const itemsSliceReducer = itemsSlice.reducer;
