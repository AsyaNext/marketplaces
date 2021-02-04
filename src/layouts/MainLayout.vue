<template>
  <q-layout :class="[$route.name === 'index' || $route.name === 'activate' ? 'bg-index' : 'bg-purple-1']" view="hhh LpR fff">
    <q-header :class="[$route.name === 'index' || $route.name === 'activate' ? 'text-white' : 'text-purple-10']" class="header container bg-transparent">
      <q-toolbar class="row items-center justify-between">
        <router-link to="/" class="header-logo">
          <q-img v-if="$route.name === 'index' || $route.name === 'activate'" src="../assets/logo-index.svg"/>
          <q-img v-else src="../assets/logo.svg"/>
        </router-link>
        <div v-show="widthWindow >= 1100" class="header-navigation text-main row font-montserrat__semi-bold">
          <router-link to="/blog">Блог</router-link>
          <router-link to="/api">API</router-link>
          <router-link to="/rates">Тарифы</router-link>
          <router-link to="/payment-and-return">Оплата и возврат</router-link>
          <router-link to="/faq">FAQ</router-link>
          <router-link to="/contacts">Контакты</router-link>
          <span v-show="!isAuth" @click="openLogin = true">Вход</span>
          <span v-show="!isAuth" @click="openRegister = true">Регистрация</span>
          <span v-show="isAuth">Сервис</span>
        </div>
        <div v-show="widthWindow < 1100" class="header-drawer__menu">
          <q-btn
            v-if="$route.name === 'index' || $route.name === 'activate'"
            dense
            flat
            round
            icon="img:icons/icon-burger-index.svg"
            @click="leftDrawer = !leftDrawer"
          />
          <q-btn
            v-else
            dense
            flat
            round
            icon="img:icons/icon-burger.svg"
            @click="leftDrawer = !leftDrawer"
          />
        </div>
        <div v-show="widthWindow < 1100" class="header-drawer__profile">
          <q-btn
            v-if="$route.name === 'index' || $route.name === 'activate'"
            dense
            flat
            round
            icon="img:icons/icon-person-index.svg"
            @click="rightDrawer = !rightDrawer"
          />
          <q-btn
            v-else
            dense
            flat
            round
            icon="img:icons/icon-person.svg"
            @click="rightDrawer = !rightDrawer"
          />
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer class="navigation-drawer" v-model="leftDrawer" side="left">
      <q-separator color="orange-10" />
      <q-list dense class="q-mt-md font-montserrat__semi-bold text-body1 text-purple-10">
        <q-item to="/blog" clickable exact>
          <q-item-section>
            Блог
          </q-item-section>
        </q-item>
        <q-item to="/api" clickable exact>
          <q-item-section>
            API
          </q-item-section>
        </q-item>
        <q-item to="/rates" clickable exact>
          <q-item-section>
            Тарифы
          </q-item-section>
        </q-item>
        <q-item to="/payment-and-return" clickable exact>
          <q-item-section>
            Оплата и возврат
          </q-item-section>
        </q-item>
        <q-item to="/faq" clickable exact>
          <q-item-section>
            FAQ
          </q-item-section>
        </q-item>
        <q-item to="/contacts" clickable exact>
          <q-item-section>
            Контакты
          </q-item-section>
        </q-item>
        <q-item clickable exact>
          <q-item-section>
            Вход
          </q-item-section>
        </q-item>
        <q-item clickable exact>
          <q-item-section>
            Регистрация
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-drawer class="profile-drawer" v-model="rightDrawer" side="right">
      <q-separator color="orange-10" />
      <q-list dense class="q-mt-md font-montserrat__semi-bold text-body1 text-purple-10 text-right">
        <q-item clickable exact>
          <q-item-section>
            Сервис
          </q-item-section>
        </q-item>
        <q-item clickable exact>
          <q-item-section>
            Выход
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container class="container">
      <router-view />
      <login
        :status="openLogin"
        @close-login="openLogin = false;"
        @login="openLogin = false; isAuth = true"
        @open-register="openLogin = false; openRegister = true"
        @open-recovery-password="openLogin = false; openRecoveryPassword = true"
      />
      <registration
        :status="openRegister"
        @close-register="openRegister = false"
        @registration="openRegister = false; openSendLink = true"
        @open-login="openRegister = false; openLogin = true"
      />
      <send-link
        :status="openSendLink"
        @close-send-link="openSendLink = false"
      />
      <recovery-password
        :status="openRecoveryPassword"
        @close-recovery-password="openRecoveryPassword = false"
        @reset-password="openRecoveryPassword = false; openRecoveryLink = true"
      />
      <send-link-for-recovery
        :status="openRecoveryLink"
        @close-modal="openRecoveryLink = false"
      />
      <chat />
    </q-page-container>

    <q-footer class="footer text-white">
      <q-toolbar :class="[widthWindow >= 800 ? 'justify-center' : 'justify-between', widthWindow <= 700 ? 'column text-center' : 'row']" class="relative-position container items-center justify-center">
        <q-img :class="[{ 'absolute-left q-ml-sm' : widthWindow >= 800 }, { 'q-mt-lg' : widthWindow <= 700 }]" class="footer-logo" src="../assets/logo.svg"/>
        <div class="q-my-lg footer-navigation text-main row justify-center font-montserrat__semi-bold">
          <router-link to="/api">API</router-link>
          <router-link to="/payment-and-return">Оплата и возврат</router-link>
          <router-link to="/faq">FAQ</router-link>
          <router-link to="/contacts">Контакты</router-link>
        </div>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { mapActions } from 'vuex'
import { Cookies } from 'quasar'
import Login from 'components/popups/Login'
import Registration from 'components/popups/Registration'
import SendLink from 'components/popups/SendLink'
import RecoveryPassword from 'components/popups/RecoveryPassword'
import SendLinkForRecovery from 'components/popups/SendLinkForRecovery'
import Chat from 'components/Chat'

export default {
  name: 'MainLayout',
  components: {
    Chat,
    SendLinkForRecovery,
    RecoveryPassword,
    SendLink,
    Registration,
    Login
  },
  data () {
    return {
      isAuth: false,
      widthWindow: 0,
      leftDrawer: false,
      rightDrawer: false,
      openLogin: false,
      openRegister: false,
      openSendLink: false,
      openRecoveryPassword: false,
      openRecoveryLink: false
    }
  },
  methods: {
    ...mapActions({
      checkToken: 'auth/checkToken',
      updateToken: 'auth/updateToken'
    }),
    updateWidth () {
      this.widthWindow = window.innerWidth
    },
    checkAuth () {
      if (Cookies.has('access-token')) {
        this.checkToken()
          .then(() => {
            this.isAuth = true
          })
          .catch(() => {
            this.updateToken()
              .then(() => {
                this.isAuth = true
              })
              .catch(() => {
                this.isAuth = false
                this.openLogin = true
              })
          })
      }
    }
  },
  created () {
    this.checkAuth()
    this.updateWidth()
    window.addEventListener('resize', this.updateWidth)
  }
}
</script>

<style lang="scss">
  @import "../css/styles/main-layout";
</style>
