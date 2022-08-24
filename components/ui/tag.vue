<template lang="pug">
  .b-tag
    img.__image(
      v-if="imgName"
      :src="imgName"
    )
    p.__text {{correctName}}
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

  get correctName () {
    const splitted = this.name.split('')

    const first = splitted[0].toUpperCase()

    const rest = [...splitted]

    rest.splice(0, 1)

    return [first, ...rest].join('')
  }
}
</script>
