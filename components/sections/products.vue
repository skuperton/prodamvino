<template lang="pug">
  section.b-products
    .container.__container
      .__wrapper
        card-product-component.__card(
          v-for="_ in 5"
        )
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import CardProduct from '~/components/blanks/card-product.vue'

@Component({
  components: {
    'card-product-component': CardProduct
  }
})
export default class Products extends Vue {
}
</script>
