import { useDispatch } from "react-redux";
import { deleteItemReq, markDoneReq } from "../../store/itemsSlice";

const Item = (props) => {
  const dispatch = useDispatch();

  const deleteItem = (id) => {
    dispatch(deleteItemReq(dispatch, id));
  };

  const markAsComplete = (item) => {
    dispatch(markDoneReq(dispatch, item));
  };
  return (
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
