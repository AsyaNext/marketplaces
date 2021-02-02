import { telegramApi } from 'boot/api'

const actions = {
  sendMessage (context, data) {
    return new Promise((resolve, reject) => {
      telegramApi.post('send_message/', data)
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
  actions
}
