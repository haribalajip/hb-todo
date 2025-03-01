import styles from "./EditForm.module.css";

const EditForm = (props) => {
	console.log(props)
	return (
		<>
			<fieldset className={styles.Fieldset}>
				<label className={styles.Label} htmlFor="name">
					Name
				</label>
				<input
					className={styles.Input}
					id="name"
					defaultValue={props.item.name}
				/>
			</fieldset>
		</>
	)
};

export default EditForm;