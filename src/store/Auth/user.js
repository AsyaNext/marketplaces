import api from '../../boot/api'

const state = {
}

const getters = {
}

const mutations = {
}

const actions = {
  resetPassword ({ commit }, data) {
    return new Promise((resolve, reject) => {
      api.post('auth/users/reset_password/', data)
        .then((response) => {
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  resetPasswordConfirm ({ commit }, data) {
    return new Promise((resolve, reject) => {
      api.post('auth/users/reset_password_confirm/', data)
        .then((response) => {
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
