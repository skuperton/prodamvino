<template lang="pug">
  .b-types-layout
    h2.__title(
      v-if="title && isMobile"
    ) {{title}}
    .__content
      NuxtLink.__card(
        v-for="product in products"
        :key="product.id"
        :to="product.to"
        v-on:click.native="$emit('clicked', $event)"
      )
        card-product-component.__product(
          :image="product.image"
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
    image: string
    name: string
    to: string
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
