import { useDispatch } from "react-redux";
import { deleteItemReq, markDoneReq } from "../../store/itemsSlice";
import { useState } from "react";
import { Table, IconButton } from "@radix-ui/themes";
import { CheckIcon, Cross1Icon } from "@radix-ui/react-icons";
import styles from "./Item.module.css";

const Item = (props) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const deleteItem = (id) => {
    dispatch(deleteItemReq({ dispatch, id, setIsLoading }));
  };

  const markAsComplete = (item) => {
    dispatch(markDoneReq({ dispatch, item, setIsLoading }));
  };

  return (
    <div className={styles.itemContainer}>
      <div className={styles.label}>
        {isLoading ? "Processing item... " : props.item.name}
      </div>
      <IconButton
        variant="ghost"
        onClick={deleteItem.bind(this, props.item.id)}
      >
        <Cross1Icon />
      </IconButton>
      {!props.item.isCompleted && (
        <IconButton
          variant="ghost"
          onClick={markAsComplete.bind(this, props.item)}
        >
          <CheckIcon />
        </IconButton>
      )}
    </div>
  );
};

export default Item;
