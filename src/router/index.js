import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './routes'

Vue.use(VueRouter)

export default function (/* { store, ssrContext } */) {
  const Router = new VueRouter({
    scrollBehavior: () => ({ x: 0, y: 0 }),
    routes,

    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE
  })
  Router.beforeEach((to, from, next) => {
    if (to.params.title || localStorage.getItem('titlePage')) {
      document.title = to.params.title || 'Аналитика маркетплейсов'
      to.meta.title = to.params.title
    } else if (to.params.id) {
      document.title = `${to.meta.title} ${to.params.id}` || 'Аналитика маркетплейсов'
    } else {
      document.title = to.meta.title || 'Аналитика маркетплейсов'
    }
    next()
  })

  return Router
}
