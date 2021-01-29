import api from '../../boot/api'
import Cookies from 'quasar'

const state = {
  accessToken: '',
  refreshToken: '',
  email: ''
}

const mutations = {
  AUTH_SUCCESS (state, payload) {
    state.accessToken = payload.access
    state.refreshToken = payload.refresh
  },
  UPDATE_TOKEN (state, payload) {
    state.accessToken = payload.access
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
      api.post('auth/jwt/create', data)
        .then((response) => {
          Cookies.set('accessToken', response.data.access)
          Cookies.set('refreshToken', response.data.refresh)
          api.defaults.headers.common.Authorization = `Bearer ${response.data.access}`
          commit('AUTH_SUCCESS', response.data)
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  checkToken () {
    return new Promise((resolve, reject) => {
      api.post('auth/jwt/verify', {
        token: Cookies.get('access-token')
      })
        .then((response) => {
          if (response.data.detail === 'Token is invalid or expired') {
            Cookies.remove('access-token')
            delete api.defaults.headers.common.Authorization
            reject(response)
          }
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  updateToken ({ commit }) {
    return new Promise((resolve, reject) => {
      api.post('auth/jwt/refresh', {
        refresh: Cookies.get('refresh-token')
      })
        .then((response) => {
          if (response.data.detail === 'Token is invalid or expired') {
            Cookies.remove('refresh-token')
            reject(response)
          }
          if (response.data.access) {
            Cookies.set('accessToken', response.data.access)
            api.defaults.headers.common.Authorization = `Bearer ${response.data.access}`
            commit('UPDATE_TOKEN', response.data.access)
            resolve(response)
          }
        })
        .catch((error) => {
          Cookies.remove('refresh-token')
          reject(error)
        })
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
