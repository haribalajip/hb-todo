import firebase from "firebase/compat/app";
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";
import { useEffect } from "react";
const { location, localStorage } = window;
const setupSigninUI = (apiKey) => {
  var config = {
    apiKey,
    authDomain: "hb-todo-react.firebaseapp.com",
  };
  firebase.initializeApp(config);
  var uiConfig = {
    callbacks: {
      signInSuccessWithAuthResult: (authResult, redirectUrl) => {
        console.log({ authResult });
        location.pathname = "items";
        localStorage.setItem("uid", authResult.user.uid);
      },
    },
    signInFlow: "popup",

    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
  };

  var ui = new firebaseui.auth.AuthUI(firebase.auth());
  ui.start("#loginUI", uiConfig);
};

const LoginUI = () => {
  let loggedIn = localStorage.getItem("uid");
  debugger;
  useEffect(() => {
    if (!loggedIn) {
      setupSigninUI(process.env.REACT_APP_FIREBASE_API_KEY);
    }
  }, [loggedIn]);
  return <div id="loginUI"></div>;
};

export default LoginUI;
