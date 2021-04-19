<template>
	<div>
		<div v-if="!isConnected">
			<button class="btn btn-outline-primary btn-pill" v-if="hasMetaMask" @click="connectMetaMask"
				:disabled="waitingForConnection">
				<img class="c-icon mr-1" :src="require('@/assets/metamask-fox.svg')" />
				Connect <span class="d-none d-lg-inline">with MetaMask</span>
			</button>
			<span v-else>MetaMask not found.
				<a :href="metaMaskUrl" target="_blank">
					Get MetaMask!
				</a></span>
		</div>
		<div v-else>
			<div v-if="isEthMainnet">
				<div class="connection">
					<span class="icon success"></span> mainnet connected ({{
						account | address
					}})
				</div>
			</div>
			<div v-else>
				<div class="connection">
					<span class="icon warning"></span> Please connect to mainnet
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: "MetaMaskConnection",
	data() {
		return {
			hasMetaMask: false,
			metaMaskUrl: "https://metamask.io/",
			account: null,
			waitingForConnection: false,
			isConnected: false,
			chainId: "",
		};
	},
	computed: {
		isEthMainnet() {
			return this.chainId === "0x1";
		},
	},
	filters: {
		address: function(value) {
			if (!value) return "";
			let str = String(value);
			return str.substring(0, 6) + "..." + str.substring(str.length - 4);
		},
	},
	methods: {
		async connectMetaMask() {
			const ethereum = window.ethereum;
			try {
				this.waitingForConnection = true;
				const accounts = await ethereum.request({
					method: "eth_requestAccounts",
				});
				const account = accounts[0];
				this.account = account;
				this.isConnected = ethereum.isConnected();
				this.getDataFromEthereum();
			} catch (err) {
				if (err.code == 4001) {
					console.log(err.message);
				}
			} finally {
				this.waitingForConnection = false;
			}
		},
		async getDataFromEthereum() {
			if (!this.isConnected) return;
			const ethereum = window.ethereum;
			this.chainId = await ethereum.request({ method: "eth_chainId" });
		},
	},
	created() {
		if (typeof window.ethereum !== "undefined" && window.ethereum.isMetaMask) {
			console.log("MetaMask is installed!");
			this.hasMetaMask = true;
			// this.isConnected = window.ethereum.isConnected();
			// if (this.isConnected) this.getDataFromEthereum();
		}
	},
};
/***
 * TODO: Listen to events from ethereum API, connection status should change when user change network/account
 */
</script>
<style lang="scss" scoped>
.connection {
	.icon {
		display: inline-block;
		width: 0.375rem;
		height: 0.375rem;
		background-color: #999;
		border-radius: 50%;
		margin-right: 0.2rem;
		margin-bottom: 0.1rem;
		&.success {
			background-color: rgb(0, 209, 112);
			box-shadow: 0px 0px 5px -1px rgb(0, 160, 40);
		}
		&.warning {
			background-color: rgb(245, 188, 0);
			box-shadow: 0px 0px 5px -1px rgb(160, 131, 0);
		}
	}
}
</style>
