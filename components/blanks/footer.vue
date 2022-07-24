<template lang="pug">
  footer.b-footer(
    data-aos="fade"
    data-aos-delay="100"
    data-aos-once="true"
    data-aos-mirror="false"
    data-aos-offset="0"
  )
    .container.__container
      .__left
        .__copyright © ProdamVino, 2022
        .__information
          link-component.__link.--info(
            view="secondary"
            href="#"
          ) Оферта
          link-component.__link.--info(
            view="secondary"
            href="#"
          ) Политика обработки данных
          link-component.__link.--info(
            view="secondary"
            href="#"
          ) Соглашение о конфиденциальности
      .__right
        link-component.__number(
          view="secondary"
          underline
          href="tel:+74993488478"
        ) +7 499 348-84-78
        link-component.__email(
          view="secondary"
          underline
          href="mailto:order@prodamvino.ru"
        ) order@prodamvino.ru
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Link from '~/components/ui/link.vue'

@Component({
  components: {
    'link-component': Link
  }
})
export default class Footer extends Vue {
}
</script>
