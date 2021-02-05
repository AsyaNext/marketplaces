<template>
  <div class="column q-gutter-y-lg">
    <div
      class="category-article bg-white cursor-pointer border-box"
      v-for="article in category.articles"
      :key="article.id"
      @click="chooseArticle(article)"
    >
      <div class="category-article-content">
        <div class="q-mb-sm font-montserrat__semi-bold text-main text-purple-10">{{article.name}}</div>
        <div class="faq-description font-avenir__regular text-body1 text-grey-10 text-justify">{{article.description}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'ArticlesInCategory',
  computed: {
    ...mapGetters({
      category: 'faq/specCategory'
    })
  },
  methods: {
    ...mapActions({
      getCategory: 'faq/getSpecCategory'
    }),
    chooseArticle (article) {
      this.$router.push({ name: 'faq.article', params: { id: article.id, title: article.name } })
    }
  },
  created () {
    this.getCategory(this.$route.params.id)
      .then(() => {
        document.title = this.category.name
      })
  }
}
</script>

<style scoped lang="scss">
.category-article {
  padding: 28px 30px;
  @media (max-width: 450px) {
    padding: 13px 15px;
  }
  transition: all 0.3s ease;
  &:hover {
    box-shadow: 0 0 15px rgba(138, 124, 177, 0.45);
  }
}
</style>
