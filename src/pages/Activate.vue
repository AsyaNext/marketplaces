<template>
  <q-page>
    <confirm-email :status="openConfirmEmail" @close-modal="$router.push('/')"/>
  </q-page>
</template>

<script>
import ConfirmEmail from 'components/popups/ConfirmEmail'
import { mapActions } from 'vuex'
export default {
  name: 'Activate',
  components: {
    ConfirmEmail
  },
  data () {
    return {
      openConfirmEmail: false
    }
  },
  methods: {
    ...mapActions({
      activateUser: 'auth/activateUser'
    })
  },
  created () {
    const { uid, token } = this.$route.params
    this.activateUser({ uid: uid, token: token })
      .then(() => {
        this.openConfirmEmail = true
      })
  }
}
</script>
