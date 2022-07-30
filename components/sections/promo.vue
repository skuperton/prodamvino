<template lang="pug">
  aside.b-promo
    .container.__container
      .__content
        .__left
          span.__date(
            data-aos="fade-right"
            data-aos-delay="100"
          )
            font-awesome-icon.__calendar(
              :icon="['fas', 'calendar-days']"
            )
            p '{{promo.month}}'
          nuxt-img.__image.--mobile(
            src="images/alcohol/banner.png"
            height="200"
            width="200"
          )
          h3.__title(
            data-aos="fade-right"
            data-aos-delay="200"
          ) {{promo.description}}
          div(
            data-aos="fade"
            data-aos-offset="200"
            data-aos-delay="100"
          )
            button-component.__button(
              size="l"
              view="secondary"
              aria-label="Рассчитать"
            ) Рассчитать
        .__right
          nuxt-img.__image.--desktop(
            height="600"
            width="600"
            data-aos="fade-left"
            data-aos-delay="400"
            src="images/alcohol/banner-desktop.png"
          )
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Button from '~/components/ui/button.vue'

@Component({
  components: {
    'button-component': Button
  }
})
export default class Promo extends Vue {
  promo = {}

  async fetch (this: Promo) {
    return await this.$axios.get('/alcohol/offer')
      .then((response: {
        data: {
          description: string
          image: string
          month: string
        }
      }) => {
        this.promo = {
          description: response.data.description ?? '',
          image: response.data.image ?? '',
          month: response.data.month ?? ''
        }
      })
      .catch((error: any) => console.log(error))
  }
}
</script>
