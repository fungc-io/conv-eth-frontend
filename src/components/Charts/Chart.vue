<template>
	<div class="py-3">
		<canvas id="chart-volume" ref="chart"></canvas>
	</div>
</template>
.
<script>
import Chart from "chart.js/auto";
import dayjs from "dayjs";
export default {
	name: "ChartPrice",
	props: {
		chartData: Array,
		chartType: {
			type: String,
			default: "bar",
		},
	},
	data() {
		return {
			chartConfig: null,
			chart: null,
		};
	},
	methods: {
		drawChart() {
			if (!this.chartData) return;
			let labels = [];
			let chartDataset = [];
			// transform chart data
			let chartData = [...this.chartData];
			chartData.reverse().forEach((data) => {
				labels.push(dayjs(data.timestamp * 1000).format("MM/DD HH:mm"));
				chartDataset.push(data.value);
			});
			this.chartConfig = {
				type: this.chartType,
				data: {
					labels: labels,
					datasets: [
						{
							backgroundColor: "rgba(151, 187, 205, 0.5)",
							borderColor: "rgba(151, 187, 205, 0.8)",
							highlightFill: "rgba(151, 187, 205, 0.75)",
							highlightStroke: "rgba(151, 187, 205, 1)",
							data: chartDataset,
						},
					],
				},
				options: {
					responsive: true,
					plugins: {
						legend: {
							display: false,
						},
						tooltip: {
							callbacks: {
								label: function(context) {
									let label = context.dataset.label || ""
									if (label) label += ": ";
									if (context.parsed.y !== null) {
										let num = Number(context.parsed.y)
										label += num < 0.001 ? num.toPrecision(3) : num
									}
									return label;
								},
							},
						},
					},
					scales: {
						y: {
							ticks: {
								callback: function(value) {
									let num = Number(value);
									return num < 0.001 ? num.toPrecision(3) : num;
								},
							},
						},
					},
				},
			};
			let ctx = this.$refs.chart;
			if (!this.chart) this.chart = new Chart(ctx, this.chartConfig);
			else this.chart.update();
		},
	},
	mounted() {
		this.drawChart();
	},
};
</script>
