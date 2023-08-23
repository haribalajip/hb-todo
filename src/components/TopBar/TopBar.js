import { Heading, Separator } from "@radix-ui/themes";
import styles from "./TopBar.module.css";
import LogoutUI from "../LogoutUI/LogoutUI";
const TopBar = (props) => {
  return (
    <div>
      <div className={styles.TopBar}>
        <Heading size="6"> To do</Heading>
        {props.userLoggedIn && <LogoutUI></LogoutUI>}
      </div>
      <Separator my="3" size="4" />
    </div>
  );
};

export default TopBar;
