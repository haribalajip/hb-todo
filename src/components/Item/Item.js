import { useDispatch } from "react-redux";
import { deleteItemReq, markDoneReq } from "../../store/itemsSlice";
import { useState } from "react";

const Item = (props) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const deleteItem = (id) => {
    dispatch(deleteItemReq({ dispatch, id, setIsLoading }));
  };

  const markAsComplete = (item) => {
    dispatch(markDoneReq({ dispatch, item, setIsLoading }));
  };

  return isLoading ? (
    <p>Loading item...</p>
  ) : (
    <div className="todo-item mg-b-10">
      <div className="mg-r-10">{props.item.name}</div>
      <span>
        <button
          className="mg-r-10"
          onClick={deleteItem.bind(this, props.item.id)}
        >
          Delete
        </button>
        {!props.item.isCompleted && (
          <button onClick={markAsComplete.bind(this, props.item)}>
            Mark complete
          </button>
        )}
      </span>
    </div>
  );
};

export default Item;
