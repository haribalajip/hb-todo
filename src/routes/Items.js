import PendingItems from "../components/PendingItems/PendingItems";
import AddItem from "../components/AddItem/AddItem";
import styles from "./Items.module.css";
const Items = () => {
  return (
    <div className={styles.pageContainer}>
      <AddItem></AddItem>
      <PendingItems></PendingItems>
    </div>
  );
};

export default Items;
