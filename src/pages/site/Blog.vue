<template>
  <q-page class="q-mt-lg blog">
    <div class="blog-headline font-montserrat__semi-bold text-purple-10">
      <div class="blog-headline__title">Блог</div>
    </div>
    <div class="q-mb-xl blog-content row q-col-gutter-x-xl">
      <div class="blog-content__articles col-9 row q-col-gutter-lg">
        <card-of-article class="col-4" v-for="i in 10" :key="i" />
      </div>
      <div class="blog-content__column col-3">
        <q-input
          standout="bg-purple-2 text-purple-11"
          dense
          class="q-mb-md blog-content__column-search bg-purple-2 font-montserrat__semi-bold text-purple-11 text-main border-box"
          v-model="search"
          placeholder="Поиск"
        >
          <template #append>
            <q-icon class="blog-content__column-search-icon q-ml-md border-box bg-purple-4 cursor-pointer" name="img:icons/icon-search.svg"/>
          </template>
        </q-input>
        <div class="q-py-md blog-content__column-categories bg-purple-2 border-box">
          <div class="q-mx-md blog-content__column-categories-title font-montserrat__semi-bold text-main text-purple-10">Категории</div>
          <q-list dense class="font-montserrat__regular text-body1 text-grey-10">
            <q-item clickable v-for="i in 6" :key="i">
              Категория {{i}}
            </q-item>
          </q-list>
        </div>
      </div>
    </div>
    <div class="blog-pagination row justify-center">
      <q-pagination
        color="purple-10"
        text-color="purple-11"
        class="font-montserrat__semi-bold"
        v-model="currentPage"
        :max="10"
        :max-pages="4"
        :direction-links="true"
      >
      </q-pagination>
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
      search: '',
      currentPage: 1
    }
  }
}
</script>

<style lang="scss">
  @import "../../css/styles/site/blog";
</style>