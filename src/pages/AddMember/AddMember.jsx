import styles from "./AddMember.module.css";

const AddMember = () => {
	return (
		<div>
			{/* Main */}
			<main className={styles.Am__main}>
				{/* Profile */}
				<section className={styles.Am__profileSection}>
					<div className={styles.Am__profileWrapper}>
						<div className={styles.Am__profileCircle}>
							<span className="material-symbols-outlined">
								person
							</span>
						</div>

						<button className={styles.Am__cameraButton}>
							<span className="material-symbols-outlined">
								photo_camera
							</span>
						</button>
					</div>

					<p className={styles.Am__photoText}>
						Tap to add photo
					</p>
				</section>

				{/* Form Card */}
				<div className={styles.Am__card}>
					{/* Name */}
					<div className={styles.Am__field}>
						<label>Full Name</label>

						<input
							type="text"
							placeholder="e.g. John Doe"
						/>
					</div>

					{/* Phone */}
					<div className={styles.Am__field}>
						<label>Phone Number</label>

						<div className={styles.Am__phoneWrapper}>
							<span className={styles.Am__countryCode}>
								+1
							</span>

							<input
								type="number"
								placeholder="000-000-0000"
							/>
						</div>
					</div>
					{/* Physical */}
					<div className={styles.Am__physicalGrid}>
						<div className={styles.Am__field}>
							<label>Height (cm)</label>

							<input
								type="number"
								placeholder="175"
							/>
						</div>

						<div className={styles.Am__field}>
							<label>Weight (kg)</label>

							<input
								type="number"
								placeholder="70"
							/>
						</div>
					</div>

					{/* Branch */}
					<div className={styles.Am__section}>
						<label>Branch Selection</label>

						<div className={styles.Am__branchList}>
							<button className={styles.Am__branchActive}>
								Main Branch - GYM
							</button>

							<button className={styles.Am__branchButton}>
								Westside Annex
							</button>

							<button className={styles.Am__branchButton}>
								Elite Studio
							</button>
						</div>
					</div>

					{/* Plans */}
					<div className={styles.Am__section}>
						<label>Plan Selection</label>

						<div className={styles.Am__planGrid}>
							<button className={styles.Am__planActive}>
								<span>Monthly Basic</span>
								<small>$49.99/mo</small>
							</button>

							<button className={styles.Am__planCard}>
								<span>Annual Pro</span>
								<small>$450.00/yr</small>
							</button>

							<button className={styles.Am__planCard}>
								<span>Personal Trainer</span>
								<small>$120.00/mo</small>
							</button>

							<button className={styles.Am__planCard}>
								<span>Day Pass</span>
								<small>$15.00/day</small>
							</button>
						</div>
					</div>



					{/* Toggle */}
					<div className={styles.Am__toggleRow}>
						<div>
							<h4>Enable Welcome Email</h4>
							<p>Send credentials immediately</p>
						</div>

						<div className={styles.Am__toggle}>
							<div className={styles.Am__toggleCircle}></div>
						</div>
					</div>
				</div>

				{/* Info */}
				<div className={styles.Am__infoBox}>
					<span className="material-symbols-outlined">
						info
					</span>

					<p>
						Ensure all identification details are verified
						against a government ID before finalizing
						registration.
					</p>
				</div>
			</main>

			{/* Bottom Button */}
			<button className={styles.Am__submitButton}>
				<span className="material-symbols-outlined">
					person_add
				</span>

				Add Member
			</button>
		</div>
	);
};

export default AddMember;