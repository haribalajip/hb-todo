import { useState } from "react";
import { useDispatch } from "react-redux";
import { itemsSliceActions } from "../store/itemsSlice";

const AddItem = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleAddNote = () => {
    let payload = { name: inputValue };
    dispatch(itemsSliceActions.addItem(payload));
  }

  return(
    <div>
      <input value={inputValue} placeholder='Enter your item' onChange={handleInputChange}></input>
      <button onClick={handleAddNote}>Add note</button>
    </div>
    
  )
}
export default AddItem;