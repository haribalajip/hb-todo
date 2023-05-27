import { Outlet, useNavigate } from "react-router";
import { useEffect } from "react";
import { isLoggedIn } from "../utils/loginUtil";
import LogoutUI from "../components/LogoutUI/LogoutUI";

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
      <h1>To do</h1>
      {userLoggedIn && <LogoutUI></LogoutUI>}
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
