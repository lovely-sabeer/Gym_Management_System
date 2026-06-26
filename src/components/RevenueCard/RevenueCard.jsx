import styles from "./RevenueCard.module.css";

export default function RevenueCard({ title, value, highlight, isError }) {
	return (
		<div
			className={`${styles.card} ${highlight ? styles.cardHighlight : styles.cardBase}`}
		>
			<span className={styles.title}>{title}</span>

			<span
				className={`${styles.value} ${isError ? styles.valueError : highlight ? styles.valueHighlight : styles.valueBase
					}`}
			>
				{value}
			</span>
		</div>
	);
}
