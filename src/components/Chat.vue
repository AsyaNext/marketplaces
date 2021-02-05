<template>
  <div class="chat fixed-bottom-right">
    <q-btn
      flat
      rounded
      v-show="!showDialog"
      icon="img:icons/icon-chat.svg"
      class="q-py-xs chat-btn bg-purple-2 text-main cursor-pointer"
      @click="showDialog = true"
    />
    <q-dialog
      v-model="showDialog"
      seamless
      transition-show="slide-up"
      transition-hide="slide-down"
    >
      <q-card class="chat-dialog fixed-bottom-right border-box bg-purple-1">
        <q-card-section class="row items-end q-pt-md q-py-none">
          <q-space />
          <q-btn icon="close" color="purple-10" flat round dense @click="closeDialog" />
        </q-card-section>
        <q-card-section v-if="!sendingSuccess" class="column items-center text-purple-10 text-center">
          <div class="q-mx-md q-mb-lg chat-title font-montserrat__semi-bold">Проконсультируйтесь с нашим специалистом</div>
          <q-input
            ref="name"
            dense
            standout="bg-purple-2 text-grey-9"
            v-model="user.real_name"
            placeholder="Ваше имя"
            class="q-mx-lg chat-input font-montserrat__semi-bold text-main text-grey-9 border-box"
            :lazy-rules="true"
            :rules="[
              $rules.required('Это обязательное поле')
            ]"
          />
          <q-input
            ref="username"
            dense
            standout="bg-purple-2 text-grey-9"
            v-model="user.username"
            placeholder="Ваш email или ник в Telegram"
            class="q-mx-lg chat-input font-montserrat__semi-bold text-main text-grey-9 border-box"
            :lazy-rules="true"
            :rules="[
              val => val.match('^@[\\w-]') || val.match('[0-9a-z_-]+@[0-9a-z_-]+\\.[a-z]{2,5}') || 'Неправильный ник или email',
              $rules.required('Это обязательное поле')
            ]"
          />
          <q-input
            ref="message"
            dense
            type="textarea"
            standout="bg-purple-2 text-grey-9"
            v-model="user.message"
            placeholder="Опишите проблему"
            class="q-mx-lg chat-input font-montserrat__semi-bold text-main text-grey-9 border-box"
            :lazy-rules="true"
            :rules="[
              $rules.required('Это обязательное поле')
            ]"
          />
          <q-btn
            no-caps
            flat
            class="chat-btn__send border-box bg-purple-5 font-montserrat__bold text-white text-main"
            label="Отправить сообщение"
            @click="send"
          />
          <div v-show="warning" class="text-center text-red text-caption font-avenir__regular">Произошла ошибка</div>
        </q-card-section>
        <q-card-section v-else class="text-purple-10 text-center">
          <div class="q-mb-lg chat-title font-montserrat__semi-bold">Сообщение отправлено, Вам ответят на него по почте или в Telegram</div>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Chat',
  props: {
    widthWindow: Number
  },
  data () {
    return {
      warning: false,
      showDialog: false,
      sendingSuccess: false,
      user: {
        real_name: '',
        username: '',
        message: ''
      }
    }
  },
  methods: {
    ...mapActions({
      sendMessage: 'chat/sendMessage'
    }),
    send () {
      const valid = this.$refs.name.validate() && this.$refs.username.validate() && this.$refs.message.validate()
      if (valid) {
        this.sendMessage(this.user)
          .then(() => {
            this.warning = false
            this.sendingSuccess = true
          })
          .catch(() => {
            this.warning = true
          })
      }
    },
    closeDialog () {
      this.user.real_name = ''
      this.user.username = ''
      this.user.message = ''
      this.sendingSuccess = false
      this.showDialog = false
    }
  }
}
</script>

<style lang="scss">
.chat {
  right: 30px;
  bottom: 30px;
  z-index: 2500;
  &-dialog {
    right: 30px;
    bottom: 30px;
  }
  &-title {
    font-size: 24px;
  }
  &-input {
    max-width: 355px;
    width: 100%;
    textarea {
      color: #212121 !important;
      height: auto;
    }
    .q-field__append {
      display: none;
    }
    .q-field__control {
      background: #EEE3FD !important;
      box-shadow: none !important;
      border-radius: 11px;
      input {
        color: #212121 !important;
        height: 44px;
      }
    }
  }
  &-btn__send {
    margin-top: 30px;
    max-width: 355px;
    width: 100%;
    height: 44px;
    .q-btn__wrapper {
      min-height: auto;
    }
  }
}
@media (max-width: 550px) {
  .chat {
    right: 30px;
    bottom: 30px;
    &-title {
      margin: 0 0 24px;
    }
    &-dialog {
      right: 0;
      bottom: 0;
      border-radius: 0 !important;
    }
    &-input {
      margin: 0;
    }
  }
}
@media (max-width: 340px) {
  .chat {
    &-input {
      width: 275px;
    }
  }
}
</style>
