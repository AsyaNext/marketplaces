<template>
  <q-page class="index-page text-white">
    <section class="index-page-functions">
      <div class="index-page-functions__title font-montserrat__semi-bold text-h3">О сервисе</div>
      <div class="q-pl-lg index-page-functions__group row">
        <div class="index-page-functions__group-image border-box relative-position">
          <q-img src="https://c.wallhere.com/photos/b4/51/space_mix_up_purple_triangle_blurred_3D-51035.jpg!d" class="img border-box relative-position" :ratio="475/340" />
        </div>
        <div class="index-page-functions__group-column">
          <div class="index-page-functions__group-column-title font-montserrat__semi-bold text-h5">Функция</div>
          <div class="index-page-functions__group-column-description font-avenir__regular text-main">Описание функции</div>
        </div>
      </div>
      <div class="q-pr-xl index-page-functions__group row justify-end">
        <div class="index-page-functions__group-column text-right">
          <div class="index-page-functions__group-column-title font-montserrat__semi-bold text-h5">Функция</div>
          <div class="index-page-functions__group-column-description font-avenir__regular text-main">Описание функции</div>
        </div>
        <div class="index-page-functions__group-image border-box relative-position">
          <q-img src="https://2.bp.blogspot.com/-mDGwCOpFSX8/Ua8UvT8EDII/AAAAAAAAABU/9ssWXGSF3fk/s1600/KEYBOARD.jpg" class="img border-box relative-position" :ratio="475/340" />
        </div>
      </div>
    </section>
    <section class="index-page-advantages">
      <div class="index-page-advantages__title font-montserrat__semi-bold text-h3">Наши преимущества</div>
      <div class="index-page-advantages__list">
        <div class="index-page-advantages__list-item relative-position">
          <div class="index-page-advantages__list-item-number absolute font-montserrat__bold">1</div>
          <div class="index-page-advantages__list-item-description text-justify text-main font-avenir__demi-bold">
            Самые точные данные по продажам на Wildberries.
            Наши алгоритмы наиболее точно оценивают продажи каждого товара на Wildberries.
            Мы знаем даже о продажах цифровых товаров и товаров проданных по модели FBS!
          </div>
        </div>
        <div class="index-page-advantages__list-item relative-position">
          <div class="index-page-advantages__list-item-number absolute font-montserrat__bold">2</div>
          <div class="index-page-advantages__list-item-description text-justify text-main font-avenir__demi-bold">
            Все новинки и тренды.
            Оперативная информация о новинках и трендах.
            Узнайте, какой товар «выстрелит» и запустите его в продажу раньше конкурентов!
          </div>
        </div>
        <div class="index-page-advantages__list-item relative-position">
          <div class="index-page-advantages__list-item-number absolute font-montserrat__bold">3</div>
          <div class="index-page-advantages__list-item-description text-justify text-main font-avenir__demi-bold">
            Анализ категорий и брендов.
            Подскажем категории с максимальным объемом выручки и прибыли!
            В каких категориях топовые товары конкурентов.
          </div>
        </div>
        <div class="index-page-advantages__list-item relative-position">
          <div class="index-page-advantages__list-item-number absolute font-montserrat__bold">4</div>
          <div class="index-page-advantages__list-item-description text-justify text-main font-avenir__demi-bold">
            Позиции товаров в категории.
            Отслеживайте позиции товаров в категории. Изучайте “фишки” успешных товаров конкурентов.
          </div>
        </div>
        <div class="index-page-advantages__list-item relative-position">
          <div class="index-page-advantages__list-item-number absolute font-montserrat__bold">5</div>
          <div class="index-page-advantages__list-item-description text-justify text-main font-avenir__demi-bold">
            Аналитика в реальном времени.
            Наши роботы постоянно сканируют Wildberries.
            Мы оперативно покажем изменения цен и скидки на товары конкурентов.
          </div>
        </div>
        <div class="index-page-advantages__list-item relative-position">
          <div class="index-page-advantages__list-item-number absolute font-montserrat__bold">6</div>
          <div class="index-page-advantages__list-item-description text-justify text-main font-avenir__demi-bold">
            Подробные отчёты и графики.
            Все данные представлены максимально подробно и удобно.
            Можно фильтровать информацию и анализировать только интересующие показатели.
          </div>
        </div>
      </div>
    </section>
    <div class="background-items">
      <div class="background-items-rectangle absolute"></div>
      <div class="background-items-rhombus absolute"></div>
      <div class="background-items-sticks absolute">
        <div class="background-items-sticks__first absolute"></div>
        <div class="background-items-sticks__second absolute"></div>
        <div class="background-items-sticks__third absolute"></div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex'
}
</script>

<style lang="scss">
  @import "../../css/styles/site/index-page";
</style>
