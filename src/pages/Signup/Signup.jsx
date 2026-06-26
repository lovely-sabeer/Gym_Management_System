import { useState } from "react";
import { signup } from "../../config/api";
import NavigateTo from "../../functions/NavigateTo";
import styles from "./Signup.module.css";
import InputField from "../../components/InputField/InputField";

export default function Signup() {
	const [form, setForm] = useState({ ownerName: "", phone: "", email: "", password: "", confirmPassword: "" });
	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);
	const [loading, setLoading] = useState(false);

	const handleChange = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }));

	const handleSubmit = async () => {
		if (form.password !== form.confirmPassword) return alert("Passwords do not match");
		try {
			setLoading(true);
			await signup(form);
		} catch (err) { console.error(err); }
		finally { setLoading(false); }
	};


	return (
		<div className={styles.Rb__container}>
			<main className={styles.Rb__main}>
				<section className={styles.Rb__heroCard}>
					<div className={styles.Rb__heroImageWrapper}>
						<img loading="lazy" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiV9Yf1buDE7uhU4GwdRT6mrq-1lSYwUboiJOPlrT9SW6GPH8Is-WfPvBXYRtugxKYQ5BhceJZedoNi04f7eUs2eoz_DJlKGrVWVQFhk2dIQ7SD8_T2mNKXqW__-zhEF3jv0TNIAflN5Ryh8B4EuHQMSLNLOHg3BAWBjxNIZXthCAjrrfHHQzupWCmBbmtvsbeYcDKizUGTjUxUJXc8-IRn_l_Wx28srve4rbNua8gagLML4B9E9oAWrvllpkFm_j89W79XlIoq5Z_" alt="Gym" className={styles.Rb__heroImage} />
					</div>
					<h2>Welcome To Gymify</h2>
					<p>Expand your fitness empire</p>
				</section>

				<div className={styles.Rb__form}>
					<section className={styles.Rb__card}>
						<InputField type="text" label={"Owner Name"} placeholder={"Full Name"} handleChange={handleChange} name={"ownerName"} />
						<InputField type="number" label={"Phone"} placeholder={"+1 (555"} handleChange={handleChange} name={"phone"} />
						<InputField type="email" label={"Email"} placeholder={"gymmanager@gmail.com"} handleChange={handleChange} name={"email"} />
					</section>

					<section className={styles.Rb__card}>
						<div className={styles.Rb__field}>
							<label>Password</label>
							<div className={styles.Rb__passwordWrapper}>
								<input type={showPassword ? "text" : "password"} name="password" value={form.password} onChange={handleChange} />
								<span className="material-symbols-outlined" onClick={() => setShowPassword(!showPassword)}>{showPassword ? "visibility_off" : "visibility"}</span>
							</div>
						</div>

						<div className={styles.Rb__field}>
							<label>Confirm Password</label>
							<div className={styles.Rb__passwordWrapper}>
								<input type={showConfirmPassword ? "text" : "password"} name="confirmPassword" value={form.confirmPassword} onChange={handleChange} />
								<span className="material-symbols-outlined" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>{showConfirmPassword ? "visibility_off" : "visibility"}</span>
							</div>
						</div>
					</section>

					<button className={styles.Rb__submitButton} disabled={loading} onClick={handleSubmit}>{loading ? "Creating..." : "Create Account"}</button>
				</div>

				<div className={styles.Rb__loginSection}><p>Already have an account?<span onClick={() => NavigateTo("/login")}>Login</span></p></div>
			</main>

			<footer className={styles.Rb__footer}><p>By registering, you agree to our Terms of Service and Privacy Policy.</p></footer>
		</div>
	);
}