<template lang="pug">
  div
    header-component
    Nuxt
    footer-component
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Header from '~/components/blanks/header.vue'
import Footer from '~/components/blanks/footer.vue'
import getOs from '~/ts/getOs'

@Component({
  components: {
    'header-component': Header,
    'footer-component': Footer
  }
})
export default class DefaultLayout extends Vue {
  mounted () {
    window.onbeforeunload = () => {
      window.scrollTo(0, 0)
    }
    document.documentElement.classList.add(`os-${getOs()}`)
  }
}
</script>
