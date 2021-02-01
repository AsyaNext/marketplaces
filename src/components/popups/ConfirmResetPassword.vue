<template>
  <q-dialog v-model="status" persistent>
    <q-card class="confirm-reset-password">
      <q-card-section class="row items-end q-pb-none">
        <q-space />
        <q-btn icon="close" color="purple-10" flat round dense @click="$emit('close-modal')" />
      </q-card-section>
      <q-card-section class="confirm-reset-password-description font-montserrat__medium text-purple-10 text-center">
        Пароль успешно изменён
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  name: 'ConfirmResetPassword',
  props: {
    status: Boolean
  }
}
</script>

<style scoped lang="scss">
.confirm-reset-password {
  &-description {
    padding: 30px 36px 60px;
    font-size: 26px;
    line-height: 32px;
  }
}
</style>
