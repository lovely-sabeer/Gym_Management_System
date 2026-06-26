import styles from "./Header.module.css";

export default function Header({ title, subtitle, handleSearch }) {
	return (
		<div className={styles.Hr__container}>
			<section className={styles.Hr__topSection}>
				<div>
					{title && <h2>{title}</h2>}
					{subtitle && <p>{subtitle}</p>}
				</div>
			</section>
			{
				handleSearch && (
					<div className={styles.Hr__searchWrapper}>
						<span className="material-symbols-outlined">search</span>
						<input type="text" placeholder="Search members..." onChange={handleSearch} />
					</div>
				)
			}
		</div>
	);
}