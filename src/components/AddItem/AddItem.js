import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemReq } from "../../store/itemsSlice";
import { Button, TextField, Callout } from "@radix-ui/themes";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import Spinner from "../Spinner/Spinner";
import styles from "./AddItem.module.css";

const AddItem = () => {
  const MAX_LIMIT = 20;
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const items = useSelector((state) => {
    return state.todoListItems.items;
  });
  
  const limitReached = items.length >= MAX_LIMIT;
  const disableInputValue = !inputValue.length || limitReached;

  const handleAddItem = () => {
    let item = {
      name: inputValue,
      isCompleted: false,
      createdAt: new Date().toISOString()
    };
    dispatch(addItemReq(dispatch, item));
    setInputValue("");
  };

  const isItemBeingAdded = useSelector(
    (state) => state.todoListItems.isItemBeingAdded
  );

  return (
    <div>
      <form className={styles.AddItem} onSubmit={handleAddItem}>
        <TextField.Root
          value={inputValue}
          placeholder="Pop in the task name"
          onChange={handleInputChange}
          className={styles.input}
        ></TextField.Root>

        <Button
          type="submit"
          onClick={handleAddItem}
          disabled={disableInputValue}
        >
          {isItemBeingAdded ? (
            <Spinner customClassName="svg-sm" />
          ) : (
            <>
              Add task
            </>
          )}
        </Button>
      </form>
      {(limitReached) &&
        <div className={styles.calloutContainer}>
          <Callout.Root size="1">
            <Callout.Icon>
              <InfoCircledIcon />
            </Callout.Icon>
            <Callout.Text>
              You've reached the maximum limit of tasks. Try deleting a few to add further.
            </Callout.Text>
          </Callout.Root>
        </div>
      }
    </div>
  );
};
export default AddItem;
