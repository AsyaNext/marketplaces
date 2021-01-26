import axios from 'axios'
const API_URL = 'http://192.162.240.96:8014/api/'

const api = axios.create({
  baseURL: API_URL
})

export default api
