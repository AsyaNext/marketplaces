<template>
  <q-page class="q-mt-lg api">
    <div class="api-headline font-montserrat__semi-bold text-purple-10">API</div>
    <div class="row">
      <div class="api-navigation col-3"></div>
      <div class="api-content col"></div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Api',
  data () {
    return {
      sections: [
        {
          name: 'Раздел 1',
          submenu: ['Страница 1', 'Страница 2', 'Страница 3']
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../../css/styles/site/api";
</style>
