<template>
  <div id="app" class="c-app">
    <div class="c-wrapper">
    <div class="c-body">
      <div class="c-main">
        <div class="container">
          <div class="row">
            <div class="col"><transactions-widget /></div>
          </div>
          
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import TransactionsWidget from './components/Transactions/TransactionsWidget.vue'
export default {
  name: 'App',
  components: {
    TransactionsWidget
  }
}
</script>

<style lang="scss">
@import "./css/core-ui/style.min.css";
</style>
