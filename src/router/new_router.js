import Vue from 'vue'
import VueRouter from 'vue-router'

const routerOptions = [
  {
    path: '/',
    name: 'Home',
    componentPath: 'Home'
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    componentPath: 'About'
  }
];

const routes = routerOptions.map(route => {
  return {
      ...route,
      component: () => import(`@/components/${route.componentPath}.vue`)
  }
})

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
