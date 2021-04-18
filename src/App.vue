<template>
	<div id="app" class="c-app">
		<div class="c-wrapper">
			<div class="c-body">
				<div class="c-main">
					<div class="container">
						<app-header />
						<rates-stats />
						<pooled-stats />
						<div class="row">
							<div class="col">
								<chart-widget />
							</div>
						</div>
						<div class="row">
							<div class="col"><transactions-widget /></div>
						</div>
						<app-footer />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import PooledStats from "./components/Pooled/PooledStats.vue";
import ChartWidget from "./components/Charts/ChartWidget.vue";
import TransactionsWidget from "./components/Transactions/TransactionsWidget.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import RatesStats from "./components/Rates/RatesStats.vue";
export default {
	name: "App",
	components: {
		TransactionsWidget,
		PooledStats,
		"app-header": Header,
		"app-footer": Footer,
		RatesStats,
		ChartWidget,
	}
};
</script>

<style lang="scss">
@import "./css/core-ui/style.min.css";
@import "./css/transition.css";
</style>
