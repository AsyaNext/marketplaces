import api from '../../boot/api'
import Cookies from 'js-cookie'

const state = {
  token: Cookies.get('token') || '',
  email: ''
}

const getters = {
}

const mutations = {
  AUTH_SUCCESS (state, payload) {
    state.token = payload
  },
  GET_EMAIL (state, payload) {
    state.email = payload
  }
}

const actions = {
  registration ({ commit }, data) {
    return new Promise((resolve, reject) => {
      api.post('auth/users/', data)
        .then((response) => {
          console.log(response)
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  resendLink ({ commit }, data) {
    return new Promise((resolve, reject) => {
      api.post('auth/users/resend_activation/', data)
        .then((response) => {
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  login ({ commit }, data) {
    return new Promise((resolve, reject) => {
      api.post('auth/jwt/create/', data)
        .then((response) => {
          console.log(response)
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
