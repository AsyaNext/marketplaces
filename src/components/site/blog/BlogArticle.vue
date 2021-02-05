<template>
  <div v-show="article">
    <div class="article q-pa-md bg-white">
      <q-img native-context-menu class="q-mb-md article-cover" :src="article.image" :ratio="ratio" />
      <div class="article-wrapper">
        <div class="q-mb-lg article-extradata row justify-between items-center">
          <div class="q-mb-sm">
            <q-chip
              dense
              class="q-px-md font-montserrat__semi-bold text-caption"
              color="pink-6"
              text-color="white"
              v-for="category in article.category"
              :key="category.id"
            >
              {{category.name}}
            </q-chip>
          </div>
          <div class="q-mb-sm q-ml-xs font-avenir__bold text-grey-5 letter-spacing__less text-caption">{{dateArticle}}</div>
        </div>
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
    <div class="pagination row justify-between">
      <div :class="[article.id + 1 > this.count ? 'cursor-not-allowed' : 'cursor-pointer']" class="pagination-back row items-center q-gutter-x-sm" @click="getArticle(article.id + 1)">
        <q-icon :class="[article.id + 1 > this.count ? 'text-purple-11' : 'text-purple-10']" name="keyboard_arrow_left" size="md"></q-icon>
        <div class="font-montserrat__semi-bold text-purple-11 text-main">Назад</div>
      </div>
      <div :class="[article.id - 1 === 0 ? 'cursor-not-allowed' : 'cursor-pointer']" class="pagination-forward row items-center q-gutter-x-sm" @click="getArticle(article.id - 1)">
        <div class="font-montserrat__semi-bold text-purple-11 text-main">Следующая</div>
        <q-icon :class="[article.id - 1 === 0 ? 'text-purple-11' : 'text-purple-10']" name="keyboard_arrow_right" size="md" color="purple-10"></q-icon>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'BlogArticle',
  props: {
    widthWindow: Number
  },
  computed: {
    ...mapGetters({
      article: 'blog/specArticle',
      count: 'blog/countArticles'
    }),
    dateArticle () {
      const date = new Date(this.article.updated_on)
      let day = ''
      let month = ''
      if (date.getDate() < 10) {
        day = `0${date.getDate()}`
      } else {
        day = date.getDate()
      }
      if (date.getMonth() < 10) {
        month = `0${date.getMonth() + 1}`
      } else {
        month = date.getMonth() + 1
      }
      return `${day}.${month}.${date.getFullYear()}`
    },
    ratio () {
      return (this.widthWindow > 670) ? 79 / 23 : 345 / 140
    }
  },
  methods: {
    ...mapActions({
      getSpecArticle: 'blog/getSpecArticle'
    }),
    getArticle (id) {
      if (id > 0 && id <= this.count) {
        this.getSpecArticle(id)
          .then(() => {
            this.$router.push({ name: 'blog.article', params: { id: this.article.id, title: this.article.name } })
            document.title = this.article.name
          })
      }
    }
  }
}
</script>

<style scoped lang="scss">
.article {
  margin-bottom: 50px;
  border-radius: 15px;
  &-cover {
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
    p {
      @media (max-width: 550px) {
        display: flex;
        flex-direction: column;
      }
    }
  }
}
.pagination {
  margin-bottom: 102px;
  a {
    color: inherit;
    text-decoration: none;
  }
}

@media (max-width: 670px) {
  .article {
    padding: 0;
    &-wrapper {
      padding: 16px;
    }
  }
}
</style>
