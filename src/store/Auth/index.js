import api from '../../boot/api'
import { Cookies } from 'quasar'

const state = {
  accessToken: '',
  refreshToken: '',
  emailExist: false,
  mobileExist: false,
  email: ''
}

const getters = {
  emailExist: state => state.emailExist,
  mobileExist: state => state.mobileExist
}

const mutations = {
  AUTH_SUCCESS (state, payload) {
    state.accessToken = payload.access
    state.refreshToken = payload.refresh
  },
  UPDATE_TOKEN (state, payload) {
    state.accessToken = payload.access
  },
  EMAIL_EXIST (state, payload) {
    state.emailExist = payload
  },
  MOBILE_EXIST (state, payload) {
    state.mobileExist = payload
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
          if (error.response) {
            if (error.response.data.email) {
              commit('EMAIL_EXIST', true)
            }
            if (error.response.data.mobile) {
              commit('MOBILE_EXIST', true)
            }
          }
          reject(error)
        })
    })
  },
  resendLink ({ commit }, data) {
    return new Promise((resolve, reject) => {
      api.post('auth/users/resend_activation', data)
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
          console.log(response)
          resolve(response)
        })
        .catch((error) => {
          console.log(error)
          reject(error)
        })
    })
  },
  login ({ commit }, data) {
    return new Promise((resolve, reject) => {
      api.post('auth/jwt/create', data)
        .then((response) => {
          console.log(response)
          Cookies.set('access-token', response.data.access)
          Cookies.set('refresh-token', response.data.refresh)
          api.defaults.headers.common.Authorization = `Bearer ${response.data.access}`
          commit('AUTH_SUCCESS', response.data)
          console.log(response)
          resolve(response)
        })
        .catch((error) => {
          console.log(error)
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
            console.log(response)
          } else {
            console.log(response)
            resolve(response)
          }
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
            Cookies.set('access-token', response.data.access)
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
  getters,
  mutations,
  actions
}
