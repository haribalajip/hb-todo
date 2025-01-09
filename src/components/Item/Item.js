import { useDispatch } from "react-redux";
import { deleteItemReq, toggleCompleteReq } from "../../store/itemsSlice";
import { useState } from "react";
import { IconButton } from "@radix-ui/themes";
import { CheckIcon, Cross2Icon, CounterClockwiseClockIcon } from "@radix-ui/react-icons";
import styles from "./Item.module.css";
import Spinner from "../Spinner/Spinner";

const Item = (props) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const deleteItem = (id) => {
    dispatch(deleteItemReq({ dispatch, id, setIsLoading }));
  };

  const markAsComplete = (item, isCompleted) => {
    dispatch(toggleCompleteReq({ dispatch, item, setIsLoading, isCompleted }));
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
          <Spinner customClassName={`svg-sm ${styles.spinner}`} />
        ) : (
          <>
            <IconButton
              variant="ghost"
              onClick={deleteItem.bind(this, props.item.id)}
            >
              <Cross2Icon />
            </IconButton>
            <IconButton
              variant="ghost"
              onClick={markAsComplete.bind(this, props.item, !props.item.isCompleted)}
            >
              {props.item.isCompleted ? (
                <CounterClockwiseClockIcon/>
              ):
                <CheckIcon />
              }
            </IconButton>
          </>
        )}
      </div>
    </div>
  );
};

export default Item;
