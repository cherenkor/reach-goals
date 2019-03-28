import Vue from 'vue'
import VueSnackbar from 'vue-snack'
import 'vue-snack/dist/vue-snack.min.css' // https://github.com/zerodois/vue-snack

Vue.use(VueSnackbar, {
  position: 'bottom-right',
  time: 6000
})