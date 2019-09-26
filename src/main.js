import Vue from 'vue'

import App from '@/App.vue'
import { formatDate } from './lib/filters'

Vue.config.productionTip = false

Vue.filter('toTextFromNow', content => {
  return formatDate(content)
})

new Vue({
  render: h => h(App),
}).$mount('#app')
