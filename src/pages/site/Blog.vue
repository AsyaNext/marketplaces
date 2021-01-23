<template>
  <q-page class="q-mt-lg blog">
    <div class="blog-headline font-montserrat__semi-bold text-purple-10">
      <div class="blog-headline__title">Блог</div>
    </div>
    <div class="blog-content row q-col-gutter-x-xl">
      <div class="blog-content__articles col-9 row q-col-gutter-lg">
        <card-of-article class="col-4" v-for="i in 10" :key="i" />
      </div>
      <div class="blog-content__column col-3">
        <q-input
          standout="bg-purple-2 text-purple-11"
          dense
          class="blog-content__column-search bg-purple-2 font-montserrat__semi-bold text-purple-11 text-main border-box"
          v-model="search"
          placeholder="Поиск"
        >
          <template #append>
            <q-icon class="blog-content__column-search-icon q-ml-md border-box bg-purple-4 cursor-pointer" name="img:icons/icon-search.svg"/>
          </template>
        </q-input>
      </div>
    </div>
  </q-page>
</template>

<script>
import CardOfArticle from 'components/site/CardOfArticle'
export default {
  name: 'Blog',
  components: {
    CardOfArticle
  },
  data () {
    return {
      search: ''
    }
  }
}
</script>

<style lang="scss">
  @import "../../css/styles/site/blog";
</style>
