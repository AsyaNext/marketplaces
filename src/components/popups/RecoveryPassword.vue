<template>
  <q-dialog :maximized="widthWindow <= 550" v-model="status" persistent>
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
            ref="email"
            dense
            type="email"
            standout="bg-purple-2 text-grey-9"
            v-model="user.email"
            class="recovery-password-form__section-input font-montserrat__regular text-main text-grey-9 border-box"
            :lazy-rules="true"
            :rules="[
            $rules.required('Это обязательное поле'),
            $rules.email('Вы ввели некорректный email')
            ]"
          />
        </div>
        <q-btn
          no-caps
          flat
          class="recovery-password-form__btn full-width border-box bg-purple-5 font-montserrat__bold text-white text-main"
          label="Восстановить пароль"
          @click="userResetPassword"
        />
        <div v-show="warning" class="text-center text-red text-caption font-avenir__regular">Невозможно восстановить пароль</div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'RecoveryPassword',
  props: {
    status: Boolean,
    widthWindow: Number
  },
  data: () => ({
    warning: false,
    user: {
      email: ''
    }
  }),
  methods: {
    ...mapActions({
      resetPassword: 'user/resetPassword'
    }),
    userResetPassword () {
      if (this.$refs.email.validate()) {
        this.resetPassword(this.user)
          .then(() => {
            this.warning = false
            this.$emit('reset-password')
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
    &__btn {
      height: 44px;
    }
  }
}
@media (max-width: 550px) {
  .recovery-password {
    &-headline {
      margin-bottom: 20px;
    }
    &-form {
      margin-top: 20px;
      &__section {
        margin-bottom: 24px;
        &-input {
          width: 100%;
        }
      }
      &__btn {
        min-width: auto;
      }
    }
  }
}
@media (max-width: 400px) {
  .recovery-password {
    &-form {
      padding: 0 15px 36px;
    }
  }
}
</style>
