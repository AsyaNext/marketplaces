<template>
  <q-page class="q-mt-lg blog">
    <base-submenu main-title="Блог" :category="category" @drop-data="category = ''"/>
    <div class="q-mb-xl blog-content row q-col-gutter-x-xl">
      <div class="blog-content__articles col-9 row q-col-gutter-lg">
        <card-of-article class="col-4" v-for="i in 10" :key="i" />
      </div>
      <div class="blog-content__column col-3">
        <q-input
          v-if="!category"
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
        <categories-of-blog @change-category="category = `Категория ${$event}`" />
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
import BaseSubmenu from 'components/site/BaseSubmenu'
import CategoriesOfBlog from 'components/site/CategoriesOfBlog'
export default {
  name: 'Blog',
  components: {
    CategoriesOfBlog,
    BaseSubmenu,
    CardOfArticle
  },
  data () {
    return {
      search: '',
      currentPage: 1,
      category: ''
    }
  }
}
</script>

<style lang="scss">
  @import "../../css/styles/site/blog";
</style>
