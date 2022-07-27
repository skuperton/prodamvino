<template lang="pug">
  div.b-page
    header-component
    Nuxt.b-layout
    footer-component
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import AOS from 'aos'
import Header from '~/components/blanks/header.vue'
import Footer from '~/components/blanks/footer.vue'
import 'aos/dist/aos.css'
import getOs from '~/ts/getOs'

@Component({
  components: {
    'header-component': Header,
    'footer-component': Footer
  }
})
export default class DefaultLayout extends Vue {
  mounted () {
    AOS.init({
      // Global settings
      startEvent: 'DOMContentLoaded',
      disable: window.innerWidth < 1200,

      // Settings that can be overridden
      offset: 150,
      duration: 600,
      easing: 'ease',
      mirror: false,
      once: true
    })
    window.onbeforeunload = () => {
      window.scrollTo(0, 0)
    }
    document.documentElement.classList.add(`os-${getOs()}`)
  }

  beforeDestroy () {
    AOS.refreshHard()
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
