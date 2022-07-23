<template lang="pug">
  section.b-hero
    .container.__container
      .__content
        h1.__title Продайте или поменяйте ваш алкоголь
        span.__slogan Выгодно и быстро
        ul.__road
          li.__step Деньги сразу
          li.__step Удобный trade-in
          li.__step Онлайн-расчет
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Hero extends Vue {
}
</script>
