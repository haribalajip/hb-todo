import { useDispatch } from "react-redux";
import { deleteItemReq, toggleCompleteReq } from "../../store/itemsSlice";
import { useState } from "react";
import { IconButton } from "@radix-ui/themes";
import { Tooltip } from "@radix-ui/themes";
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

  const createdAt = new Date(props.item.createdAt);
  const dateTooltip = createdAt.toLocaleString();
  return (
    <div>
      <div className={containerClassName}>
        <div className={styles.label}>{props.item.name}</div>
        <Tooltip content={createdAt && `Created at ${dateTooltip}`}>
          <div className={styles.date}>{props.item.createdAt && createdAt.toLocaleDateString()}</div>
        </Tooltip>
        {isLoading ? (
          <Spinner customClassName={`svg-sm ${styles.spinner}`} />
        ) : (
          <>
            <Tooltip content='Delete'>
              <IconButton
                variant="ghost"
                onClick={deleteItem.bind(this, props.item.id)}
              >
                <Cross2Icon />
              </IconButton>
            </Tooltip>
            <Tooltip content={props.item.isCompleted ? 'Mark incomplete' : 'Mark complete'}>
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
            </Tooltip>
          </>
        )}
      </div>
    </div>
  );
};

export default Item;
