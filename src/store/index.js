import Vue from 'vue'
import Vuex from 'vuex'
import blog from './Blog'
import rates from './Rates'
import auth from './Auth'

// import example from './module-example'

Vue.use(Vuex)

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      blog, rates, auth
    },
    strict: process.env.DEBUGGING
  })

  return Store
}
