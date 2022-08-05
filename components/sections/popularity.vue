<template lang="pug">
  section.b-popularity
    .container.__container
      h2.__title(
        data-aos="fade-right"
        data-aos-delay="100"
      ) О нас пишут
      .__wrapper
        a.__card(
          v-for="(card, index) in cards"
          :href="card.link"
          :key="card.id"
        )
          nuxt-img(
            :src="card.image"
            :data-aos-delay="150+(index*100)"
            data-aos="fade"
          )
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Popularity extends Vue {
  cards: {
    id: number,
    image: string,
    link: string
  }[] = []

  async fetch (this: Popularity) {
    return await this.$axios.get('/reviews/articles')
      .then((response: {
        data: {
          id: number
          image: string
          link: string
        }[]
      }) => {
        this.cards = response.data.map((card) => {
          console.log(card)
          return {
            id: card.id,
            image: card.image,
            link: card.link
          }
        })
      })
      .catch((error: any) => console.log(error))
  }
}
</script>
