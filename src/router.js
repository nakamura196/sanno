import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'
import Check from './views/Check.vue'

Vue.use(Router)

export default new Router({
  //mode: 'history',
  //base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/check',
      name: 'check',
      component: Check
    }
  ]
})
