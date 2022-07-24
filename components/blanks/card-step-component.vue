<template lang="pug">
  .b-card-step(
    :style="cardBackground"
  )
    .__wrapper
      span.__number {{number}}
      h3.__title {{title}}
      p.__text {{text}}
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component
export default class CardStep extends Vue {
  @Prop() number!: string
  @Prop() title!: string
  @Prop() text!: string
  @Prop() imgName!: string

  get cardBackground () {
    return { 'background-image': `url("/images/steps/${this.imgName}.png")` }
  }
}
</script>
