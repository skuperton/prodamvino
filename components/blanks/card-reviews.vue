<template lang="pug">
  .b-card-reviews
    .__content
      logotype-component.__logotype
      .__rating
        span 5,0
        rating-component.__stars(
          :stars="stars"
        )
        p.__information {{reviews}} отзывов  /  {{rating}} оценки
    .__feedback
      link-component.__link(
        view="secondary"
        underline
        href="#"
      ) Поставьте нам оценку
      button-component(
        size="m"
        aria-label="Оставить отзыв"
      ) Оставить отзыв
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import Logotype from '~/components/ui/logotype.vue'
import Button from '~/components/ui/button.vue'
import Rating from '~/components/ui/rating.vue'
import Link from '~/components/ui/link.vue'

@Component({
  components: {
    'link-component': Link,
    'rating-component': Rating,
    'button-component': Button,
    'logotype-component': Logotype
  }
})
export default class CardReviews extends Vue {
  @Prop({ default: '740' }) reviews?: string | number
  @Prop({ default: '872' }) rating?: string | number

  stars = [
    {
      id: 1,
      filled: true
    },
    {
      id: 1,
      filled: true
    },
    {
      id: 1,
      filled: true
    },
    {
      id: 1,
      filled: true
    },
    {
      id: 1,
      filled: true
    }
  ]
}
</script>
