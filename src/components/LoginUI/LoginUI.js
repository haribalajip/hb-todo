import firebase from "firebase/compat/app";
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { isLoggedIn } from "../../utils/loginUtil";

const { localStorage } = window;
const uiConfig = {
  signInFlow: "popup",
  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
};
const setupSigninUI = (apiKey) => {
  var config = {
    apiKey,
    authDomain: "hb-todo-react.firebaseapp.com",
  };
  firebase.initializeApp(config);
  var ui = new firebaseui.auth.AuthUI(firebase.auth());
  return ui;
};
const FBUI = setupSigninUI(process.env.REACT_APP_FIREBASE_API_KEY);
const provider = new GoogleAuthProvider();

const LoginUI = () => {
  const navigate = useNavigate();
  const runLoginUI = async () => {
    if (!isLoggedIn()) {
      FBUI.start("#loginUI", uiConfig);
      const auth = getAuth();
      let result = await signInWithPopup(auth, provider);
      const user = result.user;
      localStorage.setItem("uid", user.uid);
      navigate("/items");
    }
  };
  return (
    <div id="loginUI">
      <button onClick={runLoginUI}> Sign in with google</button>
    </div>
  );
};

export default LoginUI;
