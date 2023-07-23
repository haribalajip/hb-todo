import firebase from "firebase/compat/app";

export const setUpFBApp = () => {
  let {
    REACT_APP_FIREBASE_API_KEY,
    REACT_MESSAGE_SENDER_ID,
    REACT_FIREBASE_APP_ID,
  } = process.env;
  let config = {
    apiKey: REACT_APP_FIREBASE_API_KEY,
    authDomain: "hb-todo-react.firebaseapp.com",
    databaseURL: "https://hb-todo-react-default-rtdb.firebaseio.com",
    projectId: "hb-todo-react",
    storageBucket: "hb-todo-react.appspot.com",
    messagingSenderId: REACT_MESSAGE_SENDER_ID,
    appId: REACT_FIREBASE_APP_ID,
  };

  let app = firebase.initializeApp(config);
  window.firebaseApp = app;
};
