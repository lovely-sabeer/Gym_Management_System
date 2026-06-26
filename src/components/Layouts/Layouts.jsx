import React, { useState } from 'react'
import Topbar from '../Topbar/Topbar';
import BottomNav from '../BottomNav/BottomNav';
import { Outlet } from 'react-router';
import NavigateTo from '../../functions/NavigateTo';

const styles = {
	content: {
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		background: 'var(--background)',
		marginTop: '50px',
		marginBottom: '150px',
		padding: '18px',
	}
}
export function AppLayout() {
	return (
		<>
			<Topbar />
			<div style={styles.content}>
				<Outlet />
			</div>
			<BottomNav />
		</>
	);
}
export function WebLayout() {
	const [token, setToken] = useState(null);
	function isAuthenticated() {
		const token = localStorage.getItem('token');
		return token !== null;
	}
	if (isAuthenticated()) {
		console.log(token);
		return NavigateTo("/app");
	}
	return (
		<Outlet />
	);
}

export function ProtectedRoute() {
	const token = localStorage.getItem("userLogin");

	return token
		? <Outlet />
		: <Navigate to="/login" replace />;
}

export default function PublicRoute() {
	const token = localStorage.getItem("userLogin");

	return token
		? <Navigate to="/app" replace />
		: <Outlet />;
}