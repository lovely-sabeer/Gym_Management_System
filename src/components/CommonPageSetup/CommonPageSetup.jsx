import Header from "../Header/Header";
import AddFloatingButton from "../AddFloatingButton/AddFloatingButton";
import BottomNav from "../BottomNav/BottomNav";
import styles from "./CommonPageSetup.module.css";

function CommonPageSetup({
	greeting,
	name,
	children,
	isAddable,
	onAddableClick,
	NavValues,
}) {
	return (
		<div className={styles.page}>
			<Header greeting={greeting} name={name} />
			<div className={styles.content}>{children}</div>
			{isAddable && <AddFloatingButton onClick={onAddableClick} />}
			<BottomNav NavValues={NavValues} />
		</div>
	);
}

export default CommonPageSetup;
