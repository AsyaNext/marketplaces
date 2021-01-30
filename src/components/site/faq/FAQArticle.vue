<template>
  <div v-show="article">
    <div class="article q-pa-md bg-white">
      <q-img native-context-menu class="article-cover" src="../../../assets/placeholder.png" :ratio="108/23" />
      <div class="article-title font-montserrat__bold text-center text-purple-12">
        {{article.name}}
      </div>
      <div class="article-content font-avenir__regular text-main text-justify text-grey-10">
        <q-markdown
          :src="article.text"
          no-heading-anchor-links
        />
      </div>
      <div class="article-section">
        <div class="article-section__title font-montserrat__semi-bold text-purple-12">Подзаголовок</div>
        <div class="article-section__content row text-justify font-avenir__regular text-main text-grey-10">
          <div class="article-section__content-text col">
            <p>Статистику Wildberries за прошлый год цитирует vc.ru: выручка выросла на 96%, до 437 млрд рублей,
              число покупателей тоже выросло вдвое — с 18 млн до 40 млн человек — с пропорциональным ростом заказов,
              а продавцов — более чем вчетверо, с 19 тысяч до 91 тысячи.</p>
            <p>Сегмент fashion обеспечил компании точно половину годовой выручки — 218 млрд рублей.
              Но больше всего за пандемический год — в 17 раз — выросли продажи товаров для здоровья.
              Почти на порядок выросли продажи садовой техники и инвентаря.</p>
          </div>
          <q-img native-context-menu class="article-section__content-image border-box" src="https://cdn.quasar.dev/img/mountains.jpg" ratio="1" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'FAQArticle',
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters({
      article: 'faq/article'
    })
  },
  methods: {
    ...mapActions({
      getArticle: 'faq/getArticle'
    })
  },
  created () {
    this.getArticle(this.$route.params.id)
      .then(() => {
        document.title = this.article.name
      })
  }
}
</script>

<style lang="scss">
.article {
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
  &-section {
    &__title {
      margin-bottom: 20px;
      font-size: 24px;
      line-height: 26px;
    }
    &__content {
      .q-markdown {
        p {
          display: flex;
        }
      }
      &-text {
        line-height: 25px;
      }
      &-image {
        margin-left: 27px;
        width: 300px;
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
</style>
