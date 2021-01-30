<template>
  <q-dialog v-model="status" persistent>
    <q-card class="send-link">
      <q-card-section class="row items-end q-pb-none">
        <q-space />
        <q-btn icon="close" color="purple-10" flat round dense @click="$emit('close-send-link')" />
      </q-card-section>
      <q-card-section class="send-link-description">
        <div class="font-montserrat__medium text-purple-10 text-center">На указанную почту отправлена ссылка для подтверждения аккаунта</div>
        <div class="q-mt-lg font-montserrat__medium text-body1 text-purple-10 text-center">Не получили письмо?</div>
        <q-btn
          flat
          no-caps
          :disable="disable"
          class="q-mt-sm send-link-btn full-width border-box bg-purple-5 font-montserrat__bold text-white text-main"
          label="Отправить письмо повторно"
          @click="sendLink"
        />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'SendLink',
  props: {
    status: Boolean
  },
  data () {
    return {
      disable: false
    }
  },
  computed: {
    ...mapGetters({
      email: 'auth/email'
    })
  },
  methods: {
    ...mapActions({
      resendLink: 'auth/resendLink'
    }),
    sendLink () {
      this.resendLink({ email: this.email })
        .then(() => {
          this.disable = true
        })
    }
  }
}
</script>

<style scoped lang="scss">
.send-link {
  &-description {
    padding: 30px 36px 60px;
    font-size: 26px;
    line-height: 32px;
  }
  &-btn {
    height: 44px;
  }
}
</style>
