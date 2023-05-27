import { useNavigate } from "react-router";

const LogoutUI = () => {
  let navigate = useNavigate();
  const logout = () => {
    window.localStorage.removeItem("uid");
    navigate("login");
  };
  return <button onClick={logout}>Logout</button>;
};
export default LogoutUI;
