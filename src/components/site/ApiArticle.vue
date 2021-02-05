<template>
  <div class="q-py-lg q-px-md article border-box">
    <div v-show="section.submenu[0]" :id="1" class="article-section">
      <div class="article-section__title font-montserrat__semi-bold text-purple-12">Подзаголовок</div>
      <div class="article-section__content font-avenir__regular text-grey-10">
        <p>Статья для раздела - {{section.name}}</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur cupiditate dolorum excepturi incidunt,
          laborum, maxime perspiciatis quod ratione sed tempora tenetur veniam voluptatem. Accusantium blanditiis
          dolorem ea nulla, rerum veritatis!
        </p>
        <p>Aspernatur deleniti dolor ea eos ipsum laboriosam quaerat, ullam velit. Commodi deserunt enim expedita
          molestias quis quos reiciendis rerum? Asperiores beatae enim provident quia. Debitis doloremque excepturi
          officiis quasi voluptates!
        </p>
        <p>Accusamus asperiores atque aut dolore maiores omnis qui rem repellat soluta unde. Fugiat ipsum laudantium
          minima modi molestiae non numquam optio pariatur quae ratione rerum sequi, voluptatem voluptates! Minus,
          officia.
        </p>
      </div>
    </div>
    <div v-show="section.submenu[1]" :id="2" class="article-section">
      <div class="article-section__title font-montserrat__semi-bold text-purple-12">Название таблицы</div>
      <div class="article-section__content font-avenir__regular text-grey-10">
        <q-table
          separator="cell"
          :data="data"
          :columns="columns"
          row-key="name"
          class="no-shadow article-section__content-table"
          hide-bottom
        />
      </div>
    </div>
    <div v-show="section.submenu[2]" :id="3" class="article-section">
      <div class="article-section__title font-montserrat__semi-bold text-purple-12">Название таблицы 2</div>
      <div class="article-section__content font-avenir__regular text-grey-10">
        <q-table
          separator="cell"
          :data="data"
          :columns="columns"
          row-key="name"
          class="no-shadow article-section__content-table"
          hide-pagination
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ApiArticle',
  props: {
    section: Object
  },
  data () {
    return {
      columns: [
        { name: 'one', label: 'One', field: 'one', align: 'left' },
        { name: 'two', label: 'Two', field: 'two', align: 'left' },
        { name: 'three', label: 'Three', field: 'three', align: 'left' },
        { name: 'four', label: 'Four', field: 'four', align: 'left' },
        { name: 'five', label: 'Five', field: 'five', align: 'left' }
      ],
      data: [
        {
          one: 'Lorem Ipsum Lorem Ipsum',
          two: 'Lorem Ipsum',
          three: 'Lorem Ipsum',
          four: 'Lorem Ipsum',
          five: 'Lorem IpsumLorem IpsumLorem Ipsum'
        },
        {
          one: ' ',
          two: ' ',
          three: ' ',
          four: ' ',
          five: ' '
        },
        {
          one: ' ',
          two: ' ',
          three: ' ',
          four: ' ',
          five: ' '
        },
        {
          one: ' ',
          two: ' ',
          three: ' ',
          four: ' ',
          five: ' '
        },
        {
          one: ' ',
          two: ' ',
          three: ' ',
          four: ' ',
          five: ' '
        }
      ]
    }
  },
  created () {
    window.addEventListener('resize', this.updateWidth)
  }
}
</script>

<style lang="scss">
.article {
  background-color: white;
  margin-bottom: 28px;
  @media (max-width: 670px) {
    background-color: inherit;
  }
  &-section {
    &:not(:last-child) {
      margin-bottom: 40px;
    }
    &__title {
      margin-bottom: 20px;
      font-size: 24px;
      line-height: 26px;
    }
    &__content {
      font-size: 15px;
      line-height: 20px;
      &-table {
        box-sizing: content-box;
        background-color: inherit;
        border-radius: 0;
        .q-table thead, .q-table tr, .q-table th, .q-table td, {
          border: 0.5px solid rgba(0, 0, 0, 0.12);
        }
        @media (max-width: 670px) {
          .q-table thead, .q-table tr, .q-table th, .q-table td {
            border-color: rgba(138, 124, 177, 0.45);
          }
        }
        .q-table__middle {
          &::-webkit-scrollbar {
            height: 27px;
            background-color: inherit;
          }
          &::-webkit-scrollbar-track {
            border-radius: 24px;
            background-color: white;
            @media (max-width: 670px) {
              background-color: #F9F4FD;
            }
          }
          &::-webkit-scrollbar-thumb {
            background-color: #DDB4FD;
            border-radius: 24px;
            border: 9px solid white;
            @media (max-width: 670px) {
              border-color: #F9F4FD;
            }
          }
        }
      }
    }
  }
}
</style>
