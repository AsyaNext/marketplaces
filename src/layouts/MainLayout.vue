<template>
  <q-layout view="hhh lpR fff">
    <q-header class="text-white">
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="text-white">
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
