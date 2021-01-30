<template>
  <q-dialog v-model="status" persistent>
    <q-card class="login">
      <q-card-section class="row items-end q-pb-none">
        <q-space />
        <q-btn icon="close" color="purple-10" flat round dense @click="$emit('close-login')" />
      </q-card-section>
      <q-card-section class="login-form column">
        <div class="page-headline font-montserrat__semi-bold text-purple-10 text-center">Вход</div>
        <div class="login-form__section">
          <div class="q-mb-xs login-form__section-caption font-montserrat__semi-bold text-purple-11 text-body1">
            Email
          </div>
          <q-input
            ref="email"
            dense
            type="email"
            standout="bg-purple-2 text-grey-9"
            v-model="user.email"
            :lazy-rules="true"
            class="login-form__section-input font-montserrat__regular text-main text-grey-9 border-box"
            :rules="[
            $rules.required('Это обязательное поле'),
            $rules.email('Вы ввели некорректный email')
          ]"
          />
        </div>
        <div class="login-form__section">
          <div class="q-mb-xs login-form__section-caption font-montserrat__semi-bold text-purple-11 text-body1">
            Пароль
          </div>
          <q-input
            ref="password"
            dense
            type="password"
            standout="bg-purple-2 text-grey-9"
            v-model="user.password"
            class="login-form__section-input font-montserrat__regular text-main text-grey-9 border-box"
            :rules="[
            $rules.required('Это обязательное поле')
          ]"
          />
        </div>
        <div class="login-form__link-password cursor-pointer font-montserrat__semi-bold text-center text-body1">
          Забыли пароль?
        </div>
        <div v-show="warning" class="text-center text-red text-caption font-avenir__regular">Невозможно войти в аккаунт</div>
        <q-btn
          no-caps
          flat
          type="submit"
          class="login-form__btn full-width border-box bg-purple-5 font-montserrat__bold text-white text-main"
          label="Войти в аккаунт"
          @click="authLogin"
        />
        <div class="login-form__link-registration cursor-pointer font-montserrat__semi-bold text-center text-body1">
          Регистрация
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Login',
  props: {
    status: Boolean
  },
  data () {
    return {
      warning: false,
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions({
      login: 'auth/login'
    }),
    authLogin () {
      const valid = this.$refs.email.validate() && this.$refs.password.validate()
      if (valid) {
        this.login(this.user)
          .then(() => {
            this.warning = false
            this.$emit('close-login')
          })
          .catch(() => {
            this.warning = true
          })
      }
    }
  }
}
</script>

<style lang="scss">
.login {
  &-form {
    padding: 0 48px 36px;
    &__section {
      &:not(:last-child) {
        //margin-bottom: 20px;
      }
      &-input {
        width: 355px;
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
    &__link-password {
      margin: 12px auto;
    }
    &__link-password, &__link-registration {
      color: rgba(58, 1, 102, 0.49);
      &:hover {
        color: #53326C;
      }
    }
    &__btn {
      margin-bottom: 19px;
      height: 44px;
      .q-btn__wrapper {
        min-height: auto;
      }
    }
  }
}
</style>
