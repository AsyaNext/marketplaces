<template>
  <q-page class="password column flex-center">
    <div class="page-headline font-montserrat__semi-bold text-purple-10 text-center">Восстановление пароля</div>
    <div class="password-section">
      <div class="q-mb-xs password-section__caption font-montserrat__semi-bold text-purple-11 text-body1">
        Новый пароль
      </div>
      <q-input
        ref="password"
        dense
        type="password"
        standout="bg-purple-2 text-grey-9"
        v-model="newPassword"
        :lazy-rules="true"
        class="password-section__input font-montserrat__regular text-main text-grey-9 border-box"
        :rules="[
          $rules.minLength(5, 'Пароль должен состоять не меньше, чем из 5 символов'),
          $rules.required('Это обязательное поле')
        ]"
      />
    </div>
    <div class="password-section">
      <div class="q-mb-xs password-section__caption font-montserrat__semi-bold text-purple-11 text-body1">
        Повторите новый пароль
      </div>
      <q-input
        ref="re_password"
        dense
        type="password"
        standout="bg-purple-2 text-grey-9"
        v-model="reNewPassword"
        :lazy-rules="true"
        class="password-section__input font-montserrat__regular text-main text-grey-9 border-box"
        :rules="[
          $rules.minLength(5, 'Пароль должен состоять не меньше, чем из 5 символов'),
          $rules.required('Это обязательное поле')
        ]"
      />
    </div>
    <q-btn
      no-caps
      flat
      class="q-mt-lg password-btn border-box bg-purple-5 font-montserrat__bold text-white text-main"
      label="Восстановить пароль"
      @click="recoveryPassword"
    />
    <div v-show="warning" class="text-center text-red text-caption font-avenir__regular">Невозможно восстановить пароль</div>
    <confirm-reset-password :status="openConfirmResetPassword" @close-modal="$router.push('/')"/>
  </q-page>
</template>

<script>
import { mapActions } from 'vuex'
import ConfirmResetPassword from 'components/popups/ConfirmResetPassword'
export default {
  name: 'Password',
  components: {
    ConfirmResetPassword
  },
  data: () => ({
    warning: false,
    newPassword: '',
    reNewPassword: '',
    openConfirmResetPassword: false
  }),
  methods: {
    ...mapActions({
      resetPasswordConfirm: 'user/resetPasswordConfirm'
    }),
    recoveryPassword () {
      const { uid, token } = this.$route.params
      if (this.$refs.password.validate() && this.$refs.re_password.validate()) {
        this.resetPasswordConfirm({
          uid: uid,
          token: token,
          new_password: this.newPassword,
          re_new_password: this.reNewPassword
        })
          .then(() => {
            this.openConfirmResetPassword = true
          })
      }
    }
  }
}
</script>

<style lang="scss">
.password {
  &-section {
    width: 100%;
    &__input {
      max-width: 355px;
      width: 100%;
      .q-field__append {
        display: none;
      }
      .q-field__control {
        height: 44px;
        background: #EEE3FD !important;
        box-shadow: none !important;
        border-radius: 11px;
        input {
          color: #212121 !important;
        }
      }
    }
  }
  &-btn {
    max-width: 355px;
    width: 100%;
    height: 44px;
    .q-btn__wrapper {
      min-height: auto;
    }
  }
}
@media (max-width: 550px) {
  .password {
    padding: 60px 0;
  }
}
</style>
