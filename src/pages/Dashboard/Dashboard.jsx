import RevenueCard from "../../components/RevenueCard/RevenueCard";
import RevenueChart from "../../components/RevenueChart/RevenueChart";
import EmptyState from "../../components/EmptyState/EmptyState";
import AddFloatingButton from "../../components/AddFloatingButton/AddFloatingButton";
import styles from "./Dashboard.module.css";
import { useEffect } from "react";
import ListCard from "../../components/ListCard/ListCard";
import NavigateTo from "../../functions/NavigateTo";

const CardValues = [
	{
		title: "TODAY REVENUE",
		value: "₹8,500",
		highlight: true,
	},
	{
		title: "THIS MONTH",
		value: "₹20,000",
	},
	{
		title: "DUE",
		value: "1",
	},
	{
		title: "OVERDUE",
		value: "5",
		isError: true,
	},
];

const payments = [
	{
		title: "Rahul Jaiswal",
		subTitle: "#GM-902 • UPI",
		value: "₹ 3,500",
		subValue: "Oct 24, 10:30 AM",
	},
	{
		title: "Ananya Singh",
		subTitle: "#GM-844 • Cash",
		value: "₹ 5,000",
		subValue: "Oct 23, 04:15 PM",
	},
	{
		title: "Mohit Kapoor",
		subTitle: "#GM-712 • Card",
		value: "₹ 1,200",
		subValue: "Oct 23, 11:00 AM",
	},
	{
		title: "Priya Verma",
		subTitle: "#GM-956 • UPI",
		value: "₹ 2,400",
		subValue: "Oct 22, 06:45 PM",
	},
	{
		title: "Suresh Das",
		subTitle: "#GM-432 • Cash",
		value: "₹ 12,000",
		subValue: "Oct 22, 02:20 PM",
	},
	{
		title: "Rohan Bhalla",
		subTitle: "#GM-102 • Card",
		value: "₹ 4,500",
		subValue: "Oct 21, 09:15 AM",
	},
];

const members = [
	{
		id: 1,
		title: "James Dalton",
		subTitle: "#GM202401 • Downtown",
		pill: "Active|success",
		subValue: "24/05/2026",
	},
	{
		id: 2,
		title: "Amara Rose",
		subTitle: "#GM202412 • Westside",
		pill: "Due Soon|warning",
		subValue: "23/05/2026",
	},
	{
		id: 3,
		title: "Marcus Knight",
		subTitle: "#GM202399 • Downtown",
		pill: "Overdue|danger",
		subValue: "23/05/2026",
	},
	{
		id: 4,
		title: "Sarah Lee",
		subTitle: "#GM202405 • Westside",
		pill: "Active|success",
		subValue: "22/05/2026",
	},
	{
		id: 5,
		title: "Brian Taylor",
		subTitle: "#GM202418 • Downtown",
		pill: "Active|success",
		subValue: "22/05/2026",
	}
];


export default function Dashboard() {
	return (
		<main className={styles.page}>

			<section className={styles.cardsSection}>
				<div className={styles.cardsGrid}>
					{CardValues.map((value, index) => (
						<RevenueCard key={index} {...value} />
					))}
				</div>
			</section>
			<section className={styles.chartSection}>
				<div className={styles.sectionHeader}>
					<h2 className={styles.sectionTitle}>Revenue Growth</h2>
				</div>
				<RevenueChart />
			</section>
			<section className={styles.todaySection}>
				<div className={styles.sectionHeader}>
					<h2 className={styles.sectionTitle}>UPCOMING PAYMENTS</h2>
					<button type="button" className={styles.sectionAction} onClick={() => NavigateTo("/app/members")}>
						See all
					</button>
				</div>
				<main className={styles.Pl__list}>
					{
						members && members.length > 0 ? (
							members
								.filter((mem) => mem.pill.includes("warning"))
								.filter((_, index) => index < 5)
								.map((payment, index) => (
									<ListCard key={index} {...payment} />
								))
						) : (
							<EmptyState />
						)
					}
				</main>
			</section>
			<section className={styles.todaySection}>
				<div className={styles.sectionHeader}>
					<h2 className={styles.sectionTitle}>FEES (recent 5 records)</h2>
					<button type="button" className={styles.sectionAction} onClick={() => NavigateTo("/app/payments")}>
						See all
					</button>
				</div>
				<main className={styles.Pl__list}>
					{payments.filter((_, index) => index < 4).map((payment, index) => (
						<ListCard key={index} {...payment} />
					))}
				</main>
			</section>
			<AddFloatingButton onClick={() => NavigateTo("/app/payment-record")} />
		</main>
	);
}
