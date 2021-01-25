<template>
  <div class="col-9">
    <div class="article q-pa-md bg-white">
      <q-img native-context-menu class="q-mb-md article-cover" src="https://cdn.quasar.dev/img/mountains.jpg" :ratio="79/23" />
      <div class="q-mb-lg article-extradata row justify-between items-center">
        <q-chip
          dense
          class="q-px-md font-montserrat__semi-bold text-caption"
          color="pink-6"
          text-color="white">
          Категория
        </q-chip>
        <div class="font-avenir__bold text-grey-5 letter-spacing__less text-caption">12.07.2020</div>
      </div>
      <div class="article-title font-montserrat__bold text-center text-purple-12">
        Wildberries в 2020 году удвоила продажи и покупателей
      </div>
      <div class="article-content font-avenir__regular text-main text-justify text-grey-10">
        <p>Статистику Wildberries за прошлый год цитирует vc.ru: выручка выросла на 96%, до 437 млрд рублей,
          число покупателей тоже выросло вдвое — с 18 млн до 40 млн человек — с пропорциональным ростом заказов,
          а продавцов — более чем вчетверо, с 19 тысяч до 91 тысячи.</p>
        <p>Сегмент fashion обеспечил компании точно половину годовой выручки — 218 млрд рублей. Но больше всего
          за пандемический год — в 17 раз — выросли продажи товаров для здоровья. Почти на порядок выросли продажи
          садовой техники и инвентаря. Больше трети выручки — 152 млрд рублей — пришлось на четвертый квартал.</p>
        <p>Такие показатели выводят Wildberries в топ-5 ритейлеров страны на уровень «М.Видео — Эльдорадо» группы
          «Сафмар» Михаила Гуцериева, пишет Forbes.</p>
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
    <div class="pagination row justify-between">
      <div class="pagination-back row items-center q-gutter-x-sm cursor-pointer">
        <q-icon name="keyboard_arrow_left" size="md" color="purple-10"></q-icon>
        <div class="font-montserrat__semi-bold text-purple-11 text-main">Назад</div>
      </div>
      <div class="pagination-forward row items-center q-gutter-x-sm cursor-pointer">
        <div class="font-montserrat__semi-bold text-purple-11 text-main">Следующая</div>
        <q-icon name="keyboard_arrow_right" size="md" color="purple-10"></q-icon>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageArticle',
  data () {
    return {
      article: 'Статья'
    }
  },
  created () {
    document.title = 'Статья о маркетплейсах'
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
  }
  &-section {
    &__title {
      margin-bottom: 20px;
      font-size: 24px;
      line-height: 26px;
    }
    &__content {
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
</style>
