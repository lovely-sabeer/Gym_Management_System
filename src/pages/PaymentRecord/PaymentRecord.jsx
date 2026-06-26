import { ArrowLeft, Calendar, Check, Mail, Verified } from "lucide-react";
import Header from "../Header/Header";
import styles from "./PaymentRecord.module.css";
import AddFloatingButton from "../../components/AddFloatingButton/AddFloatingButton";

const PaymentRecord = () => {
	return (
		<div >
			{/* Main */}
			<main className={styles.Pr__main}>
				<Header
					title="Payment Record"
					subtitle="Member ID: GM-2024-88"
					handleSearch={() => {}}
				/>

				{/* Member Card */}
				<div className={styles.Pr__field}>
					<label>Member ID</label>
					<div className={styles.Pr__memberCard}>
						<div className={styles.Pr__memberLeft}>
							<img
								src="https://lh3.googleusercontent.com/aida-public/AB6AXuD50kRjEYZplaB-CujvmLT0wcGJOBOvhLYJC1b7KjOlMa-1ox3b2VgsGsqD3455gz30yFdqM8HCMsMf3IBzg14mFOe3XV9zQQzEgEq9OX6zMHfZ941GzUFFmYXy-yrGklWZ7-F8GWPIeNFjZFoqgKaaYjfCKgruUcaGClt7RVy-JzmYY9LOK7xPq4QMPlWVkl6vsxKkcRLMTqQn-_At-k7FzEElnncEEGYl1X7_FzpJyoSgrJndqZjaSI8ew_fKgUm0C7WDec_sJOnN"
								alt="Member"
								className={styles.Pr__avatar}
							/>

							<div>
								<h3>Alex Thompson</h3>

								<span className={styles.Pr__planBadge}>
									Pro Annual Plan
								</span>
							</div>
						</div>


						<div className={styles.Pr__dueBox}>
							<small>Due</small>
							<strong>₹1,200</strong>
						</div>
					</div>
				</div>

				{/* Amount */}
				<div className={styles.Pr__field}>
					<label>Amount to Record (₹)</label>

					<div className={styles.Pr__inputWrapper}>
						<span className="material-symbols-outlined">
							payments
						</span>

						<input
							type="number"
							defaultValue="1200"
							placeholder="0.00"
							className={styles.Pr__amountInput}
						/>
					</div>
				</div>

				{/* Payment Method */}
				<div className={styles.Pr__field}>
					<label>Payment Method</label>

					<div className={styles.Pr__methodGrid}>
						<button className={styles.Pr__methodActive}>
							<span className="material-symbols-outlined">
								payments
							</span>

							<span>CASH</span>
						</button>

						<button className={styles.Pr__methodCard}>
							<span className="material-symbols-outlined">
								qr_code_2
							</span>

							<span>UPI</span>
						</button>

						<button className={styles.Pr__methodCard}>
							<span className="material-symbols-outlined">
								credit_card
							</span>

							<span>CARD</span>
						</button>
					</div>
				</div>

				{/* Date */}
				<div className={styles.Pr__field}>
					<label>Payment Date</label>

					<div className={styles.Pr__datePicker}>
						<div className={styles.Pr__dateLeft}>
							{/* <span className="material-symbols-outlined">
								calendar_today
							</span> */}
							<Calendar size={20} />
							<span>Oct 24, 2023 (Today)</span>
						</div>
					</div>
				</div>

				{/* Notes */}
				<div className={styles.Pr__field}>
					<label>Notes (Optional)</label>

					<textarea
						rows="3"
						placeholder="Add a remark..."
					></textarea>
				</div>

				{/* Receipt Toggle */}
				<div className={styles.Pr__receiptCard}>
					<div className={styles.Pr__receiptLeft}>
						<div className={styles.Pr__mailIcon}>
							<Mail />
						</div>
						<div>
							<h4>Send Digital Receipt</h4>
							<p>Will be sent via WhatsApp & Email</p>
						</div>
					</div>

					<div className={styles.Pr__toggle}>
						<div className={styles.Pr__toggleCircle}></div>
					</div>
				</div>
			</main>
			{/* Floating Button */}
			<AddFloatingButton Icon={Check} onClick={() => NavigateTo("/app/payment-record")} />
			
		</div>
	);
};

export default PaymentRecord;