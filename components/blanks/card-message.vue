<template lang="pug">
  .b-card-message
    .__header
      .__information
        img.__avatar(
          v-if="avatar"
          :src="avatar"
          height="40"
          width="40"
        )
        .__persone
          p.__name {{author}}
          span.__date {{date}}
      .__rating
        rating-component.__stars(
          :stars="currentStars"
        )
    p.__content {{text}}
    a.__link(
      href="#"
    ) Далее...
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import AOS from 'aos'
import Rating from '~/components/ui/rating.vue'

export interface ICardMessage {
  id: number
  author: string
  date: string
  text: string
  avatar: string
  stars: number
}

@Component({
  components: {
    'rating-component': Rating
  }
})
export default class CardMessage extends Vue {
  @Prop() author!: ICardMessage['author']
  @Prop() date!: ICardMessage['date']
  @Prop() text!: ICardMessage['text']
  @Prop() avatar!: ICardMessage['avatar']
  @Prop() stars!: ICardMessage['stars']

  get currentStars () {
    const array = []
    if (this.stars) {
      for (let i = 1; i <= 5; i++) {
        array.push({
          id: i,
          filled: this.stars >= i
        })
      }
      return array
    }
  }

  mounted () {
    AOS.init({
      // Global settings
      startEvent: 'DOMContentLoaded',
      disable: window.innerWidth < 1200,

      // Settings that can be overridden
      offset: 150,
      duration: 600,
      easing: 'ease',
      mirror: false,
      once: true
    })
  }
}
</script>
