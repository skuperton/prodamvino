<template lang="pug">
  .b-tag
    nuxt-img.__image(
      v-if="imgName"
      :src="`/images/alcohol/${imgName}-min.svg`"
    )
    p.__text {{name}}
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

export interface ITag {
  name: 'kon' | 'shamp' | 'vine' | 'viski' | 'vodka'
}

@Component
export default class Tag extends Vue {
  @Prop({ required: true }) readonly name!: string
  @Prop({ required: true }) readonly imgName!: string
}
</script>
