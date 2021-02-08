import api from 'boot/api'
import { Cookies } from 'quasar'

const state = {
  accessToken: '',
  refreshToken: '',
  email: ''
}

const getters = {
  email: state => state.email
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
          commit('GET_EMAIL', response.data.email)
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
  activateUser ({ commit }, data) {
    return new Promise((resolve, reject) => {
      api.post('auth/users/activation/', data)
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
          Cookies.set('access-token', response.data.access)
          Cookies.set('refresh-token', response.data.refresh)
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
          resolve(response)
        })
        .catch((error) => {
          if (error.response.data.detail) {
            Cookies.remove('access-token')
            delete api.defaults.headers.common.Authorization
          }
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
          Cookies.set('access-token', response.data.access)
          api.defaults.headers.common.Authorization = `Bearer ${response.data.access}`
          commit('UPDATE_TOKEN', response.data.access)
          resolve(response)
        })
        .catch((error) => {
          Cookies.remove('refresh-token')
          reject(error)
        })
    })
  },
  logout () {
    Cookies.remove('access-token')
    Cookies.remove('refresh-token')
    delete api.defaults.headers.common.Authorization
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
