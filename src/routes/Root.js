import { Outlet, useNavigate } from "react-router";
import { useEffect } from "react";
import { isLoggedIn } from "../utils/loginUtil";
import LogoutUI from "../components/LogoutUI/LogoutUI";
import { setUpFBApp } from "../utils/generalUtil";
import TopBar from "../components/TopBar/TopBar";
setUpFBApp();

const Root = () => {
  let navigate = useNavigate();
  let userLoggedIn = isLoggedIn();
  useEffect(() => {
    if (userLoggedIn) {
      navigate("items");
    } else {
      navigate("login");
    }
  }, [userLoggedIn, navigate]);
  return (
    <div>
      <TopBar userLoggedIn={userLoggedIn} />
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
