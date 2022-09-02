import { Component, Vue } from 'nuxt-property-decorator'
import AOS from 'aos'
import 'aos/dist/aos.css'

@Component
export default class AosMixin extends Vue {
  mounted () {
    AOS.init({
      // Global settings
      startEvent: 'DOMContentLoaded',
      disable: this.$device.isMobileOrTablet,

      // Settings that can be overridden
      offset: 150,
      duration: 600,
      easing: 'ease',
      mirror: false,
      once: true
    })
  }

  beforeDestroy () {
    AOS.refreshHard()
  }
}
