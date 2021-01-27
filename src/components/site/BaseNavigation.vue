<template>
  <div class="headline row items-end q-gutter-x-md text-purple-10">
    <div class="headline-title font-montserrat__semi-bold cursor-pointer" @click="$emit('drop-data')">{{mainTitle}}</div>
    <div v-if="category" class="headline-category row q-gutter-x-md items-end">
      <q-icon name="fas fa-caret-right" size="sm"/>
      <div class="headline-category__title font-montserrat__semi-bold text-body1 cursor-pointer" @click="$emit('drop-article')">{{category}}</div>
    </div>
    <div v-if="article" class="headline-category row q-gutter-x-md items-end">
      <q-icon name="fas fa-caret-right" size="sm"/>
      <div class="headline-category__title font-montserrat__semi-bold text-body1">{{article}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseSubmenu',
  props: {
    mainTitle: String,
    category: String,
    article: String
  }
}
</script>

<style scoped lang="scss">
.headline {
  margin-bottom: 39px;
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
