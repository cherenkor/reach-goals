import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import VueFirestore from 'vue-firestore';

// plugins
import './plugins/vuetify'
import './plugins/vue-snackbar'

// css
require('./assets/css/animations.css')

// utils
import loadGlobalMixin from './utils/globalMixins'

Vue.use(VueFirestore);
Vue.use(loadGlobalMixin)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
