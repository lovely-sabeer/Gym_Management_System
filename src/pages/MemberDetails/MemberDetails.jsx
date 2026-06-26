import AddFloatingButton from "../../components/AddFloatingButton/AddFloatingButton";
import styles from "./MemberDetails.module.css";

const MemberDetails = () => {
	return (
		<div >
			{/* Main */}
			<main className={styles.Md__main}>
				{/* Profile */}
				<section className={styles.Md__profileSection}>
					<div className={styles.Md__avatar}>
						<span>AN</span>
					</div>
					<h2 className={styles.Md__memberName}>Alex Newman</h2>
					<p className={styles.Md__memberMeta}>
						ID: #GM-9921 • Downtown Branch
					</p>
					<span className={styles.Md__status}>ACTIVE</span>
				</section>

				{/* Actions */}
				<section className={styles.Md__actions}>
					<button className={styles.Md__actionCard}>
						<span className="material-symbols-outlined">edit</span>
						<span>Edit</span>
					</button>

					<button
						className={`${styles.Md__actionCard} ${styles.Md__deleteCard}`}
					>
						<span className="material-symbols-outlined">delete</span>
						<span>Delete</span>
					</button>

					<button className={styles.Md__actionCard}>
						<span className="material-symbols-outlined">call</span>
						<span>Call</span>
					</button>
				</section>

				{/* Info */}
				<section className={styles.Md__infoGrid}>
					<div className={styles.Md__fullCard}>
						<div className={styles.Md__infoRow}>
							<span>Current Plan</span>
							<strong>Platinum Monthly</strong>
						</div>

						<div className={styles.Md__divider}></div>

						<div className={styles.Md__infoRow}>
							<span>Phone Number</span>
							<a href="tel:+15550198">+1 (555) 0198</a>
						</div>
					</div>

					<div className={styles.Md__smallCard}>
						<span className="material-symbols-outlined">
							calendar_today
						</span>

						<p>Joined</p>

						<strong>Jan 12, 2023</strong>
					</div>

					<div className={styles.Md__smallCard}>
						<span className="material-symbols-outlined">
							event_busy
						</span>

						<p>Expiry</p>

						<strong>Dec 12, 2024</strong>
					</div>
				</section>

				{/* Physical Metrics */}
				<h3 className={styles.Md__sectionTitle}>Physical Metrics</h3>

				<section className={styles.Md__metrics}>
					<div className={styles.Md__metricCard}>
						<div className={styles.Md__metricIcon}>
							<span className="material-symbols-outlined">height</span>
						</div>

						<div>
							<p>Height</p>
							<strong>175 cm</strong>
						</div>
					</div>

					<div className={styles.Md__metricCard}>
						<div className={styles.Md__metricIcon}>
							<span className="material-symbols-outlined">
								monitor_weight
							</span>
						</div>

						<div>
							<p>Weight</p>
							<strong>70 kg</strong>
						</div>
					</div>
				</section>

				{/* Payment */}
				<div className={styles.Md__paymentHeader}>
					<h3 className={styles.Md__sectionTitle}>Payment History</h3>

					<button className={styles.Md__viewAll}>
						View All
					</button>
				</div>

				<section className={styles.Md__paymentList}>
					<div className={styles.Md__paymentItem}>
						<div className={styles.Md__paymentLeft}>
							<div className={styles.Md__paymentIcon}>
								<span className="material-symbols-outlined">
									credit_card
								</span>
							</div>

							<div>
								<p>Plan Renewal</p>
								<small>Card • Oct 12, 10:30 AM</small>
							</div>
						</div>

						<strong>$120.00</strong>
					</div>

					<div className={styles.Md__paymentItem}>
						<div className={styles.Md__paymentLeft}>
							<div className={styles.Md__paymentIcon}>
								<span className="material-symbols-outlined">
									payments
								</span>
							</div>

							<div>
								<p>PT Session (5x)</p>
								<small>Cash • Sep 28, 04:15 PM</small>
							</div>
						</div>

						<strong>$250.00</strong>
					</div>

					<div className={styles.Md__paymentItem}>
						<div className={styles.Md__paymentLeft}>
							<div className={styles.Md__paymentIcon}>
								<span className="material-symbols-outlined">
									account_balance_wallet
								</span>
							</div>

							<div>
								<p>Registration Fee</p>
								<small>UPI • Jan 12, 09:00 AM</small>
							</div>
						</div>

						<strong>$45.00</strong>
					</div>
				</section>
			</main>
			<AddFloatingButton onClick={() => {}} />
		</div>
	);
};

export default MemberDetails;