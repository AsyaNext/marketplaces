<template>
  <q-layout :class="[$route.name === 'index' || $route.name === 'activate' ? 'bg-index' : 'bg-purple-1']" view="hhh LpR fff">
    <q-header :class="[$route.name === 'index' || $route.name === 'activate' ? 'text-white' : 'text-purple-10']" class="header container bg-transparent">
      <q-toolbar class="row justify-between" @click.self="openProfile = false">
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
        </div>
        <div
          :class="{ 'bg-white text-purple-10' : openProfile }"
          v-show="widthWindow >= 1100 && isAuth"
          class="header-profile text-body2"
          @click="openProfile = !openProfile"
        >
          <div class="header-profile__item items-center row font-montserrat__semi-bold cursor-pointer">
            <div>Александр М.</div>
            <q-img src="../../public/icons/avatar.svg" ratio="1" />
          </div>
          <div v-show="openProfile" class="items-menu font-montserrat__medium">
            <div class="header-profile__item cursor-pointer" @click="$router.push('/service')">На сервис</div>
            <div class="header-profile__item cursor-pointer" @click="logout">Выход</div>
          </div>
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
        <div v-show="widthWindow < 1100 & !isAuth" class="header-drawer__profile">
          <q-btn
            v-if="$route.name === 'index' || $route.name === 'activate'"
            dense
            flat
            round
            icon="img:icons/icon-login-index.svg"
            @click="openLogin = !openLogin"
          />
          <q-btn
            v-else
            dense
            flat
            round
            icon="img:icons/icon-login.svg"
            @click="openLogin = !openLogin"
          />
        </div>
        <div
          v-show="widthWindow < 1100 && isAuth"
          class="header-profile"
          @click="openProfile = !openProfile"
        >
          <div class="header-profile__item font-montserrat__semi-bold cursor-pointer">
            <q-img src="../../public/icons/avatar.svg" ratio="1" />
          </div>
          <div v-show="openProfile" class="items-menu font-montserrat__medium text-caption text-purple-10">
            <div class="header-profile__item cursor-pointer text-no-wrap" @click="$router.push('/service')">На сервис</div>
            <div class="header-profile__item cursor-pointer" @click="logout">Выход</div>
          </div>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer class="navigation-drawer" v-model="leftDrawer" side="left" overlay behavior="mobile">
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
        <q-item v-show="!isAuth" clickable @click="leftDrawer = false;openRegister = true">
          <q-item-section>
            Регистрация
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container class="container">
      <router-view :widthWindow="widthWindow" />
      <login
        :status="openLogin"
        :widthWindow="widthWindow"
        @close-login="openLogin = false;"
        @login="openLogin = false; $router.push('/service')"
        @open-register="openLogin = false; openRegister = true"
        @open-recovery-password="openLogin = false; openRecoveryPassword = true"
      />
      <registration
        :status="openRegister"
        :widthWindow="widthWindow"
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
        :widthWindow="widthWindow"
        @close-recovery-password="openRecoveryPassword = false"
        @reset-password="openRecoveryPassword = false; openRecoveryLink = true"
      />
      <send-link-for-recovery
        :status="openRecoveryLink"
        @close-modal="openRecoveryLink = false"
      />
      <chat :widthWindow="widthWindow" />
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
  data: () => ({
    isAuth: false,
    widthWindow: 0,
    leftDrawer: false,
    openProfile: false,
    openLogin: false,
    openRegister: false,
    openSendLink: false,
    openRecoveryPassword: false,
    openRecoveryLink: false
  }),
  methods: {
    ...mapActions({
      checkToken: 'auth/checkToken',
      updateToken: 'auth/updateToken',
      logoutUser: 'auth/logout'
    }),
    logout () {
      this.rightDrawer = false
      this.logoutUser()
        .then(() => {
          this.isAuth = false
        })
    },
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
