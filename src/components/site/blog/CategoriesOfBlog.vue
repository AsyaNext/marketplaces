<template>
  <div class="categories bg-purple-2 border-box">
    <div class="q-py-md" v-if="widthWindow > 670">
      <div class="q-mx-md categories-title font-montserrat__semi-bold text-main text-purple-10">Категории</div>
      <q-list dense class="font-montserrat__regular text-body1 text-grey-10">
        <q-item class="categories-item" clickable v-for="category in categories" :key="category.id" @click="$emit('change-category', category)">
          {{category.name}}
        </q-item>
      </q-list>
    </div>
    <div class="q-py-sm" v-else>
      <q-expansion-item
        dense
        expand-icon="img:icons/icon-arrow-bottom.svg"
        class="categories-title font-montserrat__semi-bold text-main text-purple-10"
        label="Категории"
      >
        <q-list dense class="font-montserrat__regular text-body1 text-grey-10">
          <q-item clickable v-for="category in categories" :key="category.id" @click="$emit('change-category', category)">
            {{category.name}}
          </q-item>
        </q-list>
      </q-expansion-item>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CategoriesOfBlog',
  props: {
    categories: Array,
    widthWindow: Number
  }
}
</script>

<style lang="scss">
.categories {
  &-title {
    margin-bottom: 6px;
    img {
      margin-top: 6px;
      width: 12px;
      height: 12px;
    }
  }
  &-item {
    transition: all 0.3s ease;
    &:hover {
      background: rgba(138, 124, 177, 0.45);
    }
  }
}
</style>
