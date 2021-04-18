<template>
    <div class="card w-100">
        <div class="card-header">Transactions</div>
        <div class="card-body">
            <div class="row">
                <div class="col">
                    <transactions-swap />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import TransactionsSwap from "./TransactionsSwap.vue"

export default {
    name: "TransactionsWidget",
    components: { TransactionsSwap },
}
</script>