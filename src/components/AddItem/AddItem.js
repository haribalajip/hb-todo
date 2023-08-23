import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItemReq } from "../../store/itemsSlice";
import { Button, TextField } from "@radix-ui/themes";
import { PlusIcon } from "@radix-ui/react-icons";
const AddItem = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddItem = () => {
    let item = {
      name: inputValue,
      isCompleted: false,
    };
    dispatch(addItemReq(dispatch, item));
    setInputValue("");
  };

  return (
    <div className="add-item">
      <TextField.Input
        value={inputValue}
        placeholder="Start typing"
        onChange={handleInputChange}
      ></TextField.Input>
      <Button onClick={handleAddItem}>
        <PlusIcon /> Add task
      </Button>
    </div>
  );
};
export default AddItem;
