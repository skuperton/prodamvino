<template lang="pug">
  section.b-products
    .container.__container
      .__wrapper
        card-product-component.__card(
          v-for="product in products"
          :key="product.id"
          :img-name="product.imageName"
          :name="product.name"
          :data-aos-delay="150+(product.id*100)"
          data-aos="fade"
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
  products = [
    {
      id: 1,
      imageName: 'vine',
      name: 'Вино'
    },
    {
      id: 2,
      imageName: 'kon',
      name: 'Коньяк'
    },
    {
      id: 3,
      imageName: 'viski',
      name: 'Виски'
    },
    {
      id: 4,
      imageName: 'vodka',
      name: 'Водка'
    },
    {
      id: 5,
      imageName: 'shapm',
      name: 'Шампанское'
    }
  ]
}
</script>
