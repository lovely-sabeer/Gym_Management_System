import AddFloatingButton from "../../components/AddFloatingButton/AddFloatingButton";
import ListCard from "../../components/ListCard/ListCard";
import NavigateTo from "../../functions/NavigateTo";
import Header from "../Header/Header";
import styles from "./PaymentList.module.css";

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

const PaymentList = () => {
	function handleInputChange(event) {
		console.log(event.target.value);
	}
	return (
		<div>
			{/* Header */}
			<Header title="Payments" subtitle="24 recent" handleSearch={handleInputChange} />
			{/* Payment List */}
			<main className={styles.Pl__list}>
				{payments.map((payment, index) => (
					<ListCard key={index} {...payment} />
				))}
			</main>
			{/* Floating Button */}
			<AddFloatingButton onClick={() => NavigateTo("/app/payment-record")} />
		</div>
	);
};

export default PaymentList;