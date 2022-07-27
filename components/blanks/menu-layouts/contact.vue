<template lang="pug">
  .b-contact-layout
    callback-component.__callback
    social-component.__social
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Callback from '~/components/blanks/callback.vue'
import Social from '~/components/blanks/social.vue'
@Component({
  components: {
    'social-component': Social,
    'callback-component': Callback
  }
})
export default class Contact extends Vue {
}
</script>
