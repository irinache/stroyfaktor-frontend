import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Categories from './components/Categories.vue'
import ItemList from './components/ItemList.vue'
import Item from './components/Item.vue'
import AddItemTestimonial from './components/AddItemTestimonial.vue'
import Login from './components/Login.vue'
import Registration from './components/Registration.vue'
import ForgotPassword from './components/ForgotPassword.vue'
import Cart from './components/Cart.vue'
import Checkout from './components/Checkout.vue'

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
    {
      path: '/item_list/item',
      name: 'item',
      component: Item
    },
    {
      path: '/item_list/item/add_testimonial',
      name: 'add_testimonial',
      component: AddItemTestimonial
    },  
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/registration',
      name: 'registration',
      component: Registration
    },  
    {
      path: '/forgot-password',
      name: 'forgot-password',
      component: ForgotPassword
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: Checkout
    },
  ],
  /*scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }*/
})
