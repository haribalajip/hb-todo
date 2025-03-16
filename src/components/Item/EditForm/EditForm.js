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
		saveItem({ ...item, name: nameRef.current.value, notes: notesRef.current.value }, setIsLoading);
	}

	const nameRef = useRef();
	const notesRef = useRef();
	return (
		<>
			<div className={styles.formContainer}>
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
				<fieldset className={styles.Fieldset}>
					<label className={styles.Label} htmlFor="notes">
						Notes
					</label>
					<input
						className={styles.Input}
						id="notes"
						defaultValue={item.notes}
						ref={notesRef}
						placeholder="Jot down some extra info here"
					/>
				</fieldset>
			</div>
			<div className={styles.footer}>
				<Button variant="soft" color="cyan" className="mg-r-10" onClick={() => setOpen(false)}>Cancel</Button>
				{isSaving ? (
					<Spinner customClassName={`svg-sm`} />
				) : (
					<Button variant='soft' type="submit" onClick={onSave}>Save</Button>
				)}
			</div>
		</>
	)
};

export default EditForm;