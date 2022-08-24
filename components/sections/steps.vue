<template lang="pug">
  section.b-steps
    .container.__container
      h2.__title(
        data-aos="fade-right"
        data-aos-delay="100"
      ) Как мы работаем
      .__wrapper
        card-step-component.__card(
          v-for="(card, index) in cards"
          :data-aos-delay="150+(index*100)"
          :key="index"
          :number="card.number"
          :title="card.title"
          :text="card.text"
          :img-name="card.urlName"
          data-aos="fade"
        )
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import CardStep from '~/components/blanks/card-step-component.vue'

@Component({
  components: {
    'card-step-component': CardStep
  }
})
export default class Steps extends Vue {
  cards = [
    {
      id: 1,
      number: '#01',
      title: 'Рассчитайте стоимость онлайн',
      text: 'Укажите данные о своём алкоголе, и мы его точно оценим',
      urlName: 'first'
    },
    {
      id: 2,
      number: '#02',
      title: 'Выберите время и место',
      text: 'Если цена вас устраивает — наш курьер в 90 минут приедет к вам в любое удобное место. Это бесплатно',
      urlName: 'second'
    },
    {
      id: 3,
      number: '#03',
      title: 'Получите деньги',
      text: 'Курьер проверит состояние и подлинность вашего напитка. Оплатит наличными или переводом на карту',
      urlName: 'third'
    }
  ]
}
</script>
