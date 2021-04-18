<template>
    <div class="row">
        <div class="col small">
            <span class="muted">Subgraph:
                <a :href="graphUrl" class="text-muted">{{ graphUrl }}</a>
            </span>
            <p>
                Notes: USD amounts are estimated by
                <a href="https://info.uniswap.org/pair/0x0d4a11d5eeaac28ec3f61d100daf4d40471f1852">ETH-USDT</a>
                prices
            </p>
        </div>
    </div>
</template>
<script>
export default {
	name: "Footer",
	data() {
		return {
			graphUrl:
				"https://thegraph.com/explorer/subgraph/fungc-io/conv-eth-uniswap",
		};
	},
};
</script>
