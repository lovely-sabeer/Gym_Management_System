import styles from "./CreatePlan.module.css";

const accentColors = [
	{ name: "Gold", color: "#FFD700", active: true },
	{ name: "Silver", color: "#C0C0C0" },
	{ name: "Diamond", color: "#B9F2FF" },
	{ name: "Platinum", color: "#E5E4E2" },
	{ name: "Bronze", color: "#CD7F32" },
	{ name: "Master", color: "#9932CC" },
	{ name: "Ruby", color: "#E0115F" },
	{ name: "Emerald", color: "#50C878" },
	{ name: "Sapphire", color: "#0F52BA" },
	{ name: "Onyx", color: "#353839" },
];

const features = [
	"Unlimited access to weights area",
	"Free sauna & steam room usage",
];

const CreatePlan = () => {
	return (
		<div className={styles.Cp__container}>
			{/* Header */}
			<header className={styles.Cp__header}>
				<div className={styles.Cp__headerLeft}>
					<button className={styles.Cp__backButton}>
						<span className="material-symbols-outlined">
							arrow_back
						</span>
					</button>

					<h1>Create Plan</h1>
				</div>

				<div className={styles.Cp__profileWrapper}>
					<img
						src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8tLPa0adbHFFucRHnMwK6n6QrkS37KSdVCSzHirBSXcoCA31qY1wRiXJ4Wgn7TosIkqyHdWYGwfh7uayvvT8ua3wka2mK8BGMHFPMgssj4nxB6fHrrR50_0_eIMgKsFsn3wK-IEhwfKUqhLsO3KKAdQVUKlhTcuLrxkmaBLYkSzHcQyqui3lq7LcMpMd_Ai1s3G5W9afDdP1YuiOWMDzJkVC0Ec9ks-wOBkeh79Cj1_Yst2CHNCe3P1URCzTKvZPEJTxwKJoQFGiw"
						alt="Admin"
						className={styles.Cp__profile}
					/>
				</div>
			</header>

			{/* Main */}
			<main className={styles.Cp__main}>
				{/* Basic Details */}
				<section className={styles.Cp__section}>
					<div className={styles.Cp__field}>
						<label>Plan Name</label>

						<input
							type="text"
							placeholder="e.g., Annual Elite Membership"
						/>
					</div>

					<div className={styles.Cp__grid}>
						<div className={styles.Cp__field}>
							<label>Price ($)</label>

							<input
								type="number"
								placeholder="0.00"
							/>
						</div>

						<div className={styles.Cp__field}>
							<label>Duration (mos)</label>

							<input
								type="number"
								placeholder="12"
							/>
						</div>
					</div>
				</section>

				{/* Accent Colors */}
				<section className={styles.Cp__section}>
					<label className={styles.Cp__sectionLabel}>
						SELECT ACCENT COLOR
					</label>

					<div className={styles.Cp__colorList}>
						{accentColors.map((item, index) => (
							<button
								key={index}
								className={`${styles.Cp__colorButton} ${item.active
										? styles.Cp__activeColor
										: ""
									}`}
							>
								<span
									className={styles.Cp__colorDot}
									style={{
										background: item.color,
									}}
								></span>

								<span>{item.name}</span>
							</button>
						))}
					</div>
				</section>

				{/* Features */}
				<section className={styles.Cp__section}>
					<div className={styles.Cp__featureHeader}>
						<label className={styles.Cp__sectionLabel}>
							FEATURES
						</label>

						<span>2/10</span>
					</div>

					<div className={styles.Cp__featureList}>
						{features.map((feature, index) => (
							<div
								key={index}
								className={styles.Cp__featureItem}
							>
								<span
									className={`material-symbols-outlined ${styles.Cp__checkIcon}`}
								>
									check_circle
								</span>

								<input
									type="text"
									value={feature}
									readOnly
								/>

								<button>
									<span className="material-symbols-outlined">
										delete
									</span>
								</button>
							</div>
						))}

						<button className={styles.Cp__addFeature}>
							<span className="material-symbols-outlined">
								add_circle
							</span>

							+ Add Feature
						</button>
					</div>
				</section>

				{/* Preview */}
				<section className={styles.Cp__previewCard}>
					<div className={styles.Cp__previewCircle1}></div>

					<div className={styles.Cp__previewCircle2}></div>

					<div className={styles.Cp__previewContent}>
						<div className={styles.Cp__previewTop}>
							<div>
								<h3>Preview</h3>
								<p>MEMBERSHIP PASS</p>
							</div>

							<span className="material-symbols-outlined">
								fitness_center
							</span>
						</div>

						<div className={styles.Cp__priceRow}>
							<strong>$0.00</strong>

							<span>/mo</span>
						</div>
					</div>
				</section>
			</main>

			{/* Bottom Action */}
			<div className={styles.Cp__bottomBar}>
				<button className={styles.Cp__saveButton}>
					Save Plan
				</button>
			</div>
		</div>
	);
};

export default CreatePlan;