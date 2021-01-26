<template>
  <div>
    <div class="card-rate column full-height">
      <div class="card-rate__headline">
        <div class="q-mb-xs card-rate__headline-name font-montserrat__medium text-white">{{rate.name}}</div>
        <div class="row">
          <div class="card-rate__headline-symbol font-montserrat__medium text-main text-white">₽</div>
          <div class="q-mr-sm card-rate__headline-price font-montserrat__medium text-white">{{rate.price}}</div>
          <div class="card-rate__headline-mounth font-montserrat__medium text-body2 text-white">/месяц</div>
        </div>
      </div>
      <div class="card-rate__content bg-purple-2 font-montserrat__regular text-body2 text-center text-grey-9">
        <div class="card-rate__content-item">Запросов в сутки до
          <span class="font-montserrat__semi-bold">{{rate.requests}}</span>
        </div>
        <div class="card-rate__content-item">Анализ по категориям:
          <span v-if="rate.analysis_categories" class="font-montserrat__semi-bold">да</span>
          <span v-else class="font-montserrat__semi-bold">нет</span>
        </div>
        <div class="card-rate__content-item">Анализ по брендам:
          <span v-if="rate.analysis_brands" class="font-montserrat__semi-bold">да</span>
          <span v-else class="font-montserrat__semi-bold">нет</span>
        </div>
        <div class="card-rate__content-item">Промежуточные данные сканирования:
          <span v-if="rate.data_scan" class="font-montserrat__semi-bold">да</span>
          <span v-else class="font-montserrat__semi-bold">нет</span>
        </div>
        <div v-show="rate.view_new" class="card-rate__content-item">Возможность отображения только новинок</div>
        <div v-if="rate.name === 'Базовый' || rate.name === 'Расширенный'" class="card-rate__content-item">Данные за последние
          <span class="font-montserrat__semi-bold"> {{rate.data_for_days}} </span>суток
        </div>
        <div v-else class="card-rate__content-item">Окно выборки данных до
          <span class="font-montserrat__semi-bold"> {{rate.data_for_days}} </span>суток
        </div>
        <div v-show="rate.change_date" class="card-rate__content-item">Возможность изменения окна дат</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardOfRate',
  props: {
    rate: Object
  }
}
</script>

<style scoped lang="scss">
.card-rate {
  &__headline {
    border-radius: 15px 15px 0 0;
    padding: 12px 18px 14px;
    &-name {
      font-size: 20px;
      line-height: 24px;
    }
    &-symbol {
      margin-top: 10px;
      margin-right: 10px;
      align-self: flex-start;
    }
    &-price {
      font-size: 40px;
    }
    &-mounth {
      margin-bottom: 12px;
      align-self: flex-end;
    }
  }
  &__content {
    flex-grow: 1;
    padding: 30px 16px;
    border-radius: 0 0 15px 15px;
    &-item {
      line-height: 100%;
      &:not(:last-child) {
        margin-bottom: 20px;
      }
    }
  }
}
</style>
