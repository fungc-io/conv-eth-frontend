<template>
  <div class="hello">
    <h1>{{ prices }}</h1>
    
  </div>
</template>

<script>
import gql from 'graphql-tag'
export default {
  name: 'HelloWorld',
  apollo:{
    prices: gql`query {
      prices {
        id
        ethPriceUSDT
        timestamp
      }
    }`,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
