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
        { window.user?.photoURL && <Avatar size="1" radius="full" src={window.user.photoURL} />}
      </Button>
    </>
  );
};
export default LogoutUI;
