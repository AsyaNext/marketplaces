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
      <div ref="rates" class="rates-list row q-col-gutter-x-md no-wrap" @scroll="onScroll">
        <card-of-rate class="rates-list__item col" v-for="rate in ratesOrg" :key="rate.id" :rate="rate" :subscription="activeItem" />
      </div>
      <div v-show="widthWindow <= 1160" class="rates-slider row justify-center q-gutter-x-xs">
        <div :class="{ 'active-point' : activePoint === i }" class="rates-slider__point cursor-pointer" v-for="i in 4" :key="i" @click="(event) => onToggle(event, i)"></div>
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
      preventScrolling: false,
      slide: 1,
      activeItem: '',
      activePoint: 1,
      subscription: ['1 месяц', '3 месяца (скидка 10%)', '6 месяцев (скидка 20%)']
    }
  },
  computed: {
    ...mapGetters({
      ratesOrg: 'rates/rates'
    }),
    availableWidth () {
      return this.widthWindow / 290
    }
  },
  methods: {
    ...mapActions({
      getRates: 'rates/getRates'
    }),
    onScroll (event) {
      if (!this.preventScrolling) {
        const scrollOffset = event.target.scrollLeft / 290
        if (scrollOffset <= 1 / this.availableWidth) {
          this.activePoint = 1
        } else if (scrollOffset > 1 / this.availableWidth && scrollOffset < 2 / this.availableWidth) {
          this.activePoint = 2
        } else if (scrollOffset > 2 / this.availableWidth && scrollOffset < 3 / this.availableWidth) {
          this.activePoint = 3
        } else {
          this.activePoint = 4
        }
      }
    },
    onToggle (event, i) {
      this.preventScrolling = true
      this.activePoint = i
      const scrollTo = ((i - 1) / this.availableWidth) * 290
      this.$refs.rates.scrollTo({ left: scrollTo, behavior: 'smooth' })
      setTimeout(() => {
        this.preventScrolling = false
      }, 500)
    }
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
