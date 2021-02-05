<template>
  <q-page class="q-mt-lg api">
    <div class="page-headline font-montserrat__semi-bold text-purple-10">API</div>
    <div class="row">
      <div class="api-navigation col-3">
        <div class="api-navigation__wrapper" v-for="section in sections" :key="section.name">
          <div
            :class="{ 'bg-purple-13' : openSection.name === section.name }"
            class="q-py-md q-px-lg api-navigation__section font-montserrat__semi-bold text-white text-body1 text-uppercase cursor-pointer"
            @click="openArticle(section)"
          >
            {{section.name}}
          </div>
          <div v-show="openSection.name === section.name">
            <div
              class="api-navigation__section-subsection"
              v-for="subsection in section.submenu"
              :key="subsection.index">
              <router-link :to="{ hash: `#${section.submenu.indexOf(subsection) + 1}` }" @click.native="anchorHashCheck">
                <div class="api-navigation__section-subsection-item font-montserrat__medium bg-white text-grey-10 text-body1">
                  {{subsection}}
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="api-content col">
        <router-view :section="openSection" />
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Api',
  props: {
    widthWindow: Number
  },
  data () {
    return {
      openSection: null,
      sections: [
        {
          name: 'Раздел 1',
          slug: '',
          submenu: ['Страница 1', 'Страница 2', 'Страница 3']
        },
        {
          name: 'Раздел 2',
          slug: 'section-first',
          submenu: ['Страница 1', 'Страница 2']
        },
        {
          name: 'Раздел 3',
          slug: 'section-second',
          submenu: ['Страница 1', 'Страница 2', 'Страница 3']
        }
      ]
    }
  },
  methods: {
    openArticle (section) {
      this.openSection = section
      if (this.openSection.slug !== '') {
        this.$router.push({ name: 'api.article', params: { slug: this.openSection.slug } })
      } else {
        this.$router.push('/api')
      }
    },
    anchorHashCheck () {
      if (window.location.hash === this.$route.hash) {
        const el = document.getElementById(this.$route.hash.slice(1))
        if (el) {
          window.scrollTo(0, el.offsetTop)
        }
      }
    }
  },
  mounted () {
    this.anchorHashCheck()
  },
  beforeMount () {
    this.openSection = this.sections[0]
  }
}
</script>

<style scoped lang="scss">
  @import "../../css/styles/site/api";
</style>
