<template>
  <q-page class="index-page text-white">
    <section class="index-page-functions">
      <div class="index-page-functions__title font-montserrat__semi-bold text-h3">О сервисе</div>
      <div class="q-pl-lg index-page-functions__group row">
        <div class="index-page-functions__group-image relative-position">
          <div class="img relative-position"></div>
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
        <div class="index-page-functions__group-image relative-position">
          <div class="img relative-position"></div>
        </div>
      </div>
    </section>
    <section class="index-page-advantages">
      <div class="index-page-advantages__title font-montserrat__semi-bold text-h3">Наши преимущества</div>
      <div class="index-page-advantages__list">
        <div class="index-page-advantages__list-item relative-position">
          <div class="index-page-advantages__list-item-number absolute font-montserrat__bold">1</div>
          <div class="index-page-advantages__list-item-description text-justify text-main font-avenir__demi-bold">
            Наличие интернет ресурса дает возможность развивать бизнес за пределами своего
            географического положения и получить новых клиентов не только в своем регионе,
            а если вы того захотите то и за ее пределами.
          </div>
        </div>
        <div class="index-page-advantages__list-item relative-position">
          <div class="index-page-advantages__list-item-number absolute font-montserrat__bold">2</div>
          <div class="index-page-advantages__list-item-description text-justify text-main font-avenir__demi-bold">
            Электронный каталог ваших товаров и услуг в каждом доме,
            доступен 24 часа в сутки, 7 дней в неделю, 365 дней в году.
          </div>
        </div>
        <div class="index-page-advantages__list-item relative-position">
          <div class="index-page-advantages__list-item-number absolute font-montserrat__bold">3</div>
          <div class="index-page-advantages__list-item-description text-justify text-main font-avenir__demi-bold">
            Наличие интернет ресурса дает возможность развивать бизнес за пределами своего
            географического положения и получить новых клиентов не только в своем регионе,
            а если вы того захотите то и за ее пределами.
          </div>
        </div>
        <div class="index-page-advantages__list-item relative-position">
          <div class="index-page-advantages__list-item-number absolute font-montserrat__bold">4</div>
          <div class="index-page-advantages__list-item-description text-justify text-main font-avenir__demi-bold">
            Товар ваших конкурентов может быть хуже или дороже, чем ваш,
            но более популярный лишь потому, что у них есть интернет ресурс.
          </div>
        </div>
        <div class="index-page-advantages__list-item relative-position">
          <div class="index-page-advantages__list-item-number absolute font-montserrat__bold">5</div>
          <div class="index-page-advantages__list-item-description text-justify text-main font-avenir__demi-bold">
            Наличие интернет ресурса дает возможность развивать бизнес за пределами своего
            географического положения и получить новых клиентов не только в своем регионе,
            а если вы того захотите то и за ее пределами.
          </div>
        </div>
        <div class="index-page-advantages__list-item relative-position">
          <div class="index-page-advantages__list-item-number absolute font-montserrat__bold">6</div>
          <div class="index-page-advantages__list-item-description text-justify text-main font-avenir__demi-bold">
            Наличие интернет ресурса дает возможность развивать бизнес за пределами своего
            географического положения и получить новых клиентов не только в своем регионе,
            а если вы того захотите то и за ее пределами.
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
