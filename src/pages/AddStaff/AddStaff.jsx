import React from 'react'
import styles from './AddStaff.module.css'

export default function AddStaff() {
	return (
		<section className={styles.Sm__formSection}>
			<div className={styles.Sm__formHeader}>
				<h2>New Staff Record</h2>

				<span className="material-symbols-outlined">
					person_add
				</span>
			</div>

			<div className={styles.Sm__formGroup}>
				<label>Full Name</label>

				<input
					type="text"
					placeholder="e.g. John Doe"
				/>
			</div>

			<div className={styles.Sm__formGroup}>
				<label>Phone Number</label>

				<input
					type="tel"
					placeholder="+1 (000) 000-0000"
				/>
			</div>

			<div className={styles.Sm__grid}>
				<div className={styles.Sm__formGroup}>
					<label>Role</label>

					<select>
						<option>Trainer</option>
						<option>Manager</option>
						<option>Receptionist</option>
					</select>
				</div>

				<div className={styles.Sm__formGroup}>
					<label>Branch</label>

					<select>
						<option>Downtown</option>
						<option>Westside</option>
						<option>North Hub</option>
					</select>
				</div>
			</div>

			<button className={styles.Sm__submitButton}>
				Register Staff Member
			</button>
		</section>
	)
}
