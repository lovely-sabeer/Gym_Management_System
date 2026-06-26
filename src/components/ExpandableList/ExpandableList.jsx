import { useState } from "react";
import styles from "./ExpandableList.module.css";

function getInitials(name) {
	return name
		.split(" ")
		.map((word) => word[0])
		.slice(0, 2)
		.join("")
		.toUpperCase();
}

function ExpandableList({ data = [], renderExpanded }) {
	const [expandedId, setExpandedId] = useState(null);

	const toggle = (id) => {
		setExpandedId((prev) => (prev === id ? null : id));
	};

	return (
		<div className={styles.list}>
			{data.map((item) => {
				const isExpanded = expandedId === item.id;
				const Icon = item.icon;

				return (
					<div key={item.id} className={styles.card}>
						<div
							className={styles.header}
							onClick={() => toggle(item.id)}
						>
							<div className={styles.left}>
								<div className={styles.avatar}>
									{Icon ? <Icon size={20} /> : getInitials(item.title)}
								</div>

								<div>
									<h3 className={styles.title}>{item.title}</h3>
									<p className={styles.subtitle}>{item.subtitle}</p>
								</div>
							</div>

							<div className={styles.right}>
								<span className={`${styles.pill} ${styles.pill_grandmaster}`}>{item.pill}</span>
								<p className={styles.pillSub}>{item.pillSub}</p>
							</div>
						</div>

						{isExpanded && (
							<div className={styles.expanded}>
								{renderExpanded?.(item)}
							</div>
						)}
					</div>
				);
			})}
		</div>
	);
}

export default ExpandableList;