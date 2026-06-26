import { Link, useLocation, useNavigate } from "react-router";
import styles from "./BottomNav.module.css";

export default function BottomNav() {
	const navItems = [
		{ label: "Dashboard", icon: "dashboard", path: "/app/dashboard" },
		{ label: "Members", icon: "group", path: "/app/members" },
		{ label: "Staffs", icon: "person_apron", path: "/app/staff-management" },
		{ label: "Branches", icon: "flowchart", path: "/app/branchs" },
		{ label: "Settings", icon: "settings", path: "/app/settings" },
	]

	const location = useLocation();
	const navigate = useNavigate();
	return (
		<nav className={styles.nav}>
			{navItems.map((item, index) => {
				const Icon = item.icon;
				const isActive = location.pathname === item.path;

				return (
					<div
						key={item.label}
						onClick={() => navigate(item.path)}
						className={`${styles.item} ${isActive ? styles.itemActive : styles.itemInactive}`}
						aria-current={isActive ? "page" : undefined}
					>
						<span
							className={`${styles.icon} material-symbols-outlined ${isActive ? styles.iconActive : ""
								}`}
						>
							{item.icon}
						</span>
						<span className={styles.label}>{item.label}</span>
					</div>
				);
			})}
		</nav>
	);
}
