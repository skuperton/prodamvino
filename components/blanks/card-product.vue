<template lang="pug">
  .b-card-product
    img.__image(
      height="123"
      width="110"
      :src="`images/alcohol/${imgName}.svg`"
    )
    p.__name {{name}}
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component
export default class CardProduct extends Vue {
  @Prop() imgName!: string
  @Prop() name!: string
}
</script>
