<template>
  <q-page class="q-mt-lg contacts column">
    <div class="page-headline font-montserrat__semi-bold text-purple-10">
      Контакты
    </div>
    <div class="contacts-content column flex-center text-center">
      <div class="contacts-content__section">
        <div class="q-mb-md contacts-content__section-title font-montserrat__semi-bold text-h5 text-purple-12">
          Политика общения
        </div>
        <div class="contacts-content__section-text font-avenir__regular text-body1 text-grey-10">
          Текст, в котором указана информация о политике общения в компании со своими клиентами
        </div>
      </div>
      <div class="contacts-content__section">
        <div class="q-mb-md contacts-content__section-title font-montserrat__semi-bold text-h5 text-purple-12">
          Контактные данные
        </div>
        <div class="contacts-content__section-list row q-gutter-x-md">
          <q-icon class="cursor-pointer" :size="sizeIcon" name="img:icons/icon-telegram.svg" />
          <q-icon class="cursor-pointer" :size="sizeIcon" name="img:icons/icon-whatsapp.svg" />
          <q-icon class="cursor-pointer" :size="sizeIcon" name="img:icons/icon-viber.svg" />
          <q-icon class="cursor-pointer" :size="sizeIcon" name="img:icons/icon-facebook.svg" />
          <q-icon class="cursor-pointer" :size="sizeIcon" name="img:icons/icon-vk.svg" />
        </div>
      </div>
      <div class="contacts-content__section">
        <div class="q-mb-md contacts-content__section-title font-montserrat__semi-bold text-h5 text-purple-12">
          E-mail
        </div>
        <a class="contacts-content__section-email font-avenir__regular text-grey-10" href="mailto:support@gmail.com">support@gmail.com</a>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Contacts',
  props: {
    widthWindow: Number
  },
  computed: {
    sizeIcon () {
      if (this.widthWindow > 330) {
        return 'xl'
      } else {
        return 'lg'
      }
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../../css/styles/site/contacts";
</style>
