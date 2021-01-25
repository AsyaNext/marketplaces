<template>
  <div class="col-9 row q-col-gutter-lg">
    <card-of-article class="col-4" v-for="i in 10" :key="i"/>
  </div>
</template>

<script>
import CardOfArticle from 'components/site/CardOfArticle'
export default {
  name: 'ArticlesBlog',
  components: {
    CardOfArticle
  }
}
</script>
