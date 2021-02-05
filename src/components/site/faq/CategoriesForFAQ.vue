<template>
  <div class="column q-gutter-y-lg">
    <div
      class="category row items-center bg-white cursor-pointer border-box"
      v-for="category in categories"
      :key="category.id"
      @click="chooseCategory(category)"
    >
      <q-img :src="category.image" class="category-img" ratio="1"/>
      <div class="category-content col">
        <div class="q-mb-sm font-montserrat__semi-bold text-main text-purple-10">{{category.name}}</div>
        <div class="faq-description font-avenir__regular text-body1 text-grey-10 text-justify">{{category.description}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'CategoriesForFAQ',
  props: {
    categories: Array
  },
  methods: {
    ...mapActions({
      getCategory: 'faq/getSpecCategory'
    }),
    chooseCategory (category) {
      localStorage.setItem('category', category.name)
      this.$router.push({ name: 'faq.category', params: { id: category.id, title: category.name } })
    }
  }
}
</script>

<style lang="scss">
.category {
  padding: 28px 30px;
  transition: all 0.3s ease;
  &:hover {
    box-shadow: 0 0 15px rgba(138, 124, 177, 0.45);
  }
  .q-img {
    &__image {
      background-size: contain !important;
    }
  }
  &-img {
    width: 70px;
    margin-right: 33px;
    @media (max-width: 360px) {
      width: 60px;
    }
  }
}
</style>
