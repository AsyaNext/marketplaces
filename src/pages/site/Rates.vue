<template>
  <q-page class="q-mt-lg rates">
    <div class="rates-headline font-montserrat__semi-bold text-purple-10">Тарифы</div>
    <div class="rates-subscription column items-center">
      <div class="rates-subscription__title font-montserrat__semi-bold text-purple-10 text-body1">Срок подписки</div>
      <div class="q-pa-xs rates-subscription__list row bg-purple-4 border-box">
        <div
          :class="{ 'active-item' : activeItem === item }"
          class="q-py-sm q-px-md rates-subscription__list-item border-box font-montserrat__semi-bold text-body2 text-uppercase cursor-pointer"
          v-for="item in subscription"
          :key="item.index"
          @click="activeItem = item"
        >
          {{item}}
        </div>
      </div>
    </div>
    <div class="rates-list row q-col-gutter-x-md">
      <card-of-rate class="rates-list__item col-3" v-for="rate in rates" :key="rate.index" :rate="rate" />
    </div>
  </q-page>
</template>

<script>
import CardOfRate from '../../components/site/CardOfRate'
export default {
  name: 'Rates',
  components: {
    CardOfRate
  },
  data () {
    return {
      activeItem: '',
      subscription: ['1 месяц', '3 месяца (скидка 10%)', '6 месяцев (скидка 20%)'],
      rates: [
        {
          name: 'Базовый',
          price: 4500,
          requests: 350,
          analysis_categories: true,
          analysis_brands: false,
          data_scan: false,
          data_for_days: 14
        },
        {
          name: 'Расширенный',
          price: 16000,
          requests: 1300,
          analysis_categories: true,
          analysis_brands: true,
          data_scan: true,
          data_for_days: 30,
          view_new: true
        },
        {
          name: 'Профессиональный',
          price: 25000,
          requests: 2700,
          analysis_categories: true,
          analysis_brands: true,
          data_scan: true,
          data_for_days: 45,
          view_new: true,
          change_date: true
        },
        {
          name: 'Элитный',
          price: 35000,
          requests: 4000,
          analysis_categories: true,
          analysis_brands: true,
          data_scan: true,
          data_for_days: 60,
          view_new: true,
          change_date: true
        }
      ]
    }
  },
  beforeMount () {
    this.activeItem = this.subscription[0]
  }
}
</script>

<style lang="scss">
  @import "../../css/styles/site/rates";
</style>
