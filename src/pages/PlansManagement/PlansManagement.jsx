import { useState } from "react";
import AddFloatingButton from "../../components/AddFloatingButton/AddFloatingButton";
import ListCard from "../../components/ListCard/ListCard";
import Header from "../Header/Header";
import styles from "./PlansManagement.module.css";

const plans = [
	{
		name: "Diamond Premium",
		price: "₹1500 · 30 days",
		badge: "DIAMOND",
		icon: "workspace_premium",
		color: "yellow",
		expanded: true,
		features: [
			"All-day access to gym facilities",
			"Free steam & sauna access",
			"Personal locker included",
		],
	},
];
const payments = [
	{
		id: 1,
		title: "Diamond Premium",
		subTitle: "₹1500 · 30 days",
		icon: "workspace_premium",
		pill: "Diamond",
		accent: "yellow",
	},
	{
		id: 2,
		title: "Gold Monthly",
		subTitle: "₹1200 · 30 days",
		icon: "grade",
		pill: "Gold",
		accent: "gray",
	},
	{
		id: 3,
		title: "Platinum Quarterly",
		subTitle: "₹3200 · 90 days",
		icon: "stars",
		pill: "Platinum",
		accent: "orange",
	},
	{
		id: 4,
		title: "Silver Basic",
		subTitle: "₹800 · 30 days",
		icon: "trophy",
		pill: "Silver",
		accent: "slate",
	},
	{
		id: 5,
		title: "Bronze Standard",
		subTitle: "₹600 · 30 days",
		icon: "military_tech",
		pill: "Bronze",
		accent: "amber",
	},
	{
		id: 6,
		title: "Master Annual",
		subTitle: "₹10000 · 365 days",
		icon: "star_half",
		pill: "Master",
		accent: "purple",
	},
];

const PlansManagement = () => {
	const [expandedId, setExpandedId] = useState(null);

	function toggleExpanded(memberId) {
		setExpandedId((currentExpandedId) =>
			currentExpandedId === memberId ? null : memberId
		);
	}
	return (
		<main className={styles.Pm__main}>
			<Header title="Plans" subtitle="24 recent" handleSearch={() => { }} />
			{
				payments.map((payment, index) => (
					<ListCard key={index} {...payment} isExpandPlan={expandedId === payment.id} toggleExpand={toggleExpanded} />
				))
			}
			<AddFloatingButton onClick={() => { }} />
		</main>
	);
};

export default PlansManagement;