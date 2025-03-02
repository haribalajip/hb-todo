import { useDispatch } from "react-redux";
import { deleteItemReq, toggleCompleteReq, updateItem } from "../../store/itemsSlice";
import { useState } from "react";
import { IconButton } from "@radix-ui/themes";
import { Tooltip, Text } from "@radix-ui/themes";
import { CheckIcon, Cross2Icon, CounterClockwiseClockIcon, Pencil1Icon } from "@radix-ui/react-icons";
import styles from "./Item.module.css";
import Spinner from "../Spinner/Spinner";
import { format } from 'date-fns';
import Modal from '../Modal/Modal';
import EditForm from "./EditForm/EditForm";

const Item = (props) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const deleteItem = (id) => {
    dispatch(deleteItemReq({ dispatch, id, setIsLoading }));
  };

  const markAsComplete = (item, isCompleted) => {
    dispatch(toggleCompleteReq({ dispatch, item, setIsLoading, isCompleted }));
  };

  const saveItemEdits = (item, setIsLoading) => {
    dispatch(updateItem({ dispatch, item, setIsLoading }));
  }

  let containerClassName = styles.itemContainer;
  if (props.item.isCompleted) {
    containerClassName += ` ${styles.completed}`;
  }

  const createdAt = new Date(props.item.createdAt);
  const dateTooltip = format(createdAt, 'PPpp');
  return (
    <div>
      <div className={containerClassName}>
        <Text size="3" className={styles.label}>{props.item.name}</Text>
        <div className={styles.actionsSection}>
          {createdAt &&
            <Tooltip content={`Created at ${dateTooltip}`}>
              <Text size="1" className={styles.date}>{props.item.createdAt && format(createdAt, 'Pp')}</Text>
            </Tooltip>
          }
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

                {/* Opens a Task edit modal */}
                <Modal>
                  <Modal.Trigger>
                    <Tooltip content='Edit'>
                      <IconButton variant="ghost"><Pencil1Icon /></IconButton>
                    </Tooltip>
                  </Modal.Trigger>
                  <Modal.Content>
                    <EditForm item={props.item} saveItem={saveItemEdits}/>
                  </Modal.Content>
                </Modal>
              
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
    </div>
  );
};

export default Item;
