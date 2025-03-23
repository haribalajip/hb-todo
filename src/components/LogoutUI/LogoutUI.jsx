import { Button } from "@radix-ui/themes";
import { useNavigate } from "react-router";
const LogoutUI = () => {
  let navigate = useNavigate();
  const logout = () => {
    window.localStorage.removeItem("uid");
    navigate("login");
  };
  return (
    <Button variant="outline" className="logoutBtn" onClick={logout}>
      Logout
    </Button>
  );
};
export default LogoutUI;
