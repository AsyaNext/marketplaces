<template>
  <q-page class="q-mt-lg blog">
    <base-submenu
      main-title="Блог"
      :category="category"
      :article="article"
      :search="fieldSearch"
      :widthWindow="widthWindow"
      @drop-data="dropData"
      @drop-article="dropArticle"
    />
    <div class="q-mb-xl blog-content row justify-between">
      <router-view class="blog-content__articles col-9" :widthWindow="widthWindow" :articles="articles" :search="search"/>
      <div class="q-pl-xl blog-content__column col-3">
        <q-input
          v-if="!category && !article"
          standout="bg-purple-2 text-purple-11"
          dense
          class="q-mb-md blog-content__column-search bg-purple-2 font-montserrat__semi-bold text-purple-11 text-main border-box"
          v-model="search"
          placeholder="Поиск"
        >
          <template #append>
            <q-icon
              class="blog-content__column-search-icon q-ml-md border-box bg-purple-4 cursor-pointer"
              name="img:icons/icon-search.svg"
              @click="getArticles({ page: 1, page_size: 10, search: search}); fieldSearch = search"
            />
          </template>
        </q-input>
        <categories-of-blog v-show="!(widthWindow <= 670 && $route.name === 'blog.article')" @change-category="changeCategory" :widthWindow="widthWindow" :categories="categories" />
      </div>
    </div>
    <div v-if="this.$route.name !== 'blog.article'" class="blog-pagination row justify-center">
      <q-pagination
        color="purple-10"
        text-color="purple-11"
        class="font-montserrat__semi-bold"
        v-model="currentPage"
        :max="Math.ceil(count / 10)"
        :max-pages="4"
        :direction-links="true"
        @input="getArticles({ page: currentPage, page_size: 10, search: search, category__id: idCategory })"
      >
      </q-pagination>
    </div>
  </q-page>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import BaseSubmenu from 'components/site/BaseNavigation'
import CategoriesOfBlog from 'components/site/blog/CategoriesOfBlog'
export default {
  name: 'Blog',
  props: {
    widthWindow: Number
  },
  components: {
    CategoriesOfBlog,
    BaseSubmenu
  },
  data: () => ({
    search: '',
    fieldSearch: '',
    currentPage: 1,
    category: '',
    idCategory: null
  }),
  computed: {
    ...mapGetters({
      categories: 'blog/categories',
      articles: 'blog/articles',
      count: 'blog/countArticles',
      specArticle: 'blog/specArticle'
    }),
    article () {
      if (this.$route.name === 'blog.article' && this.specArticle) {
        return this.specArticle.name
      } else {
        return ''
      }
    }
  },
  methods: {
    ...mapActions({
      getArticles: 'blog/getArticles',
      getCategories: 'blog/getCategories',
      getSpecArticle: 'blog/getSpecArticle'
    }),
    dropData () {
      this.search = ''
      this.fieldSearch = ''
      this.idCategory = null
      this.category = localStorage.removeItem('category')
      this.getArticles({ page: 1, page_size: 10 })
      if (this.$route.name === 'blog.article') {
        this.$router.push('/blog')
      }
    },
    dropArticle () {
      if (this.$route.name === 'blog.article') {
        this.$router.push('/blog')
      }
    },
    changeCategory (category) {
      this.search = ''
      this.fieldSearch = ''
      this.idCategory = category.id
      this.getArticles({ page: 1, page_size: 10, category__id: this.idCategory })
      localStorage.setItem('category', category.name)
      this.category = localStorage.getItem('category')
      if (this.$route.name === 'blog.article') {
        this.$router.push('/blog')
      }
    }
  },
  created () {
    this.getCategories()
    this.getArticles({ page: 1, page_size: 10 })
    if (this.$route.name === 'blog.article') {
      this.getSpecArticle(this.$route.params.id)
        .then(() => {
          document.title = this.article
        })
    }
  }
}
</script>

<style lang="scss">
  @import "../../css/styles/site/blog";
</style>
