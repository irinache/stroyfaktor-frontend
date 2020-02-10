import Vue from 'vue'
import Router from 'vue-router'
import SliderBlock from './components/SliderBlock.vue'


Vue.use(Router)


export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'main',
      component: SliderBlock
    },    
  ],
  /*scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }*/
})
