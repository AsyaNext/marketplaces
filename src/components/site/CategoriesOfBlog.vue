<template>
  <div class="q-py-md categories bg-purple-2 border-box">
    <div class="q-mx-md categories-title font-montserrat__semi-bold text-main text-purple-10">Категории</div>
    <q-list dense class="font-montserrat__regular text-body1 text-grey-10">
      <q-item clickable v-for="i in 6" :key="i" @click="$emit('change-category', i)">
        Категория {{i}}
      </q-item>
    </q-list>
  </div>
</template>

<script>
export default {
  name: 'CategoriesOfBlog'
}
</script>

<style scoped lang="scss">
.categories {
  &-title {
    margin-bottom: 6px;
  }
}
</style>
