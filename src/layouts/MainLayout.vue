<template>
  <q-layout :class="[$route.meta.title === 'Главная' ? 'bg-index' : 'bg-purple-1']" view="hhh lpR fff">
    <q-header :class="[$route.meta.title === 'Главная' ? 'text-white' : 'text-purple-10']" class="header container bg-transparent">
      <q-toolbar class="row items-center justify-between">
        <router-link to="/" class="header-logo">
          <q-img v-if="$route.meta.title === 'Главная'" src="../assets/logo-index.svg"/>
          <q-img v-else src="../assets/logo.svg"/>
        </router-link>
        <div class="header-navigation text-main row font-montserrat__semi-bold">
          <router-link to="/blog">Блог</router-link>
          <router-link to="/api">API</router-link>
          <router-link to="/rates">Тарифы</router-link>
          <span>Оплата и возврат</span>
          <span>FAQ</span>
          <span>Контакты</span>
          <span>Вход</span>
          <span>Регистрация</span>
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container class="container">
      <router-view />
    </q-page-container>

    <q-footer class="footer text-white">
      <q-toolbar class="relative-position container row items-center justify-center">
        <q-img class="q-ml-xl absolute-left footer-logo" src="../assets/logo.svg"/>
        <div class="q-my-lg footer-navigation text-main row font-montserrat__semi-bold">
          <span>API</span>
          <span>Оплата и возврат</span>
          <span>FAQ</span>
          <span>Контакты</span>
        </div>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout',
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
  @import "../css/styles/main-layout";
</style>
