<template>
  <q-page class="q-mt-lg rates">
    <div class="page-headline font-montserrat__semi-bold text-purple-10">Тарифы</div>
    <div class="rates-subscription column items-center">
      <div class="rates-subscription__title font-montserrat__semi-bold text-purple-10 text-body1">Срок подписки</div>
      <div class="q-pa-xs rates-subscription__list row no-wrap bg-purple-4 border-box">
        <div
          :class="{ 'active-item' : activeItem === item }"
          class="q-py-sm q-px-md rates-subscription__list-item row justify-center items-center border-box font-montserrat__semi-bold text-body2 text-center text-uppercase cursor-pointer"
          v-for="item in subscription"
          :key="item.index"
          @click="activeItem = item"
        >
          {{item}}
        </div>
      </div>
    </div>
    <div class="rates-wrapper">
      <div ref="rates" class="rates-list row q-col-gutter-x-md no-wrap">
        <card-of-rate class="rates-list__item col" v-for="rate in ratesOrg" :key="rate.id" :rate="rate" :subscription="activeItem" />
      </div>
      <div v-show="widthWindow <= 1160" class="rates-slider row justify-center q-gutter-x-xs">
        <div :class="{ 'active-point' : activePoint === i }" class="rates-slider__point cursor-pointer" v-for="i in 4" :key="i"></div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import CardOfRate from '../../components/site/CardOfRate'
export default {
  name: 'Rates',
  props: {
    widthWindow: Number
  },
  components: {
    CardOfRate
  },
  data () {
    return {
      slide: 1,
      activeItem: '',
      activePoint: 1,
      subscription: ['1 месяц', '3 месяца (скидка 10%)', '6 месяцев (скидка 20%)']
    }
  },
  computed: {
    ...mapGetters({
      ratesOrg: 'rates/rates'
    })
  },
  methods: {
    ...mapActions({
      getRates: 'rates/getRates'
    })
  },
  beforeMount () {
    this.getRates()
    this.activeItem = this.subscription[0]
  }
}
</script>

<style lang="scss">
  @import "../../css/styles/site/rates";
</style>
