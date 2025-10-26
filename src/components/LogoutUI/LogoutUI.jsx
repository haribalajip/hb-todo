import { Button } from "@radix-ui/themes";
import { useNavigate } from "react-router";
import { Avatar } from "@radix-ui/themes";

const LogoutUI = () => {
  let navigate = useNavigate();
  const logout = () => {
    window.localStorage.removeItem("uid");
    navigate("login");
  };
  return (
    <>
      <Button variant="outline" className="logoutBtn" onClick={logout}>
        Logout
        { localStorage.getItem('photoURL') && <Avatar size="1" radius="full" src={localStorage.getItem('photoURL')} />}
      </Button>
    </>
  );
};
export default LogoutUI;
