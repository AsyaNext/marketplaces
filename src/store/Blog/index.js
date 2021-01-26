import api from '../../boot/api'

const state = {
  articles: null,
  categories: null
}

const getters = {
  articles: state => state.articles,
  categories: state => state.categories
}

const mutations = {
  GET_ARTICLES (state, payload) {
    state.articles = payload
  },
  GET_CATEGORIES (state, payload) {
    state.categories = payload
  }
}

const actions = {
  getArticles ({ commit }, data) {
    return new Promise((resolve, reject) => {
      api.get('articles', {
        params: data,
        headers: {
          Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjExNzUzNTc3LCJqdGkiOiI1ZjNjNWIxM2NiMjg0MTA3ODI5MDUzNmIyZjhiMjFjMCIsInVzZXJfaWQiOjJ9.oRYoOqUxe-DFZvAXM-Fwkd2m76DdRHRp2c_YemY5J7s'
        }
      })
        .then((response) => {
          commit('GET_ARTICLES', response.data.results)
          console.log(response)
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  getCategories ({ commit }) {
    return new Promise((resolve, reject) => {
      api.get('articles/categories', {
        headers: {
          Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjExNzUzNTc3LCJqdGkiOiI1ZjNjNWIxM2NiMjg0MTA3ODI5MDUzNmIyZjhiMjFjMCIsInVzZXJfaWQiOjJ9.oRYoOqUxe-DFZvAXM-Fwkd2m76DdRHRp2c_YemY5J7s'
        }
      })
        .then((response) => {
          commit('GET_CATEGORIES', response.data)
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
