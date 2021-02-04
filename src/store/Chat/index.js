import api from 'boot/api'

const actions = {
  sendMessage (context, data) {
    return new Promise((resolve, reject) => {
      api.post('telegram_api/send_message/', data)
        .then((response) => {
          console.log(response)
          resolve(response)
        })
        .catch((error) => {
          console.log(error)
          console.log(error.response)
          reject(error)
        })
    })
  }
}

export default {
  namespaced: true,
  actions
}
