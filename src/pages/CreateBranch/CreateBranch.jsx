import Header from "../Header/Header";
import styles from "./CreateBranch.module.css";

const CreateBranch = () => {
	return (
		<main className={styles.Cb__main}>
			{/* Header */}
			<Header title="Create Branch" />
			{/* Form */}
			<form className={styles.Cb__form}>
				{/* Hero Card */}
				<section className={styles.Cb__heroCard}>
					<div className={styles.Cb__heroTop}>
						<span className="material-symbols-outlined">
							add_business
						</span>
					</div>

					<div className={styles.Cb__heroContent}>
						<h2>Branch Details</h2>

						<p>
							Configure the new location and its
							access credentials.
						</p>
					</div>
				</section>
				{/* Basic Info */}
				<section className={styles.Cb__card}>
					<div className={styles.Cb__field}>
						<label>Branch Name</label>
						<input
							type="text"
							placeholder="e.g. Downtown Fitness Center"
						/>
					</div>
					<div className={styles.Cb__field}>
						<label>Branch Code</label>
						<div className={styles.Cb__inputWrapper}>
							<input
								type="text"
								placeholder="BR-001" />
							<span className="material-symbols-outlined">
								fingerprint
							</span>
						</div>
					</div>
				</section>

				{/* Security */}
				<section className={styles.Cb__card}>
					<div className={styles.Cb__sectionTitle}>
						<span className="material-symbols-outlined">
							lock_open
						</span>
						<h3>Access Credentials</h3>
					</div>

					<div className={styles.Cb__field}>
						<label>Login Password</label>

						<input
							type="password"
							placeholder="••••••••"
						/>
					</div>

					<div className={styles.Cb__field}>
						<label>Confirm Password</label>

						<input
							type="password"
							placeholder="••••••••"
						/>
					</div>
				</section>

				{/* Contact & Location */}
				<section className={styles.Cb__card}>
					<div className={styles.Cb__sectionTitle}>
						<span className="material-symbols-outlined">
							location_on
						</span>

						<h3>Contact & Location</h3>
					</div>

					<div className={styles.Cb__field}>
						<label>Phone (Optional)</label>

						<input
							type="tel"
							placeholder="+1 (555) 000-0000"
						/>
					</div>

					<div className={styles.Cb__field}>
						<label>Address (Optional)</label>

						<textarea
							rows="3"
							placeholder="Street name, City, ZIP"
						></textarea>
					</div>

					<div className={styles.Cb__mapWrapper}>
						<img
							src="https://lh3.googleusercontent.com/aida-public/AB6AXuDw5IG6zKm-7nweAY24QZYmecZXcGzqLrnri11HkYNdZDBtPFULKLCC1o4vUDUo_si3OXqfu_MXcNo1n6qPR0iz_WaGVjaIM1VomJ6a7z7JKghPzKBFLjY4iEuxRVnrCQLn3PmVBtMyiAk9nnjqshkcgbQDJwSJtehKSyhfCs8HyJkDugdDbG118lw6g3hLh8fcaE6p-h7fSUKMLi4EAhF5EHjVwVXS6Kc-QI2rpQH_iSfMN4Eou3Uk9_u4wuKKxMtmHfV7KtyiIkPp"
							alt="Map"
							className={styles.Cb__mapImage}
						/>
					</div>
				</section>
				<button className={styles.Cb__submitButton}>
					<span className="material-symbols-outlined">
						check_circle
					</span>

					Create Branch
				</button>
			</form>
		</main>
	);
};

export default CreateBranch;