import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Categories from './components/Categories.vue'
import ItemList from './components/ItemList.vue'
import Item from './components/Item.vue'
import AddItemTestimonial from './components/AddItemTestimonial.vue'
import Cart from './components/Cart.vue'
import Checkout from './components/Checkout.vue'
import TestimonialsPage from './components/TestimonialsPage.vue'
import AddTestimonial from './components/AddTestimonial.vue'
import OrderSuccess from './components/OrderSuccess.vue'
import OrderFail from './components/OrderFail.vue'


Vue.use(Router)


export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior () {
    return { x: 0, y: 0 }
  },
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
      name: 'add_item_testimonial',
      component: AddItemTestimonial
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
    {
      path: '/testimonials',
      name: 'testimonials',
      component: TestimonialsPage
    },
    {
      path: '/add_testimonial',
      name: 'add_testimonial',
      component: AddTestimonial
    },
    {
      path: '/order_success',
      name: 'order_success',
      component: OrderSuccess
    },
    {
      path: '/order_fail',
      name: 'order_fail',
      component: OrderFail
    },
  ],  
})
