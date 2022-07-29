<template lang="pug">
  .b-sale
    header-component
    transition(
      name="fade"
      mode="out-in"
    )
      Nuxt
    reviews-component
    products-component(
      title="Продать другие напитки"
    )
    questions-component
    steps-component
    popularity-component
    footer-component
</template>

<style lang="scss">
.sale {
  padding-top: 100px;

  @media (min-width: 650px) {
    padding-top: 140px;
  }

  @media (min-width: 1200px) {
    padding-top: 160px;
  }
}
</style>
<script>
import Vue from 'vue'
import { Component } from 'nuxt-property-decorator'
import AOS from 'aos'
import Reviews from '@/components/sections/reviews'
import Products from '@/components/sections/products'
import Questions from '@/components/sections/questions'
import Steps from '@/components/sections/steps'
import Popularity from '@/components/sections/popularity'
import Header from '@/components/blanks/header'
import Footer from '@/components/blanks/footer'
import getOs from '@/ts/getOs'

@Component({
  components: {
    'popularity-component': Popularity,
    'steps-component': Steps,
    'questions-component': Questions,
    'products-component': Products,
    'reviews-component': Reviews,
    'header-component': Header,
    'footer-component': Footer
  }
})
export default class SellingLayout extends Vue {
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
