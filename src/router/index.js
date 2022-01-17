import Vue from 'vue'
import VueRouter from 'vue-router'

const routerOptions = [
  {
    path: '/',
    name: 'Home',
    componentPath: 'HelloWorld'
  },
  {
    path: '/newpage',
    name: 'NewPage',
    componentPath: 'newpage/NewPage'
  },
  {
    path: '/newpage',
    name: 'NewPage',
    componentPath: 'newpage/NewPage'
  },
  {
    path: '/mixinexample',
    name: 'MixinsExample',
    componentPath: 'MixinsExample/MixinExample'
  },
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
