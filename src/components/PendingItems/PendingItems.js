import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchItems } from "../../store/itemsSlice";
import Item from "../Item/Item";
const PendingItems = () => {
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchItems(dispatch))
  }, [])


  const items = useSelector(state => state.items);
  return(
    <div> 
      {
        items.map(item => {
          return (
            <Item id={item.id} name={item.name}></Item>
          )
        })
      }
    </div>
  )
}

export default PendingItems;