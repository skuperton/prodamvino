<template lang="pug">
  .b-contact-layout
    callback-component.__callback(
      :style="this.reversed ? {'order': 2, 'margin-top': `${this.$device.isMobileOrTablet ? '20px' : '40px'}`}: ''"
    )
    social-component.__social
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import Callback from '~/components/blanks/callback.vue'
import Social from '~/components/blanks/social.vue'
@Component({
  components: {
    'social-component': Social,
    'callback-component': Callback
  }
})
export default class Contact extends Vue {
  @Prop({ default: false }) reversed!: boolean
}
</script>
