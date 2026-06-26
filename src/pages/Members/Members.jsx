import { useEffect, useState } from "react";
import AddFloatingButton from "../../components/AddFloatingButton/AddFloatingButton";
import BottomNav from "../../components/BottomNav/BottomNav";
import styles from "./Members.module.css";
import ExpandableList from "../../components/ExpandableList/ExpandableList";
import NavigateTo from "../../functions/NavigateTo";
import Header from "../Header/Header";
import ListCard from "../../components/ListCard/ListCard";

const members = [
	{
		id: 1,
		title: "James Dalton",
		subTitle: "#GM202401 • Downtown",
		pill: "Active|success",
		subValue: "Monthly",
	},
	{
		id: 2,
		title: "Amara Rose",
		subTitle: "#GM202412 • Westside",
		pill: "Due Soon|warning",
		subValue: "Quarterly",
	},
	{
		id: 3,
		title: "Marcus Knight",
		subTitle: "#GM202399 • Downtown",
		pill: "Overdue|danger",
		subValue: "Monthly",
	},
	{
		id: 4,
		title: "Sarah Lee",
		subTitle: "#GM202405 • Westside",
		pill: "Active|success",
		subValue: "Annual",
	},
	{
		id: 5,
		title: "Brian Taylor",
		subTitle: "#GM202418 • Downtown",
		pill: "Active|success",
		subValue: "Monthly",
	}
];

const filterTabs = ["All", "Overdue", "Due Soon", "Active"];

function Members() {
	const [expandedId, setExpandedId] = useState(null);
	const [activeFilter, setActiveFilter] = useState("All");

	function toggleExpanded(memberId) {
		setExpandedId((currentExpandedId) =>
			currentExpandedId === memberId ? null : memberId
		);
	}
	return (
		<div className={styles.page}>
			{/* Header */}
			<Header title="Members" subtitle="24 recent" handleSearch={() => { }} />

			{/* Filter Tabs */}
			<div className={styles.tabs}>
				<div className={styles.tabsRow}>
					{filterTabs.map((tab) => {
						const isActive = activeFilter === tab;
						return (
							<button
								key={tab}
								type="button"
								onClick={() => setActiveFilter(tab)}
								className={`${styles.tab} ${isActive ? styles.tabActive : styles.tabInactive}`}
							>
								{tab}
							</button>
						);
					})}
				</div>
			</div>

			{/* Member List */}
			<main className={styles.list}>
				{
					members.map((payment, index) => (
						<ListCard key={index} {...payment} isExpandMember={expandedId === payment.id} toggleExpand={toggleExpanded} />
					))
				}
			</main>
			<AddFloatingButton onClick={() => NavigateTo("/app/add-member")} />
		</div>
	);
}

export default Members;
