<template>
  <q-layout :class="[$route.name === 'index' ? 'bg-index' : 'bg-purple-1']" view="hhh lpR fff">
    <q-header :class="[$route.name === 'index' ? 'text-white' : 'text-purple-10']" class="header container bg-transparent">
      <q-toolbar class="row items-center justify-between">
        <router-link to="/" class="header-logo">
          <q-img v-if="$route.name === 'index'" class="q-ml-sm" src="../assets/logo-index.svg"/>
          <q-img v-else class="q-ml-sm" src="../assets/logo.svg"/>
        </router-link>
        <div v-if="widthWindow >= 1050" class="header-navigation text-main row font-montserrat__semi-bold">
          <router-link to="/blog">Блог</router-link>
          <router-link to="/api">API</router-link>
          <router-link to="/rates">Тарифы</router-link>
          <router-link to="/payment-and-return">Оплата и возврат</router-link>
          <router-link to="/faq">FAQ</router-link>
          <router-link to="/contacts">Контакты</router-link>
          <span @click="openLogin = true">Вход</span>
          <span @click="openRegister = true">Регистрация</span>
        </div>
        <q-btn v-else dense flat round icon="menu" :class="[$route.name === 'index' ? 'text-white' : 'text-purple-10']" @click="rightDrawer = !rightDrawer" />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="rightDrawer" side="right" overlay behavior="mobile">
      <!-- drawer content -->
    </q-drawer>

    <q-page-container class="container">
      <router-view />
      <login :status="openLogin" @close-login="openLogin = false" />
      <registration :status="openRegister" @close-register="openRegister = false" @registration="openRegister = false; openSendLink = true"/>
      <send-link :status="openSendLink" @close-send-link="openSendLink = false" />
      <confirm-email :status="openConfirmEmail" />
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
import Login from 'components/popups/Login'
import Registration from 'components/popups/Registration'
import SendLink from 'components/popups/SendLink'
import ConfirmEmail from 'components/popups/ConfirmEmail'
export default {
  name: 'MainLayout',
  components: {
    ConfirmEmail,
    SendLink,
    Registration,
    Login
  },
  data () {
    return {
      widthWindow: 0,
      rightDrawer: false,
      openLogin: false,
      openRegister: false,
      openSendLink: true,
      openConfirmEmail: false,
      openRecoveryPassword: false,
      openSendLinkForRecovery: false
    }
  },
  methods: {
    updateWidth () {
      this.widthWindow = window.innerWidth
    }
  },
  created () {
    this.updateWidth()
    window.addEventListener('resize', this.updateWidth)
  }
}
</script>

<style lang="scss">
  @import "../css/styles/main-layout";
</style>
