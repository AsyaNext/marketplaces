<template>
  <div v-show="article">
    <div class="article q-pa-md bg-white">
      <q-img native-context-menu class="article-cover" :src="`http://192.162.240.96:8014${article.image}`" :ratio="ratio" />
      <div class="article-wrapper">
        <div class="article-title font-montserrat__bold text-center text-purple-12">
          {{article.name}}
        </div>
        <div class="article-content font-avenir__regular text-main text-justify text-grey-10">
          <q-markdown
            :src="article.text"
            no-heading-anchor-links
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'FAQArticle',
  data: () => ({
    widthWindow: 0
  }),
  computed: {
    ...mapGetters({
      article: 'faq/article'
    }),
    ratio () {
      return (this.widthWindow > 540) ? 108 / 23 : 345 / 140
    }
  },
  methods: {
    ...mapActions({
      getArticle: 'faq/getArticle'
    }),
    updateWidth () {
      this.widthWindow = window.innerWidth
    }
  },
  created () {
    this.updateWidth()
    window.addEventListener('resize', this.updateWidth)
    this.getArticle(this.$route.params.id)
      .then(() => {
        document.title = this.article.name
      })
  }
}
</script>

<style scoped lang="scss">
.article {
  background-color: white;
  margin-bottom: 50px;
  border-radius: 15px;
  &-cover {
    margin-bottom: 32px;
    border-radius: 15px;
  }
  &-title {
    margin-bottom: 20px;
    font-size: 28px;
    line-height: 31px;
  }
  &-content {
    margin-bottom: 60px;
    line-height: 25px;
  }
}
.pagination {
  margin-bottom: 102px;
  a {
    color: inherit;
    text-decoration: none;
  }
}

@media (max-width: 540px) {
.article {
  padding: 0;
  background-color: #F9F4FD;
  &-wrapper {
    padding: 16px;
  }
}
}
</style>
