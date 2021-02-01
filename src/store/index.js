import Vue from 'vue'
import Vuex from 'vuex'
import blog from './Blog'
import rates from './Rates'
import auth from './Auth/auth'
import user from './Auth/user'
import faq from './FAQ'

// import example from './module-example'

Vue.use(Vuex)

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      blog, rates, auth, user, faq
    },
    strict: process.env.DEBUGGING
  })

  return Store
}
