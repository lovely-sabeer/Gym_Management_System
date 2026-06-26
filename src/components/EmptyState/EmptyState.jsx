import styles from "./EmptyState.module.css";

export default function EmptyState() {
	return (
		<div className={styles.container}>
			<div className={styles.iconWrapper}>
				<span className={`material-symbols-outlined ${styles.icon}`}>event_busy</span>
			</div>

			<p className={styles.text}>No items</p>
			<p className={styles.subText}>Everything is up to date for now</p>
		</div>
	);
}
