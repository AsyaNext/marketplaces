<template>
  <div class="row q-col-gutter-lg">
    <card-of-article
      class="col-4"
      v-for="article in articles"
      :key="article.id"
      :article="article"
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
