<template lang="pug">
  div.b-page
    header-component
    Nuxt.b-layout
    footer-component
</template>

<script lang="ts">
import { Component, mixins } from 'nuxt-property-decorator'
import Header from '~/components/blanks/header.vue'
import Footer from '~/components/blanks/footer.vue'
import 'aos/dist/aos.css'
import AosMixin from '~/mixins/aos'
import getOs from '~/ts/getOs'

@Component({
  components: {
    'header-component': Header,
    'footer-component': Footer
  }
})
export default class DefaultLayout extends mixins(AosMixin) {
  mounted () {
    document.documentElement.classList.add(`os-${getOs()}`)

    // @ts-ignore
    this.$scrollTo('body')
  }
}
</script>

<style lang="scss">
.page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.layout {
  flex-grow: 1;
}
</style>
