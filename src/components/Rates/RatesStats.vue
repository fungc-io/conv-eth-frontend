<template>
    <div>
        <div class="row" v-if="pairs">
            <div class="col">
                <div class="d-flex">
                    <span class="rate">1 CONV = {{pairs[0].token0Price | ETH}}</span>
                    <span class="rate">1 ETH = {{pairs[0].token1Price | CONV}}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import gql from 'graphql-tag'
export default {
    name: "RatesStats",
    apollo:{
        pairs:{
            query: gql`query {
                pairs {
                    id
                    token0Price
                    token1Price
                }
            }`
        },
    }
}
</script>
<style lang="scss" scoped>
span.rate{
    display: block;
    padding: 0.2rem 0.5rem;
    border-radius: 3px;
    border: 1px solid #d8dbe0;
    background-color: white;
    margin-bottom: 1rem;
    margin-top: 1rem;
    &:not(:last-of-type){
        margin-right: 0.5rem;
    }
}
</style>