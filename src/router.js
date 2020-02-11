import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'


Vue.use(Router)


export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'main',
      component: Home
    },    
  ],
  /*scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }*/
})
