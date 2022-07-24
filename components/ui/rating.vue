<template lang="pug">
  .b-rating(
    v-if="stars"
  )
    .__wrapper
      font-awesome-icon.__star(
        v-for="star in stars"
        :icon="star.filled ? ['fas', 'star'] : ['far', 'star']"
        :key="star.id"
      )
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

export interface IRating {
  rating: [{
    id: number,
    filled: boolean
  }]
}

@Component
export default class Rating extends Vue {
  @Prop({ required: true }) stars!: IRating['rating']
}
</script>
