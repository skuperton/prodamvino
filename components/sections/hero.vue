<template lang="pug">
  section.b-hero
    .container.__container
      .__content
        h1.__title(
          data-aos="fade-right"
          data-aos-offset="0"
          data-aos-delay="200"
        ) Продайте или поменяйте ваш алкоголь
        span.__slogan(
          data-aos="fade-right"
          data-aos-offset="0"
          data-aos-delay="400"
        ) Выгодно и быстро
        ul.__road(
          data-aos="fade"
          data-aos-offset="0"
          data-aos-delay="450"
        )
          li.__step(
            data-aos="fade-up"
            data-aos-offset="0"
            data-aos-delay="500"
          ) Деньги сразу
          li.__step(
            data-aos="fade-up"
            data-aos-offset="0"
            data-aos-delay="600"
          ) Удобный trade-in
          li.__step(
            data-aos="fade-up"
            data-aos-offset="0"
            data-aos-delay="700"
          ) Онлайн-расчет
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Hero extends Vue {
}
</script>
