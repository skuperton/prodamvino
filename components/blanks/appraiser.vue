<template lang="pug">
  .b-appraiser
    nuxt-img.__image(
      v-if="name"
      :src="`images/appraiser/${name}.svg`"
    )
    .__rating
      span {{rate}}
      p рейтинг
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component
export default class Appraiser extends Vue {
  @Prop({ required: true }) name!: 'yandex' | 'google'
  @Prop({ default: '5,0' }) rate!: string | number
}
</script>
