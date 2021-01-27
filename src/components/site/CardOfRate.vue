<template>
  <div>
    <div class="card-rate column full-height">
      <div class="card-rate__headline">
        <div class="q-mb-xs card-rate__headline-name font-montserrat__medium text-white">{{rate.name}}</div>
        <div class="row">
          <div class="card-rate__headline-symbol font-montserrat__medium text-main text-white">₽</div>
          <div class="q-mr-sm card-rate__headline-price font-montserrat__medium text-white">{{price}}</div>
          <div class="card-rate__headline-mounth font-montserrat__medium text-body2 text-white">/месяц</div>
        </div>
      </div>
      <div class="card-rate__content bg-purple-2 font-montserrat__regular text-body2 text-center text-grey-9">
        <div class="card-rate__content-item">Запросов в сутки до
          <span class="font-montserrat__semi-bold">{{rate.requests_number}}</span>
        </div>
        <div class="card-rate__content-item">Анализ по категориям:
          <span v-if="rate.category_enabled" class="font-montserrat__semi-bold">да</span>
          <span v-else class="font-montserrat__semi-bold">нет</span>
        </div>
        <div class="card-rate__content-item">Анализ по брендам:
          <span v-if="rate.brands_enabled" class="font-montserrat__semi-bold">да</span>
          <span v-else class="font-montserrat__semi-bold">нет</span>
        </div>
        <div class="card-rate__content-item">Промежуточные данные сканирования:
          <span v-if="rate.scan_enabled" class="font-montserrat__semi-bold">да</span>
          <span v-else class="font-montserrat__semi-bold">нет</span>
        </div>
        <div v-if="rate.name === 'Базовый' || rate.name === 'Расширенный'" class="card-rate__content-item">Данные за последние
          <span class="font-montserrat__semi-bold"> {{rate.data_by}} </span>суток
        </div>
        <div v-else class="card-rate__content-item">Окно выборки данных до
          <span class="font-montserrat__semi-bold"> {{rate.data_by}} </span>суток
        </div>
        <div class="card-rate__content-item" v-for="item in rate.addition.split(',')" :key="item.index">{{item}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardOfRate',
  props: {
    rate: Object,
    subscription: String
  },
  computed: {
    price () {
      if (this.subscription === '3 месяца (скидка 10%)') {
        return (this.rate.price * 3 * 0.9).toLocaleString()
      } else if (this.subscription === '6 месяцев (скидка 20%)') {
        return (this.rate.price * 6 * 0.8).toLocaleString()
      } else {
        return this.rate.price.toLocaleString()
      }
    }
  }
}
</script>

<style scoped lang="scss">
.card-rate {
  &__headline {
    border-radius: 15px 15px 0 0;
    padding: 12px 4px 14px 18px;
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
