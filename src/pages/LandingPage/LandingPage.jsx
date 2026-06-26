import { motion } from "framer-motion";
import NavigateTo from "../../functions/NavigateTo";
import styles from "./LandingPage.module.css";
const features = [
	{ icon: "group", title: "Member Management", description: "Add, edit, and track members easily.", tags: ["Active", "Expired", "Trial"] },
	{ icon: "payments", title: "Payment Tracking", description: "Track every payment easily with instant entry.", revenue: "+$12,450" },
	{ icon: "storefront", title: "Branch Management", description: "Manage multiple branches easily with revenue insights." },
	{ icon: "badge", title: "Staff Management", description: "Organize your team with roles and branch linking." },
	{ icon: "lists", title: "Plan System", description: "Flexible plans for your gym with custom features." },
	{ icon: "vpn_key", title: "Simple Login", description: "Secure, branch-specific access for your whole team." }
];

const steps = [
	{ number: 1, icon: "add_business", title: "Create your branch", description: "Set up your gym profile and business details in minutes." },
	{ number: 2, icon: "person_add", title: "Add members & plans", description: "Import your member list and define your membership tiers." },
	{ number: 3, icon: "auto_awesome", title: "Start collecting payments", description: "Track subscriptions and grow your fitness business effortlessly." }
];

const fadeUp = {
	hidden: { opacity: 0, y: 40 },
	show: { opacity: 1, y: 0 }
};

const cardAnimation = {
	hidden: { opacity: 0, y: 25 },
	show: { opacity: 1, y: 0 }
};

const renderFeatureCard = (feature, index) => (
	<motion.div key={index} className={styles.Lp__featureCard} variants={cardAnimation} whileHover={{ y: -8 }}>
		<div className={styles.Lp__featureIcon}>
			<span className="material-symbols-outlined">{feature.icon}</span>
		</div>

		<h3>{feature.title}</h3>

		<p>{feature.description}</p>

		{feature.tags && (
			<div className={styles.Lp__tagRow}>
				{feature.tags.map((tag, i) => <span key={i} className={styles.Lp__tag}>{tag}</span>)}
			</div>
		)}

		{feature.revenue && (
			<div className={styles.Lp__revenueBox}>
				<span>Last 30 Days</span>
				<strong>{feature.revenue}</strong>
			</div>
		)}
	</motion.div>
);

const renderStepCard = (step) => (
	<motion.div key={step.number} className={styles.Lp__stepCard} variants={cardAnimation} whileHover={{ y: -8 }}>
		<div className={styles.Lp__stepIcon}>
			<span className="material-symbols-outlined">{step.icon}</span>
			<div className={styles.Lp__stepNumber}>{step.number}</div>
		</div>

		<h3>{step.title}</h3>

		<p>{step.description}</p>
	</motion.div>
);

