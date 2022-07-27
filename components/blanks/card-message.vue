<template lang="pug">
  .b-card-message
    .__header
      .__information
        nuxt-img.__avatar(
          height="40"
          width="40"
          src="images/users/avatar.png"
        )
        .__persone
          p.__name Роман П.
          span.__date 18 апреля
      .__rating
        rating-component.__stars(
          :stars="stars"
        )
    p.__content {{contentText}}
    a.__link(
      href="#"
    ) Далее...
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Rating from '~/components/ui/rating.vue'

@Component({
  components: {
    'rating-component': Rating
  }
})
export default class CardMessage extends Vue {
  stars = [
    {
      id: 1,
      filled: true
    },
    {
      id: 1,
      filled: true
    },
    {
      id: 1,
      filled: true
    },
    {
      id: 1,
      filled: true
    },
    {
      id: 1,
      filled: true
    }
  ]

  contentText = 'Выражаю огромную благодарность сервису ДамПродам за высокое качество и профессионализм в работе! Мне понравилось всё, начиная от общения с оператором по телефону и заканчивая продажей устройств. Особо хочу отметить вежливое, спокойное и уважительное отношение и к работе, и к клиен. Выражаю огромную благодарность сервису ДамПродам за высокое качество и профессионализм в работе! Мне понравилось всё, начиная от общения с оператором по телефону и заканчивая продажей устройств. Особо хочу отметить вежливое, спокойное и уважительное отношение и к работе, и к клиен'
}
</script>
