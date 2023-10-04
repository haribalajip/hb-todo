import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchItems } from "../../store/itemsSlice";
import Item from "../Item/Item";
const PendingItems = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItems(dispatch));
  }, [dispatch]);

  const items = useSelector((state) => {
    return state.todoListItems.items;
  });
  const isLoading = useSelector((state) => state.todoListItems.isListLoading);
  return (
    <div className="todo-list">
      {isLoading ? (
        <p>Loading ...</p>
      ) : items.length === 0 ? (
        <p>You haven't any any tasks yet</p>
      ) : (
        <div>
          {items.map((item) => {
            return <Item item={item} key={item.id}></Item>;
          })}
        </div>
      )}
    </div>
  );
};

export default PendingItems;
