import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import Lightbox from 'vue-easy-lightbox'

Vue.config.productionTip = false
Vue.use(Lightbox)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
