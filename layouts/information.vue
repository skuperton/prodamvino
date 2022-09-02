<template lang="pug">
  .b-template
    header-component
    transition(
      name="fade"
      mode="out-in"
    )
      Nuxt
    reviews-component
    promo-component
    redemption-component
    questions-component
    footer-component
</template>

<script>
import { Component, mixins } from 'nuxt-property-decorator'
import Reviews from '@/components/sections/reviews'
import Promo from '~/components/sections/promo.vue'
import Questions from '@/components/sections/questions'
import Redemption from '~/components/sections/redemption.vue'
import Header from '@/components/blanks/header'
import Footer from '@/components/blanks/footer'
import AosMixin from '@/mixins/aos'
import getOs from '@/ts/getOs'

@Component({
  components: {
    'questions-component': Questions,
    'reviews-component': Reviews,
    'redemption-component': Redemption,
    'promo-component': Promo,
    'header-component': Header,
    'footer-component': Footer
  }
})
export default class SellingLayout extends mixins(AosMixin) {
  mounted () {
    document.documentElement.classList.add(`os-${getOs()}`)

    // @ts-ignore
    this.$scrollTo('body')
  }
}
</script>
