import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemReq } from "../../store/itemsSlice";
import { Button, TextField } from "@radix-ui/themes";
import { PlusIcon } from "@radix-ui/react-icons";
import styles from "./AddItem.module.css";

const AddItem = () => {
  const MAX_LIMIT = 20;
  const [inputValue, setInputValue] = useState("");
  const disableInputValue = !inputValue.length;
  const dispatch = useDispatch();
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const items = useSelector((state) => {
    return state.todoListItems.items;
  });

  const handleAddItem = () => {
    if (items.length >= MAX_LIMIT) {
      alert(`You can't add more than ${MAX_LIMIT} tasks`);
    }
    let item = {
      name: inputValue,
      isCompleted: false,
    };
    dispatch(addItemReq(dispatch, item));
    setInputValue("");
  };

  return (
    <form className={styles.AddItem} onSubmit={handleAddItem}>
      <TextField.Input
        value={inputValue}
        placeholder="Start typing"
        onChange={handleInputChange}
      ></TextField.Input>
      <Button
        type="submit"
        onClick={handleAddItem}
        disabled={disableInputValue}
      >
        <PlusIcon /> Add task
      </Button>
    </form>
  );
};
export default AddItem;
