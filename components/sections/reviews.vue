<template lang="pug">
  section.b-reviews
    .container.__container
      h2.__title(
        data-aos="fade-right"
        data-aos-delay="100"
      ) Отзывы
      .__about
        p.__subtitle(
          data-aos="fade-right"
          data-aos-delay="200"
        ) Все отзывы настоящие, написаны нашими клиентами
        .__resources(
          data-aos="fade-left"
          data-aos-delay="300"
        )
          appraiser-component.__appraiser(
            name="yandex"
            rate="5,0"
          )
          appraiser-component.__appraiser(
            name="google"
            rate="4,7"
          )
      card-reviews-component.__card(
        data-aos="fade-up"
        data-aos-delay="400"
      )
      .__wrapper
        card-message-component.__message(
          v-for="(_,index) in 4"
          :key="index"
          :data-aos-delay="400 + (index * 50)"
          data-aos-offset="100"
          data-aos="fade-up"
        )
      div(
        data-aos="fade-up"
        data-aos-delay="100"
      )
        button-component.__button(
          icon-name="location-dot"
          view="secondary"
          shadow="box"
          aria-label="Больше отзывов на Яндекс Картах"
        ) Больше отзывов на Яндекс Картах
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Appraiser from '~/components/blanks/appraiser.vue'
import CardReviews from '~/components/blanks/card-reviews.vue'
import Button from '~/components/ui/button.vue'
import CardMessage from '~/components/blanks/card-message.vue'
@Component({
  components: {
    'card-message-component': CardMessage,
    'button-component': Button,
    'card-reviews-component': CardReviews,
    'appraiser-component': Appraiser
  }
})
export default class Reviews extends Vue {
}
</script>
