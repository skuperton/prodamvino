<template lang="pug">
  .b-card-product(
    :style="shadow ? {'box-shadow': '0 2px 10px rgba(0, 0, 0, 0.1)'} : ''"
    :class="classes"
    data-aos="fade"
    data-aos-delay="200"
  )
    img.__image(
      :src="image"
      height="123"
      width="110"
    )
    p.__name {{correctName}}
</template>

<script lang="ts">
import { Component, mixins, Prop } from 'nuxt-property-decorator'
import AosMixin from '~/mixins/aos'

@Component
export default class CardProduct extends mixins(AosMixin) {
  @Prop({ default: 'm' }) size!: 'm' | 's'
  @Prop() image!: string
  @Prop() name!: string
  @Prop({ default: true }) shadow!: boolean

  get classes (): string[] {
    const classes = [
      `card-product--size-${this.size}`
    ]

    return classes
  }

  get correctName () {
    const splitted = this.name.split('')

    const first = splitted[0].toUpperCase()

    const rest = [...splitted]

    rest.splice(0, 1)

    return [first, ...rest].join('')
  }
}
</script>
