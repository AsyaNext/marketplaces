<template>
  <q-dialog v-model="status" persistent>
    <q-card class="recovery-link">
      <q-card-section class="row items-end q-pb-none">
        <q-space />
        <q-btn icon="close" color="purple-10" flat round dense @click="$emit('close-modal')" />
      </q-card-section>
      <q-card-section class="recovery-link-description font-montserrat__medium text-purple-10 text-center">
        Письмо с ссылкой для сброса пароля отправлено на вашу почту, проверьте её, пожалуйста.
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  name: 'SendLinkForRecovery',
  props: {
    status: Boolean
  }
}
</script>

<style scoped lang="scss">
.recovery-link {
  &-description {
    padding: 30px 36px 60px;
    font-size: 26px;
    line-height: 32px;
  }
}
</style>
