<template>
  <div class="col-9 row q-col-gutter-lg">
    <card-of-article class="col-4" v-for="article in articles" :key="article.id" :article="article"/>
  </div>
</template>

<script>
import CardOfArticle from 'components/site/CardOfArticle'
export default {
  name: 'ArticlesBlog',
  props: {
    articles: Array
  },
  components: {
    CardOfArticle
  },
  mounted () {
    console.log(this.articles)
  }
}
</script>
