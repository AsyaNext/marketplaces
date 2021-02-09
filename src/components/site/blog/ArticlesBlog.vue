<template>
  <div class="row q-col-gutter-lg">
    <div v-show="articles.length === 0" class="font-montserrat__medium text-purple-10 text-main">Статьи не найдены</div>
    <card-of-article
      class="article-blog col-md-4 col-sm-6"
      v-for="article in articles"
      :key="article.id"
      :article="article"
      :search="search"
      @get-article="getArticle($event)"
    />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import CardOfArticle from 'components/site/blog/CardOfArticle'
export default {
  name: 'ArticlesBlog',
  props: {
    search: String,
    articles: Array
  },
  components: {
    CardOfArticle
  },
  methods: {
    ...mapActions({
      getArticle: 'blog/getSpecArticle'
    })
  }
}
</script>

<style scoped lang="scss">
@media (max-width: 670px) {
  .article-blog {
    &:nth-child(odd) {
      padding-left: 0;
      padding-right: 12px;
      @media (max-width: 600px) {
        padding-right: 0;
      }
    }
    &:nth-child(even) {
      padding-left: 12px;
      @media (max-width: 600px) {
        padding-left: 0;
      }
    }
  }
}
</style>
