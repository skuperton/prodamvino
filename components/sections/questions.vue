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
      content: 'Москва, Санкт Петербург, Нижний Новгород, Казань, Самара, Воронеж.',
      value: true
    },
    {
      id: 2,
      title: 'Какую максимальную сумму могу получить наличными?',
      content: 'Мы предлагаем до 1 миллиона рублей  в день обращения.',
      value: false
    },
    {
      id: 3,
      title: 'Можно ли продать открытую или поврежденную бутылку?',
      content: 'Мы покупаем только не распечатанный алкоголь, сохранность капсулы тщательно проверяется курьером в момент сделки.',
      value: false
    },
    {
      id: 4,
      title: 'Мне надо куда-то приехать или вы сами ко мне?',
      content: 'Оставьте свой телефон в форме обратной связи и мы обязательно  с вами свяжемся.',
      value: false
    },
    {
      id: 5,
      title: 'Как быстро я могу продать алкоголь?',
      content: 'Курьер будет у вас в течении 90 минут',
      value: false
    },
    {
      id: 6,
      title: 'Законно ли это?',
      content: 'Все сделки по скупке абсолютно безопасны в правовом поле. Все бутылки покупаются для личного хранения.',
      value: false
    },
    {
      id: 7,
      title: 'Не нашёл своей бутылки  у вас в базе?',
      content: 'Отправьте фотографии алкоголя нам в любой мессенджер, мы проведем оценку в индивидуальном порядке.',
      value: false
    },
  ]
}
</script>
