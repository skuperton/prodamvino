<template lang="pug">
  .b-types-layout
    h2.__title(
      v-if="title && isMobile"
    ) {{title}}
    .__content
      card-product-component.__product(
        v-for="product in products"
        :key="product.id"
        :img-name="product.imageName"
        :name="product.name"
        :shadow="false"
        size="s"
      )
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import CardProduct from '~/components/blanks/card-product.vue'

export interface ITypes {
  title: string
  products: {
    id: number
    imageName: string
    name: string
  }[]
}

@Component({
  components: {
    'card-product-component': CardProduct
  }
})
export default class Types extends Vue {
  @Prop() readonly title!: ITypes['title']
  @Prop() readonly products!: ITypes['products']

  get isMobile () {
    return window.innerWidth < 650
  }
}
</script>
