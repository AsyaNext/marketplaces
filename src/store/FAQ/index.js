import { api } from 'boot/api'

const state = {
  categories: null,
  specCategory: null,
  article: null
}

const getters = {
  categories: state => state.categories,
  specCategory: state => state.specCategory,
  article: state => state.article
}

const mutations = {
  GET_CATEGORIES (state, payload) {
    state.categories = payload
  },
  GET_SPEC_CATEGORY (state, payload) {
    state.specCategory = payload
  },
  GET_ARTICLE (state, payload) {
    state.article = payload
  }
}

const actions = {
  getCategories ({ commit }) {
    return new Promise((resolve, reject) => {
      api.get('faq')
        .then((response) => {
          commit('GET_CATEGORIES', response.data)
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  getSpecCategory ({ commit }, data) {
    return new Promise((resolve, reject) => {
      api.get(`faq/${data}`)
        .then((response) => {
          commit('GET_SPEC_CATEGORY', response.data)
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  getArticle ({ commit }, data) {
    return new Promise((resolve, reject) => {
      api.get(`faq/article/${data}`)
        .then((response) => {
          commit('GET_ARTICLE', response.data)
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
