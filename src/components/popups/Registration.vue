<template>
  <q-dialog v-model="status" persistent>
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
            ref="email"
            dense
            type="email"
            standout="bg-purple-2 text-grey-9"
            v-model="user.email"
            class="register-form__section-input font-montserrat__regular text-main text-grey-9 border-box"
            error-message="Пользователь с таким email уже существует"
            :error="emailExist"
            :lazy-rules="true"
            :rules="[
              $rules.email('Вы ввели некорректный email'),
              $rules.required('Это обязательное поле')
            ]"
          />
        </div>
        <div class="register-form__section">
          <div class="q-mb-xs register-form__section-caption font-montserrat__semi-bold text-purple-11 text-body1">
            Пароль
          </div>
          <q-input
            ref="password"
            dense
            type="password"
            :lazy-rules="true"
            standout="bg-purple-2 text-grey-9"
            v-model="user.password"
            class="register-form__section-input font-montserrat__regular text-main text-grey-9 border-box"
            :rules="[
              $rules.minLength(8, 'Пароль должен состоять не меньше, чем из 8 символов'),
              $rules.required('Это обязательное поле')
            ]"
          />
        </div>
        <div class="register-form__section">
          <div class="q-mb-xs register-form__section-caption font-montserrat__semi-bold text-purple-11 text-body1">
            Повторите пароль
          </div>
          <q-input
            ref="rePassword"
            dense
            type="password"
            :lazy-rules="true"
            standout="bg-purple-2 text-grey-9"
            v-model="user.re_password"
            class="register-form__section-input font-montserrat__regular text-main text-grey-9 border-box"
            :rules="[
              $rules.sameAs(user.password, 'Пароли не совпадают'),
              $rules.required('Это обязательное поле')
            ]"
          />
        </div>
        <div class="register-form__section">
          <div class="q-mb-xs register-form__section-caption font-montserrat__semi-bold text-purple-11 text-body1">
            Контактный телефон
          </div>
          <q-input
            ref="mobile"
            dense
            maxlength="12"
            :lazy-rules="true"
            standout="bg-purple-2 text-grey-9"
            v-model="user.mobile"
            mask="+7###########"
            placeholder="+7"
            class="register-form__section-input font-montserrat__regular text-main text-grey-9 border-box"
            error-message="Пользователь с таким телефоном уже существует"
            :error="mobileExist"
            :rules="[
              $rules.minLength(12, 'Неправильный номер'),
              $rules.required('Это обязательное поле')
            ]"
          />
        </div>
        <div class="register-form__section">
          <div class="q-mb-xs register-form__section-caption font-montserrat__semi-bold text-purple-11 text-body1">
            Как к вам обращаться?
          </div>
          <q-input
            ref="username"
            dense
            :lazy-rules="true"
            standout="bg-purple-2 text-grey-9"
            v-model="user.username"
            class="register-form__section-input font-montserrat__regular text-main text-grey-9 border-box"
            :rules="[
              $rules.minLength(2, 'Слишком короткое имя'),
              $rules.maxLength(60, 'Слишком длинное имя'),
              $rules.required('Это обязательное поле')
            ]"
          />
        </div>
        <q-btn
          no-caps
          flat
          class="register-form__btn full-width border-box bg-purple-5 font-montserrat__bold text-white text-main"
          label="Зарегистрироваться"
          @click="authRegister"
        />
        <div v-show="warning" class="text-center text-red text-caption font-avenir__regular">Невозможно зарегистрироваться</div>
        <div class="register-form__link-login cursor-pointer font-montserrat__semi-bold text-center text-body1">
          Уже есть аккаунт?
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Registration',
  props: {
    status: Boolean
  },
  data () {
    return {
      warning: false,
      user: {
        username: '',
        mobile: '',
        email: '',
        password: '',
        re_password: ''
      }
    }
  },
  computed: {
    ...mapGetters({
      emailExist: 'auth/emailExist',
      mobileExist: 'auth/mobileExist'
    })
  },
  methods: {
    ...mapActions({
      registration: 'auth/registration'
    }),
    authRegister () {
      const valid = this.$refs.email.validate() && this.$refs.password.validate() && this.$refs.rePassword.validate() && this.$refs.mobile.validate() && this.$refs.username.validate()
      if (valid) {
        this.registration(this.user)
          .then(() => {
            this.warning = false
            this.$emit('registration')
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
.register {
  &-form {
    padding: 0 48px 36px;
    &__section {
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
    &__link-login {
      margin-top: 12px;
      color: rgba(58, 1, 102, 0.49);
      &:hover {
        color: #53326C;
      }
    }
    &__btn {
      margin-top: 30px;
      min-width: 355px;
      height: 44px;
      .q-btn__wrapper {
        min-height: auto;
      }
    }
  }
}
</style>
