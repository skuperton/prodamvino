<template lang="pug">
  section.b-questions
    .container.__container
      h2.__title(
        :data-aos-delay="100"
        data-aos="fade"
      ) Вопросы и ответы
      .__wrapper
        collapse-component.__collapse(
          v-for="(question, index) in questions"
          v-model="question.value"
          :key="question.id"
          :title="question.title"
          :data-aos-delay="300 + (index * 50)"
          data-aos="fade-up"
        ) {{question.content}}
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Collapse from '~/components/ui/collapse.vue'

@Component({
  components: {
    'collapse-component': Collapse
  }
})
export default class Questions extends Vue {
  questions = [
    {
      id: 1,
      title: 'В каких городах вы работаете?',
      content: 'Москва, Санкт-Петербург',
      value: true
    },
    {
      id: 2,
      title: 'Куда вы деваете купленную технику?',
      content: 'Оставляем себе',
      value: false
    },
    {
      id: 3,
      title: 'Техника, которую вы меняете по программе trade-in, новая? Сертифицированная?',
      content: 'Да!',
      value: false
    },
    {
      id: 4,
      title: 'Мне надо куда-то приехать или вы сами ко мне?',
      content: 'Пришлем по почте',
      value: false
    },
    {
      id: 5,
      title: 'Как быстро я могу продать устройство?',
      content: 'Моментально в нашем сервисе',
      value: false
    },
    {
      id: 6,
      title: 'Куда вы деваете купленную технику?',
      content: 'Оставляем себе',
      value: false
    },
    {
      id: 7,
      title: 'Техника, которую вы меняете по программе trade-in, новая? Сертифицированная?',
      content: 'Да!',
      value: false
    },
    {
      id: 8,
      title: 'В каких городах вы работаете?',
      content: 'Москва, Санкт-Петербург',
      value: false
    }
  ]
}
</script>
