import Chart from "react-apexcharts";
import styles from "./RevenueChart.module.css";

export default function RevenueChart() {
	const options = {
		chart: {
			type: "line",
			height: 260,
			toolbar: { show: false },
			zoom: { enabled: false },
			background: "transparent",
		},

		stroke: {
			curve: "smooth",
			width: 3,
		},

		colors: [
			"rgb(22, 244, 55)",
			"rgb(244, 174, 22)",
		],

		dataLabels: {
			enabled: false,
		},

		grid: {
			borderColor: "rgba(255,255,255,0.08)",
			strokeDashArray: 5,
		},

		markers: {
			size: 0,
			hover: {
				size: 5,
			},
		},

		xaxis: {
			categories: [
				"1-5",
				"6-10",
				"11-15",
				"16-20",
				"21-25",
				"26-30",
			],

			labels: {
				style: {
					colors: "var(--on-surface-variant)",
					fontSize: "12px",
				},
			},

			axisBorder: {
				show: false,
			},

			axisTicks: {
				show: false,
			},
		},

		yaxis: {
			labels: {
				style: {
					colors: "var(--on-surface-variant)",
				},
			},
		},

		legend: {
			position: "top",
			horizontalAlign: "right",

			labels: {
				colors: "var(--on-surface)",
			},
		},

		tooltip: {
			theme: "dark",
		},
	};

	const series = [
		{
			name: "Previous Month",
			data: [3200, 4100, 3800, 5200, 6100, 7200],
		},
		{
			name: "Current Month",
			data: [4200, 4800, 4600, 6300, 7100, 3000],
		},
	];

	return (
		<div className={styles.container}>
			<Chart
				options={options}
				series={series}
				type="line"
				height={260}
			/>
		</div>
	);
}