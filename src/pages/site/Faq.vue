<template>
  <q-page class="q-mt-lg faq">
    <base-submenu
      main-title="FAQ"
      :category="category"
      :article="article"
      @drop-data="dropData"
      @drop-article="dropArticle"
    />
    <div class="faq-container full-width">
      <router-view :categories="categories" />
    </div>
  </q-page>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import BaseSubmenu from 'components/site/BaseNavigation'
export default {
  name: 'FAQ',
  components: {
    BaseSubmenu
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters({
      categories: 'faq/categories',
      specArticle: 'faq/article'
    }),
    category () {
      if (this.$route.name === 'faq.category' || this.$route.name === 'faq.article') {
        return localStorage.getItem('category')
      } else {
        localStorage.removeItem('category')
        return ''
      }
    },
    article () {
      if (this.$route.name === 'faq.article' && this.specArticle) {
        return this.specArticle.name
      } else {
        return ''
      }
    }
  },
  methods: {
    ...mapActions({
      getCategories: 'faq/getCategories'
    }),
    dropData () {
      localStorage.removeItem('category')
      this.$router.push('/faq')
    },
    dropArticle () {
      this.$router.go(-1)
    }
  },
  created () {
    this.getCategories()
  }
}
</script>

<style lang="scss">
  @import "../../css/styles/site/faq";
</style>
