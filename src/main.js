import Vue from 'vue'
import './plugins/vuetify'
import './plugins/vue-snackbar'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

// css
require('./assets/css/animations.css')

// utils
import loadGlobalMixin from './utils/globalMixins'

Vue.use(loadGlobalMixin)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
