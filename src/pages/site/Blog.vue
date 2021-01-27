<template>
  <q-page class="q-mt-lg blog">
    <base-submenu
      main-title="Блог"
      :category="category"
      :article="article"
      @drop-data="dropData"
      @drop-article="dropArticle"
    />
    <div class="q-mb-xl blog-content row q-col-gutter-x-xl">
      <router-view :articles="articles" />
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
        <categories-of-blog @change-category="changeCategory" :categories="categories" />
      </div>
    </div>
    <div v-if="this.$route.name !== 'blog.article'" class="blog-pagination row justify-center">
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
import { mapGetters, mapActions } from 'vuex'
import BaseSubmenu from 'components/site/BaseNavigation'
import CategoriesOfBlog from 'components/site/CategoriesOfBlog'
export default {
  name: 'Blog',
  components: {
    CategoriesOfBlog,
    BaseSubmenu
  },
  data () {
    return {
      search: '',
      currentPage: 1,
      category: ''
    }
  },
  computed: {
    ...mapGetters({
      categories: 'blog/categories',
      articles: 'blog/articles',
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
      this.category = localStorage.removeItem('category')
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
      localStorage.setItem('category', category)
      this.category = localStorage.getItem('category')
      if (this.$route.name === 'blog.article') {
        this.$router.push('/blog')
      }
    }
  },
  beforeMount () {
    this.getCategories()
    this.getArticles({ page: 1, page_size: 10 })
    if (this.$route.params.id) {
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
