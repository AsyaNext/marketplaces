<template>
  <div>
    <router-link :to="{ name: 'blog.article', params: { id: 1, title: 'Статья о маркетплейсе' } }">
      <q-card class="card-article border-box column full-height">
        <div class="card-article__image overflow-hidden">
          <q-img native-context-menu src="https://cdn.quasar.dev/img/mountains.jpg" :ratio="26/14" />
        </div>
        <q-card-section class="card-article__group column justify-between">
          <div class="q-mb-sm card-article__group-title text-h6 font-montserrat__semi-bold text-main line-transform__title text-purple-10">Очень длинное название статьи</div>
          <div>
            <q-chip
              dense
              class="q-ma-none q-mb-md q-px-md card-article__group-category font-montserrat__semi-bold text-caption"
              color="pink-6"
              text-color="white">
              Категория
            </q-chip>
            <div class="q-mb-xs card-article__group-description font-avenir__regular text-body2 line-transform__description letter-spacing__less text-grey-10">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores culpa, enim error fuga fugiat hic laborum minima natus obcaecati odio porro recusandae ullam vero. Deleniti eaque eius harum odio sapiente.
            </div>
            <div class="card-article__group-date font-avenir__bold text-subtitle2 text-grey-5">12.07.2020</div>
          </div>
        </q-card-section>
      </q-card>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CardOfArticle'
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
