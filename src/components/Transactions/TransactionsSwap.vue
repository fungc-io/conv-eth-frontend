<template>
<div class="table-responsive">
    <table class="table">
        <thead>
            <tr>
                <th>Swaps</th>
                <th>Total Value</th>
                <th>Token Amount</th>
                <th>Token Amount</th>
                <th>Time</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="swap in swaps" :key="swap.id">
                <td><a :href="`https://etherscan.io/tx/${swap.transaction.id}`" target="_blank">Swap {{swap.amount0In!=0?"ETH for CONV":"CONV for ETH"}}</a></td>
                <td>{{swap.amountUSD | USD}}</td>
                <td><span v-if="swap.amount0In!=0">{{swap.amount0In | ETH}}</span>
                <span v-else>{{swap.amount1In | CONV}}</span></td>
                <td><span v-if="swap.amount0Out!=0">{{swap.amount0Out | ETH}}</span>
                <span v-else>{{swap.amount1Out| CONV}}</span></td>
                <td>{{swap.timestamp | fromNow}}</td>
            </tr>
        </tbody>
    </table>
    <nav aria-label="Pagination">
        <ul class="pagination">
            <li class="page-item" :class="{'disabled':!(page > 0)}"><a class="page-link" href="#" @click.prevent="prevPage"><span aria-hidden="true">&laquo;</span></a></li>
            <li class="page-item"><span class="page-link">{{page+1}}</span></li>
            <li class="page-item" :class="{'disabled':!(page < maxPage)}"><a class="page-link" href="#" @click.prevent="nextPage"><span aria-hidden="true">&raquo;</span></a></li>
        </ul>
    </nav>
</div>
</template>

<script>
const MAX_PAGE = Number(process.env.VUE_APP_MAX_PAGE)
const PAGE_SIZE = Number(process.env.VUE_APP_PAGE_SIZE)
import gql from "graphql-tag"
export default {
    name: "TransactionsSwap",
    data(){
        return {
            pageSize: PAGE_SIZE,
            page: 0,
            maxPage: MAX_PAGE
        }
    },
    apollo: {
        swaps: {
            query: gql`query swapsPage($first: Int!, $skip: Int!){
                swaps(first: $first, skip: $skip, orderBy: timestamp, orderDirection: desc) {
                    id
                    timestamp
                    transaction{
                        id
                    }
                    amount0In
                    amount0Out
                    amount1In
                    amount1Out
                    amountUSD
                }
            
            }
            `,
            variables(){
                return{
                    first: this.pageSize,
                    skip: 0
                }
            }
        },
        
    },
    methods:{
        nextPage(){
            if(this.page < this.maxPage)
            this.page++
            this.fetchResult()
        },
        prevPage(){
            if(this.page<=0) return
            this.page--
            this.fetchResult()
        },
        fetchResult(){
            this.$apollo.queries.swaps.fetchMore({
                // New variables
                variables: {
                    skip: this.page*this.pageSize,
                    pageSize: this.pageSize,
                },
                updateQuery: (previousResult, { fetchMoreResult }) => {
                    // No new feed posts
                    if (!fetchMoreResult) return previousResult
                    return {
                        swaps: [
                        ...fetchMoreResult.swaps,
                        ],
                    }
                },
            })
        }
    }
}
</script>