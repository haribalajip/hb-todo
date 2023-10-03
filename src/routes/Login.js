import { Text } from "@radix-ui/themes";
import LoginUI from "../components/LoginUI/LoginUI";
import styles from "./Login.module.css";

const Login = () => {
  return (
    <div className={styles.LoginRoute}>
      <div className={styles.card}>
        <Text size={2}>Login to start adding tasks</Text>
        <LoginUI></LoginUI>
      </div>
    </div>
  );
};

export default Login;
