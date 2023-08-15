import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItemReq } from "../../store/itemsSlice";
import { getCurrentUserId } from "../../utils/loginUtil";
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
      <input
        className="mg-r-10"
        value={inputValue}
        placeholder="Enter your item"
        onChange={handleInputChange}
      ></input>
      <button onClick={handleAddItem}>Add note</button>
    </div>
  );
};
export default AddItem;
