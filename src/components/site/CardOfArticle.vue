<template>
  <div>
    <router-link :to="{ name: 'blog.article', params: { id: article.id, title: article.name } }">
      <q-card class="card-article border-box column full-height" @click="$emit('get-article', article.id)">
        <div class="card-article__image overflow-hidden">
          <q-img v-if="article.image" native-context-menu :src="article.image" :ratio="26/14" />
          <q-img v-else native-context-menu src="../../assets/placeholder.png" :ratio="26/14" />
        </div>
        <q-card-section class="card-article__group column justify-between">
          <div class="card-article__group-headline column justify-between">
            <div class="q-mb-sm card-article__group-title text-h6 font-montserrat__semi-bold text-main line-transform__title text-purple-10">{{article.name}}</div>
            <div class="q-mb-md row q-gutter-xs">
              <div v-for="category in article.category" :key="category.id">
                <q-chip
                  dense
                  class="q-ma-none q-px-md card-article__group-category font-montserrat__semi-bold text-caption"
                  color="pink-6"
                  text-color="white"
                >
                  {{category.name}}
                </q-chip>
              </div>
            </div>
          </div>
          <div class="card-article__group-content">
            <div class="q-mb-xs card-article__group-description font-avenir__regular text-body2 line-transform__description letter-spacing__less text-grey-10">
               {{article.text}}
            </div>
            <div class="card-article__group-date font-avenir__bold text-subtitle2 text-grey-5">{{dateArticle}}</div>
          </div>
        </q-card-section>
      </q-card>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CardOfArticle',
  props: {
    article: Object
  },
  computed: {
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
    }
  }
}
</script>

<style scoped lang="scss">
a {
  text-decoration: none;
}
.line-transform__title {
  line-height: 20px;
}
.line-transform__description {
  line-height: 19px;
}
.card-article {
  &:not(:hover) {
    box-shadow: none;
  }
  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  }
  &:active {
    position: relative;
    top: 1px;
  }
  &__image {
    height: 140px;
    border-radius: 11px !important;
  }
  &__group {
    flex-grow: 1;
    &-headline {
      flex-grow: 1;
    }
    &-content {
      min-height: 120px;
    }
    &-description {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -moz-box;
      -moz-box-orient: vertical;
      display: -webkit-box;
      -webkit-line-clamp: 5;
      -webkit-box-orient: vertical;
      line-clamp: 5;
      box-orient: vertical;
    }
  }
}
</style>
