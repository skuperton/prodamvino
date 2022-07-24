<template lang="pug">
  main.b-main
    hero-component
    products-component
    popularity-component
    steps-component
    reviews-component
    promo-component
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Products from '~/components/sections/products.vue'
import Hero from '~/components/sections/hero.vue'
import Popularity from '~/components/sections/popularity.vue'
import Steps from '~/components/sections/steps.vue'
import Promo from '~/components/sections/promo.vue'
import Reviews from '~/components/sections/reviews.vue'
import getOs from '~/ts/getOs'

@Component({
  components: {
    'reviews-component': Reviews,
    'promo-component': Promo,
    'steps-component': Steps,
    'popularity-component': Popularity,
    'products-component': Products,
    'hero-component': Hero
  }
})
export default class Home extends Vue {
}
</script>
