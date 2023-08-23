import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchItems } from "../../store/itemsSlice";
import Item from "../Item/Item";
import { Table } from "@radix-ui/themes";
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
      ) : (
        <div>
          <Table.Root>
            <Table.Body>
              {items.map((item) => {
                return <Item item={item} key={item.id}></Item>;
              })}
            </Table.Body>
          </Table.Root>
        </div>
      )}
    </div>
  );
};

export default PendingItems;
