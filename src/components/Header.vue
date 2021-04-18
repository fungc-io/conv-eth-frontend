<template>
    <div>
        <div class="d-flex flex-column flex-md-row justify-content-between">
            <div>
                <div class="row">
                    <div class="col">
                        <h1>
                            ETH/CONV Pool
                            <a :href="contractURL" style="white-space:nowrap" target="_blank" class="lead">View
                                Contract</a>
                        </h1>
                    </div>
                </div>
                <div class="row">
                    <div class="col">Last update: {{ lastUpdate }} ({{ timeAgo }})</div>
                </div>
            </div>
            <div class="mt-3 mt-md-2">
                <meta-mask-connection />
            </div>
        </div>
    </div>
</template>
<script>
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);
import MetaMaskConnection from "./MetaMaskConnection.vue";
export default {
	name: "Header",
	components: { MetaMaskConnection },
	data() {
		return {
			contractURL: process.env.VUE_APP_POOL_CONTRACT_URL,
			lastUpdateDate: "",
			lastUpdate: "",
			timeAgo: "",
		};
	},
	methods: {
		updateTimeAgo() {
			this.timeAgo = dayjs(this.lastUpdateDate).fromNow();
		},
	},
	created() {
		this.lastUpdateDate = new Date();
		this.lastUpdate = dayjs(this.lastUpdateDate).format("YYYY-MM-DD HH:mm:ss");
	},
	mounted() {
		this.updateTimeAgo();
		setInterval(this.updateTimeAgo, 60000);
	},
};
</script>
