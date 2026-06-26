import NavigateTo from "../../functions/NavigateTo";
import styles from "./ForgotPassword.module.css";

const ForgotPassword = () => {
	return (
		<div className={styles.Fp__container}>
			{/* Header */}
			<header className={styles.Fp__header}>
				<div className={styles.Fp__headerLeft}>
					<button className={styles.Fp__backButton}>
						<span className="material-symbols-outlined">
							arrow_back
						</span>
					</button>

					<h1>Forgot Password</h1>
				</div>
			</header>

			{/* Main */}
			<main className={styles.Fp__main}>
				{/* Hero */}
				<section className={styles.Fp__heroSection}>
					<div className={styles.Fp__iconWrapper}>
						<span className="material-symbols-outlined">
							lock_reset
						</span>
					</div>

					<h2>Recover Access</h2>

					<p>
						Enter your registered details below to
						receive a password reset link on your
						device.
					</p>
				</section>

				{/* Form Card */}
				<section className={styles.Fp__card}>
					{/* Branch ID */}
					<div className={styles.Fp__field}>
						<label>BRANCH ID</label>

						<div className={styles.Fp__inputWrapper}>
							<span className="material-symbols-outlined">
								storefront
							</span>

							<input
								type="text"
								placeholder="e.g. BR-8821"
							/>
						</div>
					</div>

					{/* Phone */}
					<div className={styles.Fp__field}>
						<label>PHONE NUMBER</label>

						<div className={styles.Fp__inputWrapper}>
							<span className="material-symbols-outlined">
								phone_iphone
							</span>

							<input
								type="tel"
								placeholder="+1 (555) 000-0000"
							/>
						</div>
					</div>

					{/* Submit */}
					<button className={styles.Fp__submitButton}>
						Reset Password

						<span className="material-symbols-outlined">
							arrow_forward
						</span>
					</button>
				</section>

				{/* Login */}
				<section className={styles.Fp__loginSection}>
					<p>
						Remembered your password?
						<a onClick={()=>NavigateTo("/login")}>Login</a>
					</p>
				</section>
			</main>

			{/* Footer Image */}
			<section className={styles.Fp__footerSection}>
				<div className={styles.Fp__imageWrapper}>
					<img
						src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxucIiJBfSteP29oNTeZDkSQeMe3lzco9hEmRpqPIAmJ7GJ3tAa6O-4-vg0MEXR69j8KB6sDrPKlVqCyb4UYxpgj83l_al-6xIjk-h9ymHE7UsGClEiKLM8mVoH5DOZk1bCCcoeH-5iiiVYWROuooQujPP0ZUHiSSYXSZ-dwuKegQu1b7UdAoP-CJ55zDfIegaXnExyNdg6kWxHwcGYJdr7ndlYJ0lLLG4jP0hspp_bQf3G6_VRKMNNajr1Wo48sh2kTha0ICkJFAP"
						alt="Gym"
						className={styles.Fp__image}
					/>

					<div className={styles.Fp__overlay}>
						<p>
							Need help? Contact branch support.
						</p>
					</div>
				</div>
			</section>
		</div>
	);
};

export default ForgotPassword;