import Vue from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import router from './router'

import store from './store'
//import { createApp } from 'vue'

//createApp(App).use(store).use(router).mount('#app')



Vue.config.productionTip = false

Vue.component('add-to-cart', require('./components/AddToCart.vue').default);
Vue.component('mini-cart', require('./components/MiniCart.vue').default);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
