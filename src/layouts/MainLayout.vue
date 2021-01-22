<template>
  <q-layout view="hhh lpR fff">
    <q-header class="header container bg-transparent text-white">
      <q-toolbar class="row items-center justify-between">
        <q-img class="header-logo" src="../assets/logo-index.png"/>
        <div class="header-navigation text-main row font-montserrat__semi-bold">
          <span>Блог</span>
          <span>API</span>
          <span>Тарифы</span>
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
      <q-toolbar class="q-py-sm relative-position container row items-center justify-center">
        <q-img class="q-ml-xl absolute-left footer-logo" src="../assets/logo.png"/>
        <ul class="text-main row font-montserrat__semi-bold">
          <li>API</li>
          <li>Оплата и возврат</li>
          <li>FAQ</li>
          <li>Контакты</li>
        </ul>
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
