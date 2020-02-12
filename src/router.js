import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Categories from './components/Categories.vue'
import ItemList from './components/ItemList.vue'

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
    {
      path: '/categories',
      name: 'product_categories',
      component: Categories
    },  
    {
      path: '/item_list',
      name: 'item_list',
      component: ItemList
    },  
  ],
  /*scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }*/
})
