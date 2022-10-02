import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchItems } from "../../store/itemsSlice";
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
            <div key={item.id}>
              <div key={item.name}>{item.name}</div>
            </div>
          )
        })
      }
    </div>
  )
}

export default PendingItems;