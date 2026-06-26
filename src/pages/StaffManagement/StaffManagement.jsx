import { useState } from "react";
import styles from "./StaffManagement.module.css";
import ListCard from "../../components/ListCard/ListCard";
import Header from "../Header/Header";
import AddFloatingButton from "../../components/AddFloatingButton/AddFloatingButton";
import NavigateTo from "../../functions/NavigateTo";

const staffList = [
	{
		name: "Marcus Chen",
		role: "Senior Trainer • Downtown Branch",
		phone: "+1 (555) 012-3456",
		designation: "Head Personal Trainer",
		expanded: true,
		image:
			"https://lh3.googleusercontent.com/aida-public/AB6AXuDarf7KJa3fEAeopONgs3bp7pq7FuO_G7iV8OZlPvoMUnrphtZLGw22_IjRWenJErDVw3P7fOcDPyLbYTiU3oxPyaZqM0oRtCR1aHTXuw43QfP_IFf4AW5mVspM1Il1xbQDvYGSuNrkd0sXY7IvAB1RsrWA4R1ODbZK66Cq8H5u0MamyKFcgtXsCJ6KF3W4ljK8xg9-gi3jvPHOuQSpnLI7M6VoizmbQBvp_TTNgTu7Lk_uH-d2SaRVA3u0T-NlUQJDKerBm6Q70kmy",
	},
	{
		name: "Sarah Jenkins",
		role: "Manager • Westside Branch",
		image:
			"https://lh3.googleusercontent.com/aida-public/AB6AXuA6Hf7kmmGTlyYa3FjJJfjzlOIRV0bJJNBXh8NvbaaH95oYCBrvvpsWyk1xFzqsRo3MsDG-1y-Ki7YxDfBKitVFkA3GbEzj_PBtjlcJNmOvqk8c5eGDtp5GRdFiP0bpRM7KroOyQWDhpdQcRy9WXT4O0bhDYwxbFAPlS_gej9ZpKA3_PzAWAERJySjxaIZXHK7fMkkDdU876_pQYhjga8M_PqxV4KmTzFKGZVSJZF8uhCDB7gG4ARm7WaYM20b6DoUZpVnmwtxfeO7z",
	},
	{
		name: "Leo Rodriguez",
		role: "Receptionist • Downtown Branch",
		image:
			"https://lh3.googleusercontent.com/aida-public/AB6AXuBPwW8TAyHcSd8-XqIQOlwGMP23pYQS5Lihtuntmram-vimM4L_ICUg8QW3jXJFODe-Ttp596P8IdsUxRpC15RSmj79209eoqqGE9f2Yk_ZVypRX6zDvRLbD0UbLj_ryfjMCg1E90tE4QHUKBZ-678EMONJBJnTIOPFeSlHPvMPenL7cF9jLFfGu14Xh1zkBiyzd8WDM8J1H3HNCq9BghUqeErkpM8zk2AKrVQ-DfBOW9-3VjF7CW34WTvhjpNFWVhtidpvfEAAjPPz",
	},
];


const payments = [
	{
		id: 1,
		title: "Marcus Chen",
		subTitle: "Manager • Westside Branch",
		imag: "https://lh3.googleusercontent.com/aida-public/AB6AXuDarf7KJa3fEAeopONgs3bp7pq7FuO_G7iV8OZlPvoMUnrphtZLGw22_IjRWenJErDVw3P7fOcDPyLbYTiU3oxPyaZqM0oRtCR1aHTXuw43QfP_IFf4AW5mVspM1Il1xbQDvYGSuNrkd0sXY7IvAB1RsrWA4R1ODbZK66Cq8H5u0MamyKFcgtXsCJ6KF3W4ljK8xg9-gi3jvPHOuQSpnLI7M6VoizmbQBvp_TTNgTu7Lk_uH-d2SaRVA3u0T-NlUQJDKerBm6Q70kmy",
	},
	{
		id: 2,
		title: "Sarah Jenkins",
		subTitle: "General Manager • Downtown Club",
		imag: "https://unsplash.com",
	},
	{
		id: 3,
		title: "Vikram Malhotra",
		subTitle: "Fitness Director • Elite Center",
		imag: "https://unsplash.com",
	},
	{
		id: 4,
		title: "Elena Rostova",
		subTitle: "Operations Lead • Northside Studio",
		imag: "https://unsplash.com",
	},
	{
		id: 5,
		title: "Derrick Vance",
		subTitle: "Club Manager • Metro Arena",
		imag: "https://unsplash.com",
	},
]

const StaffManagement = () => {
	const [expandedId, setExpandedId] = useState(null);

	function toggleExpanded(memberId) {
		setExpandedId((currentExpandedId) =>
			currentExpandedId === memberId ? null : memberId
		);
	}
	return (
		<div>
			{/* Main */}
			<Header title="Staff Management" subtitle="24 recent" handleSearch={() => { }} />
			{/* Staff List */}
			<div className={styles.Sm__staffList}>
				{
					payments.map((payment, index) => (
						<ListCard key={index} {...payment} isExpandStaff={expandedId === payment.id} toggleExpand={toggleExpanded} />
					))
				}
			</div>
			<AddFloatingButton onClick={() => NavigateTo("/app/add-staff")} />

		</div>
	);
};

export default StaffManagement;