<template>
  <q-dialog v-model="status">
    <q-card class="register">
      <q-card-section class="row items-end q-pb-none">
        <q-space />
        <q-btn icon="close" color="purple-10" flat round dense @click="$emit('close-register')" />
      </q-card-section>
      <q-card-section class="register-form column">
        <div class="page-headline font-montserrat__semi-bold text-purple-10 text-center">Регистрация</div>
        <div class="register-form__section">
          <div class="q-mb-xs register-form__section-caption font-montserrat__semi-bold text-purple-11 text-body1">
            Email
          </div>
          <q-input
            dense
            type="email"
            standout="bg-purple-2 text-grey-9"
            v-model="user.email"
            class="register-form__section-input bg-purple-2 font-montserrat__regular text-main text-grey-9 border-box"
          />
        </div>
        <div class="register-form__section">
          <div class="q-mb-xs register-form__section-caption font-montserrat__semi-bold text-purple-11 text-body1">
            Пароль
          </div>
          <q-input
            dense
            type="password"
            standout="bg-purple-2 text-grey-9"
            v-model="user.password"
            class="register-form__section-input bg-purple-2 font-montserrat__regular text-main text-grey-9 border-box"
          />
        </div>
        <div class="register-form__section">
          <div class="q-mb-xs register-form__section-caption font-montserrat__semi-bold text-purple-11 text-body1">
            Повторите пароль
          </div>
          <q-input
            dense
            type="password"
            standout="bg-purple-2 text-grey-9"
            v-model="user.re_password"
            class="register-form__section-input bg-purple-2 font-montserrat__regular text-main text-grey-9 border-box"
          />
        </div>
        <div class="register-form__section">
          <div class="q-mb-xs register-form__section-caption font-montserrat__semi-bold text-purple-11 text-body1">
            Контактный телефон
          </div>
          <q-input
            dense
            standout="bg-purple-2 text-grey-9"
            v-model="user.mobile"
            fill-mask
            mask="+7##########"
            class="register-form__section-input bg-purple-2 font-montserrat__regular text-main text-grey-9 border-box"
          />
        </div>
        <div class="register-form__section">
          <div class="q-mb-xs register-form__section-caption font-montserrat__semi-bold text-purple-11 text-body1">
            Как к вам обращаться?
          </div>
          <q-input
            dense
            standout="bg-purple-2 text-grey-9"
            v-model="user.username"
            class="register-form__section-input bg-purple-2 font-montserrat__regular text-main text-grey-9 border-box"
          />
        </div>
        <q-btn
          no-caps
          flat
          class="q-mt-xl register-form__btn full-width border-box bg-purple-5 font-montserrat__bold text-white text-main"
          label="Зарегистрироваться"
          @click="authRegister"
        />
        <div class="register-form__link-login cursor-pointer font-montserrat__semi-bold text-center text-body1">
          Уже есть аккаунт?
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Registration',
  props: {
    status: Boolean
  },
  data () {
    return {
      user: {
        username: '',
        mobile: '',
        email: '',
        password: '',
        re_password: ''
      }
    }
  },
  methods: {
    ...mapActions({
      registration: 'auth/registration'
    }),
    authRegister () {
      this.registration(this.user)
        .then(() => {
          this.$emit('registration')
        })
        .catch(() => {
          console.log('произошла какая-то ошибка')
        })
    }
  }
}
</script>

<style lang="scss">
.register {
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
    }
    &__link-login {
      color: rgba(58, 1, 102, 0.49);
      &:hover {
        color: #53326C;
      }
    }
    &__btn {
      min-width: 355px;
      margin-bottom: 12px;
      height: 44px;
      .q-btn__wrapper {
        min-height: auto;
      }
    }
  }
}
</style>
