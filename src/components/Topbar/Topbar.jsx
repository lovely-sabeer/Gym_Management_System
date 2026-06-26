import styles from "./Topbar.module.css";

export default function Topbar() {
	const name = "Mohamed Sabeer";
	const greeting = "Good Morning";
	const initials = name.split(" ").map((word) => word[0]).join("");
	return (
		<nav className={styles.header}>
			<div className={styles.textBlock}>
				<span className={styles.greeting}>{greeting},</span>
				<h1 className={styles.name}>{name}</h1>
			</div>
			<div className={styles.actions}>
				<span className={`material-symbols-outlined ${styles.icon}`}>notifications</span>
				<div className={styles.avatar}>{initials}</div>
			</div>
		</nav>
	);
}
