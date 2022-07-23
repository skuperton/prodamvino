<template lang="pug">
  section.b-popularity
    .container.__container
      h2.__title О нас пишут
      .__wrapper
        img.__card(
          v-for="_ in 7"
          src="images/popularity/village.png"
        )
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Popularity extends Vue {

}
</script>
