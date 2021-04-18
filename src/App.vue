<template>
  <div id="app" class="c-app">
    <div class="c-body">
      <div class="c-main">
        <HelloWorld/>
      </div>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss">
@import "./css/core-ui/style.min.css";
</style>
