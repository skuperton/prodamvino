<template lang="pug">
  section.b-popularity
    .container.__container
      h2.__title(
        data-aos="fade-right"
        data-aos-delay="100"
      ) О нас пишут
      .__wrapper
        img.__card(
          v-for="(_, index) in 7"
          data-aos="fade"
          :data-aos-delay="150+(index*100)"
          src="images/popularity/village.png"
        )
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Popularity extends Vue {

}
</script>
