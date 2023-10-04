import { useDispatch } from "react-redux";
import { deleteItemReq, markDoneReq } from "../../store/itemsSlice";
import { useState } from "react";
import { IconButton } from "@radix-ui/themes";
import { CheckIcon, Cross1Icon } from "@radix-ui/react-icons";
import styles from "./Item.module.css";
import Spinner from "../Spinner/Spinner";

const Item = (props) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const deleteItem = (id) => {
    dispatch(deleteItemReq({ dispatch, id, setIsLoading }));
  };

  const markAsComplete = (item) => {
    dispatch(markDoneReq({ dispatch, item, setIsLoading }));
  };

  let containerClassName = styles.itemContainer;
  if (props.item.isCompleted) {
    containerClassName += ` ${styles.completed}`;
  }

  return (
    <div>
      <div className={containerClassName}>
        <div className={styles.label}>{props.item.name}</div>
        {isLoading ? (
          <Spinner customClassName="svg-sm mg-l-10" />
        ) : (
          <>
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
          </>
        )}
      </div>
    </div>
  );
};

export default Item;
