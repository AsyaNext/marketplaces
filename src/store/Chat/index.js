import api from 'boot/api'

const actions = {
  sendMessage (context, data) {
    return new Promise((resolve, reject) => {
      api.post('telegram_api/send_message/', data)
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
