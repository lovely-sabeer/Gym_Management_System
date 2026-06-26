import { useState } from "react";
import { login } from "../../config/api";
import NavigateTo from "../../functions/NavigateTo";
import styles from "./Login.module.css";

export default function Login() {
	const [form, setForm] = useState({ email: "", password: "" });
	const [showPassword, setShowPassword] = useState(false);
	const [loading, setLoading] = useState(false);

	const handleChange = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }));

	const handleLogin = async (e) => {
		e.preventDefault();
		try {
			setLoading(true);
			const res = await login(form);
			localStorage.setItem("token", res?.token || "token");
			NavigateTo("/app");
		} catch (err) { console.error(err); }
		finally { setLoading(false); }
	};

	return (
		<div className={styles.Lg__container}>
			<main className={styles.Lg__main}>
				<section className={styles.Lg__logoSection}>
					<div className={styles.Lg__logoBox}><span className="material-symbols-outlined">fitness_center</span></div>
					<h1>GymManager</h1>
					<p>ADMINISTRATION PORTAL</p>
				</section>

				<section className={styles.Lg__card}>
					<form className={styles.Lg__form} onSubmit={handleLogin}>
						<div className={styles.Lg__field}>
							<label>Email Id</label>
							<div className={styles.Lg__inputWrapper}>
								<span className="material-symbols-outlined">mail</span>
								<input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Enter Email" />
							</div>
						</div>

						<div className={styles.Lg__field}>
							<label>Password</label>
							<div className={styles.Lg__inputWrapper}>
								<span className="material-symbols-outlined">lock</span>
								<input type={showPassword ? "text" : "password"} name="password" value={form.password} onChange={handleChange} placeholder="Enter Password" />
								<i className={`material-symbols-outlined ${styles.Lg__eye}`} onClick={() => setShowPassword(!showPassword)}>{showPassword ? "visibility_off" : "visibility"}</i>
							</div>
							<div className={styles.Lg__forgotWrapper}><a onClick={() => NavigateTo("/forgot-password")}>Forgot Password?</a></div>
						</div>

						<button type="submit" className={styles.Lg__loginButton} disabled={loading}>{loading ? "Logging In..." : "Login"}</button>
					</form>
				</section>

				<section className={styles.Lg__registerSection}>
					<p>Don't have an account?<span onClick={() => NavigateTo("/signup")}>Register</span></p>
				</section>
			</main>
		</div>
	);
}