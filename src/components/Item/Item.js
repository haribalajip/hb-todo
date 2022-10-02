const Item = (props) => {
	return (
		<div key={props.id}>
			<div>{props.name}</div>
		</div>
	)
}

export default Item;