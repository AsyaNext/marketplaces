<template>
  <q-dialog v-model="status" persistent>
    <q-card class="recovery-password">
      <q-card-section class="row items-end q-pb-none">
        <q-space />
        <q-btn icon="close" color="purple-10" flat round dense @click="$emit('close-recovery-password')" />
      </q-card-section>
      <q-card-section class="recovery-password-form column">
        <div class="recovery-password-headline font-montserrat__semi-bold text-purple-10 text-center">Восстановление пароля</div>
        <div class="recovery-password-form__section">
          <div class="q-mb-xs recovery-password-form__section-caption font-montserrat__semi-bold text-purple-11 text-body1">
            Email
          </div>
          <q-input
            dense
            type="email"
            standout="bg-purple-2 text-grey-9"
            v-model="user.email"
            class="recovery-password-form__section-input bg-purple-2 font-montserrat__regular text-main text-grey-9 border-box"
          />
        </div>
        <q-btn
          no-caps
          flat
          class="recovery-password-form__btn full-width border-box bg-purple-5 font-montserrat__bold text-white text-main"
          label="Восстановить пароль"
        />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  name: 'RecoveryPassword',
  props: {
    status: Boolean
  },
  data () {
    return {
      user: {
        email: ''
      }
    }
  }
}
</script>

<style lang="scss">
.recovery-password {
  &-headline {
    font-size: 30px;
    line-height: 37px;
  }
  &-form {
    padding: 0 48px 36px;
    &__section {
      margin-bottom: 49px;
      &-input {
        width: 355px;
        .q-field__control {
          height: 44px;
          background: inherit;
          box-shadow: none !important;
          border-radius: 11px;
          input {
            color: #212121 !important;
          }
        }
      }
    }
    &__btn {
      height: 44px;
    }
  }
}
</style>
