import axios from 'axios'
const API_URL = 'http://192.162.240.96:8014/api/'
const TELEGRAM_API = 'http://192.162.240.96:8014/api/telegram_api/'

const api = axios.create({
  baseURL: API_URL
})

const telegramApi = axios.create({
  baseURL: TELEGRAM_API
})

export { api, telegramApi }
