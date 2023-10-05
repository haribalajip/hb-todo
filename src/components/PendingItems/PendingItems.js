import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchItems } from "../../store/itemsSlice";
import Spinner from "../Spinner/Spinner";
import styles from "./PendingItems.module.css";

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
        <Spinner />
      ) : items.length === 0 ? (
        <article className="flex flex--column flex--align-center">
          <p className="text-muted">No tasks for you today, lucky duck!</p>
          <img src="icons/dreamer.svg" alt="" className={styles.emptyState} />
        </article>
      ) : (
        <div>
          <p className="font-semibold"> Your tasks</p>
          {items.map((item) => {
            return <Item item={item} key={item.id}></Item>;
          })}
        </div>
      )}
    </div>
  );
};

export default PendingItems;
