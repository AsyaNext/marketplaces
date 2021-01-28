<template>
  <q-dialog v-model="status">
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
            dense
            type="email"
            standout="bg-purple-2 text-grey-9"
            v-model="user.email"
            class="login-form__section-input bg-purple-2 font-montserrat__regular text-main text-grey-9 border-box"
          />
        </div>
        <div class="login-form__section">
          <div class="q-mb-xs login-form__section-caption font-montserrat__semi-bold text-purple-11 text-body1">
            Пароль
          </div>
          <q-input
            dense
            type="password"
            standout="bg-purple-2 text-grey-9"
            v-model="user.password"
            class="login-form__section-input bg-purple-2 font-montserrat__regular text-main text-grey-9 border-box"
          />
          <div class="login-form__section-link__password cursor-pointer font-montserrat__semi-bold text-center text-body1">
            Забыли пароль?
          </div>
          <q-btn
            no-caps
            flat
            class="login-form__section-btn full-width border-box bg-purple-5 font-montserrat__bold text-white text-main"
            label="Войти в аккаунт" />
          <div class="login-form__section-link__registration cursor-pointer font-montserrat__semi-bold text-center text-body1">
            Регистрация
          </div>
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  name: 'Login',
  props: {
    status: Boolean
  },
  data () {
    return {
      user: {
        email: '',
        password: ''
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
        margin-bottom: 20px;
      }
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
      &-link__password {
        margin: 12px auto;
      }
      &-link__password, &-link__registration {
        color: rgba(58, 1, 102, 0.49);
        &:hover {
          color: #53326C;
        }
      }
      &-btn {
        margin-bottom: 19px;
        height: 44px;
        .q-btn__wrapper {
          min-height: auto;
        }
      }
    }
  }
}
</style>