const LandingPage = () => {
	return (
		<div className={styles.Lp__container}>

			<header className={styles.Lp__header}>
				<div className={styles.Lp__logo}>
					<span className="material-symbols-outlined">fitness_center</span>
					<h1>GymFlow</h1>
				</div>

				<motion.button className={styles.Lp__headerButton} whileHover={{ scale: 1.05 }} whileTap={{ scale: .95 }} onClick={() => NavigateTo("/login")}>
					Get Started
				</motion.button>
			</header>

			<motion.section className={styles.Lp__hero} initial="hidden" animate="show" variants={fadeUp} transition={{ duration: .7 }}>
				<div className={styles.Lp__heroContent}>
					<h2>Manage Your Gym Smarter</h2>

					<p>
						Track members, payments, branches, and staff all in one simple app.
					</p>

					<div className={styles.Lp__heroActions}>
						<motion.button className={styles.Lp__primaryButton} whileHover={{ scale: 1.05 }} whileTap={{ scale: .95 }}>
							Start Free Trial
						</motion.button>

						<motion.button className={styles.Lp__outlineButton} whileHover={{ scale: 1.05 }} whileTap={{ scale: .95 }}>
							View Sample App
						</motion.button>
					</div>
				</div>

				<div className={styles.Lp__heroImageSection}>
					<div className={styles.Lp__phoneFrame}>
						<img
							loading="lazy"
							src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUX7SPx6MHmTyRbrHgNRd38BffTWm5HQh-CG6322iJhCaJcwSqE_Ujv_R9chd4my629YoKQu5AJnfcTtWtVJcBWGqaIx7ePernbL4SOcWvjBGzY-h5vVZw5kFW4xEQo_Xu6wKW2mvk1bvyOmAiFkSRvt399D6xVDhICTiPIwlAlA2YCQ4ayIo2VARpdA9kk4GzD4MB7SCOHsTsdx7uFBaZwu1uK92Q9aVlssUe0sSqFm83seYlrRhP_PZR6ieVAQwghhGexLyk6CnL"
							alt="Dashboard"
						/>
					</div>

					<div className={styles.Lp__floatingCard}>
						<div className={styles.Lp__floatingIcon}>
							<span className="material-symbols-outlined">check</span>
						</div>

						<div>
							<small>Payment Received</small>
							<strong>$450.00</strong>
						</div>
					</div>
				</div>
			</motion.section>

			<section className={styles.Lp__trustStrip}>
				<div className={styles.Lp__trustItem}>
					<span className="material-symbols-outlined">bolt</span>
					<p>No complex setup</p>
				</div>

				<div className={styles.Lp__trustItem}>
					<span className="material-symbols-outlined">smartphone</span>
					<p>Works like a mobile app</p>
				</div>

				<div className={styles.Lp__trustItem}>
					<span className="material-symbols-outlined">verified</span>
					<p>Built for gym owners</p>
				</div>
			</section>
			<motion.section className={styles.Lp__features} initial="hidden" whileInView="show" viewport={{ once: true, amount: .2 }} variants={fadeUp}>
				<h2>Everything You Need to Run Your Gym</h2>

				<motion.div className={styles.Lp__featureGrid} variants={{
					show: {
						transition: {
							staggerChildren: .08
						}
					}
				}}>
					{features.map(renderFeatureCard)}
				</motion.div>
			</motion.section>

			<motion.section className={styles.Lp__experience} initial="hidden" whileInView="show" viewport={{ once: true, amount: .2 }} variants={fadeUp}>
				<div>
					<h2>Feels Like a Mobile App</h2>

					<p>
						No learning curve. Your staff can use it instantly on any device.
					</p>

					<motion.button className={styles.Lp__primaryButton} whileHover={{ scale: 1.05 }} whileTap={{ scale: .95 }}>
						Try Demo
					</motion.button>
				</div>

				<div className={styles.Lp__stackedPhones}>
					<img
						loading="lazy"
						src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUYzorn9JtuwcSsPu5hnGM5G3v9-f-pEtI66JptACB0VI-01q3juIRX8CFENXrbwfJJbZNBm7eUrz_b9NhjHyJqDq70mA3aNn2Ff9Aa_r_L4lwxTYP_0BwJpN3Cp-AYo-SDf4g1thjIHgGv__v8f7oWbaQfq-p_oCCCxUmWmFN0-gyjFm5cbANo1bKvgLX5ZgbuyaWYijmcJ7J99F6CmueD019YH9p9X6rADHWVpBUoJsyOw055Iotptn_Hc9kYwMBwvRRFcnuYx48"
						alt="Gym"
						className={styles.Lp__phoneLeft}
					/>

					<img
						loading="lazy"
						src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUxUu8zCPX4X4DvulfeJ6VwO40GFLvENrLisbQqUBDOSx9VwihLlyZYBZNcIe5e5OW8fX_av1nHysvO4Sh-baW3xq0T0QauduzbWSm7pG56I_ZDtIMwVJdgNrY4etXGKYueKRXp0DUmOFmxu67daCRSuQeyia_OcZKBjFdvvDkYOP6Y4p_IBo7KgXYuwqSwHqJEoo30d1vntqFR8nCaaViUEKuDR7LKAPvzamcLiOHoJzYinzS0Gwz2R1YTVQq4XKGpaKOe2hD7OSr"
						alt="Members"
						className={styles.Lp__phoneCenter}
					/>

					<img
						loading="lazy"
						src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwd_eYTtO9Q9P9HeBdtdjgq3_fveE_g6pMTf4yVQseQsIXyYt1OVyYPEY3jgnEbpdmnn_v9nQlblP8HH9g6Ap_U72mpRiwiN8vxTllS9X0gOVOsMhZDrVNT2ZNSGo5XwRonwaOFV2W4EtqlqxeHRTMwPHTpv1tSdkTHUNkQXkNi62AOt_oP7Ru9sKvhLdw_HS7R-KWB--bv77YvmqIKc1Ac_ZikGCoR4u_CY3x6w6hDEsI_9MW2AjNZ2eLodE5zp1vjecY104gdPZA"
						alt="Stats"
						className={styles.Lp__phoneRight}
					/>
				</div>
			</motion.section>

			<motion.section className={styles.Lp__steps} initial="hidden" whileInView="show" viewport={{ once: true, amount: .2 }} variants={fadeUp}>
				<h2>How it Works</h2>

				<motion.div className={styles.Lp__stepGrid} variants={{
					show: {
						transition: {
							staggerChildren: .1
						}
					}
				}}>
					{steps.map(renderStepCard)}
				</motion.div>
			</motion.section>

			<motion.section className={styles.Lp__cta} initial={{ opacity: 0, scale: .95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
				<h2>
					Start managing your gym the easy way
				</h2>

				<p>
					Join 500+ gym owners who simplified their operations with GymFlow Pro.
				</p>

				<div className={styles.Lp__ctaActions}>
					<motion.button className={styles.Lp__darkButton} whileHover={{ scale: 1.05 }} whileTap={{ scale: .95 }}>
						Start Free Trial
					</motion.button>

					<motion.button className={styles.Lp__lightOutline} whileHover={{ scale: 1.05 }} whileTap={{ scale: .95 }}>
						View Demo
					</motion.button>
				</div>
			</motion.section>
			<footer className={styles.Lp__footer}>
				<div className={styles.Lp__footerLogo}>
					<span className="material-symbols-outlined">fitness_center</span>
					<h3>GymFlow Pro</h3>
				</div>

				<div className={styles.Lp__footerLinks}>
					<a href="#">Features</a>
					<a href="#">Pricing</a>
					<a href="#">Terms</a>
					<a href="#">Support</a>
				</div>

				<p>© 2024 GymFlow Pro. All rights reserved.</p>
			</footer>
		</div>
	);
};

export default LandingPage;