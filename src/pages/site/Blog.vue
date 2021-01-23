<template>
  <q-page class="q-mt-lg blog">
    <div class="blog-headline font-montserrat__semi-bold text-purple-10">
      <div class="blog-headline__title">Блог</div>
    </div>
    <div class="blog-content row q-col-gutter-x-xl">
      <div class="blog-content__articles col-9 row q-col-gutter-lg">
        <card-of-article class="col-4" v-for="i in 10" :key="i" />
      </div>
      <div class="blog-content__categories col-3"></div>
    </div>
  </q-page>
</template>

<script>
import CardOfArticle from 'components/site/CardOfArticle'
export default {
  name: 'Blog',
  components: {
    CardOfArticle
  }
}
</script>

<style lang="scss">
  @import "../../css/styles/site/blog";
</style>
