import Vue from 'vue'
import App from './App.vue'
import { createProvider } from './vue-apollo'
import filters from './filters'
Vue.config.productionTip = false
for (const [key, value] of Object.entries(filters)) {
  Vue.filter(key,value)
}
new Vue({
  apolloProvider: createProvider(),
  render: h => h(App)
}).$mount('#app')
