import firebase from "firebase/compat/app";

export const setUpFBApp = () => {
  let {
    VITE_APP_FIREBASE_API_KEY,
    VITE_MESSAGE_SENDER_ID,
    VITE_FIREBASE_APP_ID,
  } = import.meta.env;
  let config = {
    apiKey: VITE_APP_FIREBASE_API_KEY,
    authDomain: "hb-todo-react.firebaseapp.com",
    databaseURL: "https://hb-todo-react-default-rtdb.firebaseio.com",
    projectId: "hb-todo-react",
    storageBucket: "hb-todo-react.appspot.com",
    messagingSenderId: VITE_MESSAGE_SENDER_ID,
    appId: VITE_FIREBASE_APP_ID,
  };

  let app = firebase.initializeApp(config);
  window.firebaseApp = app;
};
