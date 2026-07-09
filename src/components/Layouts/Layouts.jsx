import React, { useState } from 'react'
import Topbar from '../Topbar/Topbar';
import BottomNav from '../BottomNav/BottomNav';
import { Navigate, Outlet } from 'react-router';

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

export function ProtectedRoute() {
	const token = localStorage.getItem("token");
	return token
		? <AppLayout />
		: <Navigate to="/login" replace />;
}

export function PublicRoute() {
	const token = localStorage.getItem("token");
	return token
		? <Navigate to="/app" replace />
		: <Outlet />;
}