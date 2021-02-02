import { api } from 'boot/api'

const state = {
  articles: null,
  countArticles: null,
  categories: null,
  specArticle: null
}

const getters = {
  articles: state => state.articles,
  countArticles: state => state.countArticles,
  categories: state => state.categories,
  specArticle: state => state.specArticle
}

const mutations = {
  GET_ARTICLES (state, payload) {
    state.articles = payload.results
    state.countArticles = payload.count
  },
  GET_CATEGORIES (state, payload) {
    state.categories = payload
  },
  GET_SPEC_ARTICLE (state, payload) {
    state.specArticle = payload
  }
}

const actions = {
  getArticles ({ commit }, data) {
    return new Promise((resolve, reject) => {
      api.get('articles/', {
        params: data
      })
        .then((response) => {
          console.log(data)
          commit('GET_ARTICLES', response.data)
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  getCategories ({ commit }) {
    return new Promise((resolve, reject) => {
      api.get('articles/categories')
        .then((response) => {
          commit('GET_CATEGORIES', response.data)
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  getSpecArticle ({ commit }, data) {
    return new Promise((resolve, reject) => {
      api.get(`articles/${data}`)
        .then((response) => {
          console.log(response)
          commit('GET_SPEC_ARTICLE', response.data)
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
