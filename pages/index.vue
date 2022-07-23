<template lang="pug">
  main.b-main
    hero-component
    products-component
    popularity-component
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Products from '~/components/sections/products.vue'
import Hero from '~/components/sections/hero.vue'
import Popularity from '~/components/sections/popularity.vue'

@Component({
  components: {
    'popularity-component': Popularity,
    'products-component': Products,
    'hero-component': Hero
  }
})
export default class Home extends Vue {
}
</script>
