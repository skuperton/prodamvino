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
            p {{promo.month}}
          .__preview
            nuxt-img.__image.--mobile(
              :src="promo.image || 'images/alcohol/banner.png'"
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
              :href="routeToPromoCategory"
              tag="nuxt-link"
              size="l"
              view="secondary"
              aria-label="Рассчитать"
            ) Рассчитать
        .__preview(
          data-aos="fade-left"
          data-aos-delay="400"
        )
          nuxt-img.__image.--desktop(
            :src="promo.image || 'images/alcohol/banner-desktop.png'"
            height="600"
            width="600"
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
  promo: {
    description?: string
    image?: string
    month?: string
    category?: string
  } = {}

  async fetch (this: Promo) {
    return await this.$axios.get('/alcohol/offer')
      .then((response: {
        data: {
          description: string
          image: string
          month: string
          category: string
        }
      }) => {
        this.promo = {
          description: response.data.description ?? '',
          image: response.data.image ?? '',
          month: response.data.month ?? '',
          category: response.data.category ?? ''
        }
      })
      .catch((error: any) => console.log(error))
  }

  get routeToPromoCategory () {
    return `/selling/${this.promo.category}`
  }
}
</script>
