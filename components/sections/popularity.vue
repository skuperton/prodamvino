<template lang="pug">
  section.b-popularity
    .container.__container
      h2.__title(
        data-aos="fade-right"
        data-aos-delay="100"
      ) О нас пишут
      .__wrapper
        img.__card(
          v-for="(card, index) in cards"
          :src="`images/popularity/${card.imgName}.png`"
          :data-aos-delay="150+(index*100)"
          data-aos="fade"
        )
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Popularity extends Vue {
  cards = [
    {
      id: 1,
      imgName: 'village'
    },
    {
      id: 2,
      imgName: 'secret'
    },
    {
      id: 3,
      imgName: 'vedomosti'
    },
    {
      id: 4,
      imgName: 'xbet'
    }
  ]
}
</script>
