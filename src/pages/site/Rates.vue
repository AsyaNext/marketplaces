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
      <card-of-rate class="rates-list__item col-3" v-for="rate in ratesOrg" :key="rate.id" :rate="rate" :subscription="activeItem" />
    </div>
  </q-page>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import CardOfRate from '../../components/site/CardOfRate'
export default {
  name: 'Rates',
  components: {
    CardOfRate
  },
  data () {
    return {
      activeItem: '',
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
    console.log(this.ratesOrg)
    this.activeItem = this.subscription[0]
  }
}
</script>

<style lang="scss">
  @import "../../css/styles/site/rates";
</style>
