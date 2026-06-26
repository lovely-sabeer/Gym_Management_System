import { Plus } from "lucide-react";
import styles from "./AddFloatingButton.module.css";

function AddFloatingButton({ onClick, Icon: Icon }) {
	return (
		<button
			className={styles.button}
			onClick={onClick}
			type="button"
		>
			{Icon ? <Icon size={26} className={styles.icon} /> : <Plus size={26} className={styles.icon} />}
		</button>
	);
}

export default AddFloatingButton;
