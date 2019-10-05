import Vue from 'vue'

import App from '@/App.vue'
import formatDateTime from '@/lib/datetime'

Vue.config.productionTip = false

Vue.filter('toTextFromNow', content => formatDateTime(content))

new Vue({
  render: h => h(App),
}).$mount('#app')
