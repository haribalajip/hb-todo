import { useDispatch } from "react-redux";
import { deleteItemReq } from "../../store/itemsSlice";

const Item = (props) => {
	const dispatch = useDispatch();

	const deleteItem = (id) => {
		dispatch(deleteItemReq(dispatch, id));
	}

	return (
		<div className="todo-item mg-b-10">
			<div className="mg-r-10">{props.item.name}</div>
			<span>
				<button onClick={deleteItem.bind(this, props.item.id)}>Delete</button>
			</span>
		</div>
	)
}

export default Item;