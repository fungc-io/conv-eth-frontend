<template>
    <div class="card w-100">
        <div class="card-header">
            <div class="d-flex flex-column flex-lg-row justify-content-between">
                <div>Transactions</div>
                <div>
                    <ul class="nav mt-2 mt-lg-0">
                        <li class="nav-item"><a class="pl-0 py-0 nav-link disabled" href="#">All</a></li>
                        <li class="nav-item active"><a class="py-0 nav-link active" href="#">Swaps</a></li>
                        <li class="nav-item"><a class="py-0 nav-link disabled" href="#">Mint</a></li>
                        <li class="nav-item"><a class="pr-0 py-0 nav-link disabled" href="#">Burn</a></li>
                      </ul>
                </div>
            </div>
        </div>
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
<style lang="scss" scoped>
.nav .nav-link.active{
    font-weight: 700;
}
</style>