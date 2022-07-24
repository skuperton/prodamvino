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
            p Только в июне
          img.__image.--mobile(
            height="200"
            width="200"
            src="images/alcohol/banner.png"
          )
          h3.__title(
            data-aos="fade-right"
            data-aos-delay="200"
          ) Купим ваш Macallan 12 на 20% дороже
          button-component.__button(
            size="l"
            view="secondary"
            aria-label="Рассчитать"
            data-aos="fade"
            data-aos-offset="200"
            data-aos-delay="100"
          ) Рассчитать
        .__right
          img.__image.--desktop(
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
}
</script>
