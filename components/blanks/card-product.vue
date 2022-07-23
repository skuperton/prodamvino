<template lang="pug">
  .b-card-product
    img.__image(
      height="123"
      width="110"
      src="images/alcohol/vine.svg"
    )
    p.__name Вино
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class CardProduct extends Vue {

}
</script>
