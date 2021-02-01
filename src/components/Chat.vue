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
      class="chat-dialog"
    >
      <q-card class="fixed-bottom-right no-border-radius bg-purple-1">
        <q-card-section class="row items-end q-pt-md q-py-none">
          <q-space />
          <q-btn icon="close" color="purple-10" flat round dense @click="showDialog = false" />
        </q-card-section>
        <q-card-section class="text-purple-10 text-center">
          <div class="q-mb-lg chat-title font-montserrat__semi-bold">Проконсультируйтесь с нашим специалистом</div>
          <q-input
            dense
            standout="bg-purple-2 text-grey-9"
            v-model="user.name"
            placeholder="Ваше имя"
            class="q-mx-lg chat-input font-montserrat__semi-bold text-main text-grey-9 border-box"
          />
          <q-input
            dense
            standout="bg-purple-2 text-grey-9"
            v-model="user.contact"
            placeholder="Ваш email или ник в Telegram"
            class="q-mx-lg chat-input font-montserrat__semi-bold text-main text-grey-9 border-box"
          />
          <q-input
            dense
            type="textarea"
            standout="bg-purple-2 text-grey-9"
            v-model="user.message"
            placeholder="Опишите проблему"
            class="q-mx-lg chat-input font-montserrat__semi-bold text-main text-grey-9 border-box"
          />
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
export default {
  name: 'Chat',
  data () {
    return {
      showDialog: false,
      user: {
        name: '',
        contact: '',
        message: ''
      }
    }
  }
}
</script>

<style lang="scss">
.chat {
  right: 30px;
  bottom: 30px;
  z-index: 10000;
  &-title {
    font-size: 20px;
  }
  &-input {
    margin-bottom: 20px;
    &:not(:last-child) {
      .q-field__control {
        height: 44px;
      }
    }
    .q-field__control {
      background: #EEE3FD !important;
      box-shadow: none !important;
      border-radius: 11px;
      input {
        color: #212121 !important;
      }
    }
  }
}
</style>
