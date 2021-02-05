<template>
  <div class="headline row items-end q-gutter-x-md text-purple-10">
    <div class="headline-title font-montserrat__semi-bold cursor-pointer" @click="$emit('drop-data')">{{mainTitle}}</div>
    <div v-show="search && !article" class="headline-category row q-gutter-x-md items-end">
      <q-icon name="fas fa-caret-right" size="sm"/>
      <div class="headline-category__title font-montserrat__semi-bold text-body1 cursor-pointer" @click="$emit('drop-article')">Результаты поиска <span v-show="widthWindow > 670">"{{search}}"</span></div>
    </div>
    <div v-show="category" class="headline-category row q-gutter-x-md items-end no-wrap">
      <q-icon name="fas fa-caret-right" size="sm"/>
      <div class="headline-category__title font-montserrat__semi-bold text-body1 cursor-pointer" @click="$emit('drop-article')">{{category}}</div>
    </div>
    <div
      v-show="(article && widthWindow > 670) || (widthWindow <= 670 && !category && article)"
      :class="[{ 'q-gutter-x-md': widthWindow > 670 }, { 'q-mt-md': widthWindow <= 670 }, { 'items-end': widthWindow > 340 }]"
      class="headline-article row no-wrap"
    >
      <q-icon name="fas fa-caret-right" size="sm"/>
      <div class="headline-article__title font-montserrat__semi-bold text-body1">{{article}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseSubmenu',
  props: {
    mainTitle: String,
    category: String,
    article: String,
    search: String,
    widthWindow: Number
  }
}
</script>

<style scoped lang="scss">
.headline {
  margin-bottom: 39px;
  @media (max-width: 670px) {
    margin-bottom: 15px;
  }
  &-title {
    font-size: 30px;
    line-height: 100%;
  }
  &-category, &-acticle {
    &__title {
      line-height: 125%;
    }
  }
}
</style>
