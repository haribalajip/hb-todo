import { Heading, Separator } from "@radix-ui/themes";
import styles from "./TopBar.module.css";
import LogoutUI from "../LogoutUI/LogoutUI";
import { MixIcon } from "@radix-ui/react-icons";
const TopBar = (props) => {
  return (
    <div>
      <div className={styles.TopBar}>
        <MixIcon width="25" height="25"></MixIcon>
        <Heading size="6">Chronos</Heading>
        {props.userLoggedIn ? <LogoutUI></LogoutUI> : "Not logged in"}
      </div>
      <Separator my="3" size="4" />
    </div>
  );
};

export default TopBar;
