<template lang="pug">
  main.b-main
    hero-component
    products-component
    popularity-component
    steps-component
    reviews-component
    promo-component
    redemption-component
    questions-component
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Products from '~/components/sections/products.vue'
import Hero from '~/components/sections/hero.vue'
import Popularity from '~/components/sections/popularity.vue'
import Steps from '~/components/sections/steps.vue'
import Promo from '~/components/sections/promo.vue'
import Reviews from '~/components/sections/reviews.vue'
import Questions from '~/components/sections/questions.vue'
import Redemption from '~/components/sections/redemption.vue'

@Component({
  components: {
    'redemption-component': Redemption,
    'questions-component': Questions,
    'reviews-component': Reviews,
    'promo-component': Promo,
    'steps-component': Steps,
    'popularity-component': Popularity,
    'products-component': Products,
    'hero-component': Hero
  },
  head () {
    return {
      title: 'Скупка алкоголя. Он-лайн калькулятор выкупа алкоголя',
      meta: [
        {
          name: 'description',
          content: 'Продать элитный или коллекционный алкоголь с выгодной оценкой. Наши курьеры в Москве проведут сделку быстро ,на лучших условиях'
        }
      ]
    }
  }
})
export default class Home extends Vue {

}
</script>
