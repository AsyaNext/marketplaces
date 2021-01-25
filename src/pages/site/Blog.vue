<template>
  <q-page class="q-mt-lg blog">
    <base-submenu
      main-title="Блог"
      :category="category || categoryArticle"
      :article="article"
      @drop-data="dropData"
      @drop-article="dropArticle"
    />
    <div class="q-mb-xl blog-content row q-col-gutter-x-xl">
      <router-view />
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
        <categories-of-blog @change-category="changeCategory" />
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
import BaseSubmenu from 'components/site/BaseSubmenu'
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
    categoryArticle () {
      if (this.$route.name === 'blog.article') {
        return 'Категория 1'
      } else {
        return ''
      }
    },
    article () {
      if (this.$route.name === 'blog.article') {
        return `Название статьи ${this.$route.params.id}`
      } else {
        return ''
      }
    }
  },
  methods: {
    dropData () {
      this.category = ''
      if (this.$route.name === 'blog.article') {
        this.$router.push('/blog')
      }
    },
    dropArticle (category) {
      if (this.$route.name === 'blog.article') {
        if (this.category === '') {
          this.category = category
        }
        this.$router.push('/blog')
      }
    },
    changeCategory (category) {
      this.category = `Категория ${category}`
      if (this.$route.name === 'blog.article') {
        this.$router.push('/blog')
      }
    },
    openArticle (article) {
      this.category = 'Категория 1'
      this.article = article
    }
  }
}
</script>

<style lang="scss">
  @import "../../css/styles/site/blog";
</style>
