import NavigateTo from "../../functions/NavigateTo";
import styles from "./Settings.module.css";

const plans = [
	{
		name: "Monthly Plan",
		price: "$49.99 / 1 Month",
		icon: "event_available",
		active: false,
	},
	{
		name: "Quarterly Plan",
		price: "$129.99 / 3 Months",
		icon: "workspace_premium",
		active: true,
	},
];

const Settings = () => {
	function handleLogout() {
		localStorage.removeItem("token");
		NavigateTo("/");
	}
	return (
		<div >
			{/* Main */}
			<main className={styles.St__main}>
				{/* Branch Info */}
				<section className={styles.St__card}>
					<div className={styles.St__sectionHeader}>
						<h2>Branch Info</h2>

						<span className="material-symbols-outlined">
							store
						</span>
					</div>

					<div className={styles.St__infoGrid}>
						<div>
							<small>Branch Name</small>
							<p>Downtown Elite</p>
						</div>

						<div>
							<small>Branch Code</small>
							<p>DE-2024-X</p>
						</div>
					</div>

					<div className={styles.St__infoBlock}>
						<small>Login ID</small>
						<p>admin_downtown_01</p>
					</div>

					<div className={styles.St__infoBlock}>
						<small>Password</small>
						<p>••••••••</p>
					</div>

					<div className={styles.St__buttonRow}>
						<button className={styles.St__outlineButton}>
							Edit
						</button>

						<button className={styles.St__primaryButton}>
							Change Password
						</button>
					</div>
				</section>

				{/* Plans */}
				<section>
					<div className={styles.St__titleRow}>
						<h2>Plans Management</h2>
					</div>

					<div className={styles.St__card}>
						{plans.map((plan, index) => (
							<div
								key={index}
								className={`${styles.St__planItem} ${index !== plans.length - 1
									? styles.St__planBorder
									: ""
									}`}
							>
								<div className={styles.St__planLeft}>
									<div
										className={`${styles.St__planIcon} ${plan.active
											? styles.St__activePlanIcon
											: ""
											}`}
									>
										<span className="material-symbols-outlined">
											{plan.icon}
										</span>
									</div>

									<div>
										<h3>{plan.name}</h3>
										<p>{plan.price}</p>
									</div>
								</div>

								<div className={styles.St__planActions}>
									<button>
										<span className="material-symbols-outlined">
											edit
										</span>
									</button>

									<button>
										<span className="material-symbols-outlined">
											delete
										</span>
									</button>
								</div>
							</div>
						))}
					</div>

					<button className={styles.St__addPlanButton}>
						<span className="material-symbols-outlined">
							add
						</span>
						Add Plan
					</button>
				</section>

				{/* Staff Management */}
				{/* <section>
					<button className={styles.St__staffButton} onClick={() => NavigateTo("/app/staff-management")}>
						<div className={styles.St__staffLeft}>
							<div className={styles.St__staffIcon}>
								<span className="material-symbols-outlined">
									badge
								</span>
							</div>

							<p>Manage Staff</p>
						</div>

						<span className="material-symbols-outlined">
							chevron_right
						</span>
					</button>
				</section> */}

				{/* Controls */}
				<section>
					<h2 className={styles.St__sectionTitle}>
						App Controls
					</h2>

					<div className={styles.St__card}>
						<div className={styles.St__toggleRow}>
							<div>
								<h4>Notifications</h4>
								<p>Alerts for member renewals</p>
							</div>

							<div className={styles.St__toggleActive}>
								<div
									className={styles.St__toggleCircle}
								></div>
							</div>
						</div>

						<div className={styles.St__toggleRow}>
							<div>
								<h4>Auto-fill Payment</h4>
								<p>
									Save card details for branch
								</p>
							</div>

							<div className={styles.St__toggle}>
								<div
									className={styles.St__toggleCircle}
								></div>
							</div>
						</div>
					</div>
				</section>

				{/* Danger Zone */}
				{/* <section>
					<h2 className={styles.St__dangerTitle}>
						Danger Zone
					</h2>

					<button className={styles.St__dangerButton}>
						<div className={styles.St__dangerLeft}>
							<span className="material-symbols-outlined">
								delete_forever
							</span>

							<p>Delete Branch</p>
						</div>

						<span className="material-symbols-outlined">
							warning
						</span>
					</button>
				</section> */}

				{/* Logout */}
				<section className={styles.St__logoutSection}>
					<button className={styles.St__logoutButton} onClick={handleLogout}>
						<span className="material-symbols-outlined">
							logout
						</span>

						Logout
					</button>

					<p className={styles.St__version}>
						GymManager v2.4.0
					</p>
				</section>
			</main>
		</div>
	);
};

export default Settings;