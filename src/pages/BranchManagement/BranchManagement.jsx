import { useState } from "react";
import Header from "../Header/Header";
import ListCard from "../../components/ListCard/ListCard";
import styles from "./BranchManagement.module.css";
import AddFloatingButton from "../../components/AddFloatingButton/AddFloatingButton";
import NavigateTo from "../../functions/NavigateTo";

const branches = [
	{
		code: "CP",
		name: "Connaught Place",
		members: "142 Members",
		revenue: "₹82,400 revenue",
		plans: "5 Plans",
	},
	{
		code: "GK",
		name: "Greater Kailash",
		members: "25 Members",
		revenue: "₹45,000 revenue",
		plans: "3 Plans",
		active: true,
	},
	{
		code: "DW",
		name: "Dwarka Sector 12",
		members: "88 Members",
		revenue: "₹64,200 revenue",
		plans: "4 Plans",
	},
	{
		code: "SK",
		name: "Saket Metro",
		members: "56 Members",
		revenue: "₹38,000 revenue",
		plans: "2 Plans",
	},
	{
		code: "RK",
		name: "R.K. Puram",
		members: "12 Members",
		revenue: "₹14,500 revenue",
		plans: "1 Plan",
	},
];


const payments = [
	{
		id: 1,
		title: "Rahul Jaiswal",
		subTitle: "#GM-902 • UPI",
		value: "₹ 3,500",
		subValue: "Oct 24, 10:30 AM",
	},
	{
		id: 2,
		title: "Ananya Singh",
		subTitle: "#GM-844 • Cash",
		value: "₹ 5,000",
		subValue: "Oct 23, 04:15 PM",
	},
	{
		id: 3,
		title: "Mohit Kapoor",
		subTitle: "#GM-712 • Card",
		value: "₹ 1,200",
		subValue: "Oct 23, 11:00 AM",
	},
	{
		id: 4,
		title: "Priya Verma",
		subTitle: "#GM-956 • UPI",
		pill: "₹ 2,400|success",
		subValue: "Oct 22, 06:45 PM",
	},
	{
		id: 5,
		title: "Suresh Das",
		subTitle: "#GM-432 • Cash",
		value: "₹ 12,000",
		subValue: "Oct 22, 02:20 PM",
	},
	{
		id: 6,
		title: "Rohan Bhalla",
		subTitle: "#GM-102 • Card",
		value: "₹ 4,500",
		subValue: "Oct 21, 09:15 AM",
	},
];

const BranchManagement = () => {
	const [expandedId, setExpandedId] = useState(null);

	function toggleExpanded(memberId) {
		setExpandedId((currentExpandedId) =>
			currentExpandedId === memberId ? null : memberId
		);
	}
	return (
		<div >
			{/* Main */}
			<main className={styles.Bm__main}>
				{/* Title & Search */}
				<Header title="Branches" subtitle="24 recent" handleSearch={() => { }} />

				{/* Branch List */}
				<div className={styles.Bm__branchList}>
					{
						payments.map((payment, index) => (
							<ListCard key={index} {...payment} isExpandBranch={expandedId === payment.id} toggleExpand={toggleExpanded} />
						))
					}
				</div>
			</main>

			{/* Floating Button */}
			<AddFloatingButton onClick={() => { NavigateTo("/app/create-branch") }} />

		</div>
	);
};

export default BranchManagement;