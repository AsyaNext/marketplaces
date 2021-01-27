import api from '../../boot/api'

const state = {
  rates: null
}

const getters = {
  rates: state => state.rates
}

const mutations = {
  GET_RATES (state, payload) {
    state.rates = payload
  }
}

const actions = {
  getRates ({ commit }, data) {
    return new Promise((resolve, reject) => {
      api.get('rates', { params: data })
        .then((response) => {
          commit('GET_RATES', response.data)
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
