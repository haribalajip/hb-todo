import { useState } from "react";
import { useDispatch } from "react-redux";
import { itemsSliceActions } from "../../store/itemsSlice";

const AddItem = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleAddItem = () => {
    let payload = { name: inputValue };
    dispatch(itemsSliceActions.addItem(payload));
    setInputValue('')
  }

  const handleDeleteAll = () => {
    dispatch(itemsSliceActions.deleteAll())
  }

  return(
    <div>
      <input value={inputValue} placeholder='Enter your item' onChange={handleInputChange}></input>
      <button onClick={handleAddItem}>Add note</button>
      <button onClick={handleDeleteAll}>Delete All</button>
    </div>
    
  )
}
export default AddItem;