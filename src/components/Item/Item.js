import { useDispatch } from "react-redux";
import { deleteItemReq } from "../../store/itemsSlice";

const Item = (props) => {
	const dispatch = useDispatch();

	const deleteItem = (id) => {
		dispatch(deleteItemReq(dispatch, id));
	}

	return (
		<div>
			<div>{props.item.name}</div>
			<span>
				<button onClick={deleteItem.bind(this, props.item.id)}>Delete</button>
			</span>
		</div>
	)
}

export default Item;