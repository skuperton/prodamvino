<template lang="pug">
  section.b-hero
    .container.__container
      .__content
        h1.__title(
          :data-aos-disable="this.$route.path === '/'"
          data-aos="fade-right"
          data-aos-offset="0"
          data-aos-delay="300"
        ) Продайте ваш алкоголь
        span.__slogan(
          data-aos="fade-right"
          data-aos-offset="0"
          data-aos-delay="500"
        ) Выгодно и быстро
        ul.__road(
          data-aos="fade"
          data-aos-offset="0"
          data-aos-delay="550"
        )
          li.__step(
            data-aos="fade-up"
            data-aos-offset="0"
            data-aos-delay="600"
          ) Деньги сразу
          li.__step(
            data-aos="fade-up"
            data-aos-offset="0"
            data-aos-delay="700"
          ) Работаем 24/7
          li.__step(
            data-aos="fade-up"
            data-aos-offset="0"
            data-aos-delay="800"
          ) Онлайн-расчет
      nuxt-img.__image(
        data-aos="zoom-in"
        data-aos-offset="0"
        data-aos-delay="900"
        src="images/promo.png"
      )
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Hero extends Vue {

}
</script>
