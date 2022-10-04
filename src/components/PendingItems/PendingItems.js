import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchItems } from "../../store/itemsSlice";
import Item from "../Item/Item";
const PendingItems = () => {
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchItems(dispatch))
  }, [dispatch])


  const items = useSelector(state => state.items);
  return(
    <div className="todo-list"> 
      <div>
        {
          items.map(item => {
            return (
              <Item item={item} key={item.id}></Item>
            )
          })
        }
      </div>
    </div>
  )
}

export default PendingItems;