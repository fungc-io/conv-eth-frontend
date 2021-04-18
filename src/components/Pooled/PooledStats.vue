<template>
    <div class="row" v-if="pairs">
        <div class="col">
            <pooled-widget title="ETH Pooled" :icon="icons.eth">{{pairs[0].reserve0|ETH}}</pooled-widget>
        </div>
        <div class="col">
            <pooled-widget title="CONV Pooled" :icon="icons.conv">{{pairs[0].reserve1|CONV}}</pooled-widget>
        </div>
        <div class="col">
            <pooled-widget title="Total Pooled" :icon="icons.usd">{{pairs[0].reserveUSD|USD}}</pooled-widget>
        </div>
    </div>
</template>
<script>
import gql from 'graphql-tag'
import PooledWidget from './PooledWidget.vue'
export default {
    name: "PooledStats",
    components: {PooledWidget},
    data(){
        return {
            icons: {
                eth: require('@/assets/coin-icons/ETH.png'),
                conv: require('@/assets/coin-icons/CONV.png'),
                usd: require('@/assets/coin-icons/USD.png')
            }
        }
    },
    apollo:{
        pairs:{
            query: gql`query {
                pairs {
                    id
                    reserve0
                    reserve1
                    reserveUSD
                }
            }`
        }
    }
}
</script>