<template>
  <q-dialog v-model="status" persistent>
    <q-card class="confirm-email">
      <q-card-section class="row items-end q-pb-none">
        <q-space />
        <q-btn icon="close" color="purple-10" flat round dense @click="$emit('close-modal')" />
      </q-card-section>
      <q-card-section class="confirm-email-description font-montserrat__medium text-purple-10 text-center">
        Почта успешно подтверждена
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  name: 'ConfirmEmail',
  props: {
    status: Boolean
  }
}
</script>

<style scoped lang="scss">
.confirm-email {
  &-description {
    padding: 30px 36px 60px;
    font-size: 26px;
    line-height: 32px;
  }
}
@media (max-width: 550px) {
  .confirm-email {
    &-description {
      padding: 30px 30px 56px;
      font-size: 22px;
      line-height: 27px;
    }
  }
}
</style>
