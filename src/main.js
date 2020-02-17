import Vue from 'vue'
import App from './App.vue'
import router from './router'
import StarRating from 'vue-star-rating'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false

Vue.component('star-rating', StarRating);

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
