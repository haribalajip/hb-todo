import { useContext, useState } from "react";
import styles from "./EditForm.module.css";
import ModalContext from "../../../contexts/ModalContext";
import { Button } from "@radix-ui/themes";
import { useRef } from "react";
import Spinner from "../../Spinner/Spinner";

const EditForm = ({ item, saveItem }) => {
	let {setOpen} = useContext(ModalContext);
  const [isSaving, setIsSaving] = useState(false);
	let setIsLoading = setOpen
	const onSave = () => {
		setIsSaving(true);
		saveItem({ ...item, name: nameRef.current.value }, setIsLoading);
	}

	const nameRef = useRef();
	return (
		<>
			<fieldset className={styles.Fieldset}>
				<label className={styles.Label} htmlFor="name">
					Name
				</label>
				<input
					className={styles.Input}
					id="name"
					defaultValue={item.name}
					ref={nameRef}
				/>
			</fieldset>
			<div>
				{isSaving ? (
					<Spinner customClassName={`svg-sm`} />
				) : (
					<Button onClick={onSave}>Save</Button>
				)}
				
			</div>
		</>
	)
};

export default EditForm;