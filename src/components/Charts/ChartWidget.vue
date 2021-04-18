<template>
	<div class="card">
		<transition name="fade">
			<loading-curtain v-if="$apollo.loading" />
		</transition>
		<div class="card-body" v-if="hourDatas">
			<div class="d-flex flex-column flex-lg-row justify-content-between">
				<div>
					<h4 class="card-title mb-0">{{ curView.label }}</h4>
					<div class="small text-muted">Past 24 Hours</div>
				</div>
				<div class="btn-toolbar mt-2 my-lg-auto">
					<div class="btn-group btn-group-toggle mx-auto" v-if="curView">
						<label class="btn btn-outline-primary" v-for="option in options" :key="option.value"
							:class="{ active: curView.value == option.value }">
							<input type="radio" name="cur-view" :id="option.value" v-model="curView" :value="option" />
							{{ option.label }}
						</label>
					</div>
				</div>
			</div>
			<div class="c-chart-wrapper">
				<chart v-show="curView.value == 'volume'" :chartData="volumeDatas" />
				<chart v-show="curView.value == 'token0Price'" :chartData="token0PriceDatas" chartType="line" />
				<chart v-show="curView.value == 'token1Price'" :chartData="token1PriceDatas" chartType="line" />
			</div>
		</div>
		<div class="card-footer">
			<div class="row">
				<div class="col" v-if="volume24Hrs">
					<small class="text-muted">Volume (past 24 hours)</small>
					<div class="text-value-lg">{{ volume24Hrs | USD }}</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import gql from "graphql-tag";
import Chart from './Chart.vue';
import LoadingCurtain from '../LoadingCurtain.vue'
export default {
	name: "ChartWidget",
	components: { Chart, LoadingCurtain},
	data() {
		return {
			options: [
				{
					label: "Volume",
					value: "volume",
				},
				{
					label: "ETH/CONV",
					value: "token0Price",
				},
				{
					label: "CONV/ETH",
					value: "token1Price",
				},
			],
			curView: null,
            volumeDatas: null,
            volume24Hrs: "",
            token0PriceDatas: null,
            token1PriceDatas: null
		};
	},
	apollo: {
		hourDatas: {
			query: gql`
				query {
					hourDatas(first: 24, orderBy: hour, orderDirection: desc) {
						id
						hour
						reserve0
						reserve1
						token0Price
						token1Price
						hourlyTxn
						hourlyVolumeUSD
						hourlyVolumeToken0
					}
				}
			`,
            update: function(data){
                let hourDatas = data.hourDatas
                let volumeDatas = []
                let token0PriceDatas = []
                let token1PriceDatas = []
                hourDatas.forEach(data => {
                    let timestamp = data.hour
                    volumeDatas.push({timestamp, value: data.hourlyVolumeUSD})
                    token0PriceDatas.push({timestamp, value: data.token0Price})
                    token1PriceDatas.push({timestamp, value: data.token1Price})
                });
                this.volume24Hrs = hourDatas.reduce((sum, data) => {
					return (sum += Number(data.hourlyVolumeUSD));
				}, 0);
                this.volumeDatas = volumeDatas
                this.token0PriceDatas = token0PriceDatas
                this.token1PriceDatas = token1PriceDatas
                return hourDatas
            }
		},
	},
	created() {
		this.curView = this.options[0];
	},
};
</script>