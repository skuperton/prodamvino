<template lang="pug">
  header.b-header
    .container.__container
      .__product
        logotype-component.__logotype
        span.__tagline {{tagline}}
      .__navigation
        p.__dropdown Виды алкоголя
        p.__dropdown Информация
        button
          img(
            height="12"
            width="12"
            src="images/icons/tel.svg"
          )
          p Позвонить мне
        .__burger(
          :class="menuActive ? 'active' : ''"
          @click="toggleMenu"
        )
          span
          span
          span
    menu-component.__menu(
      v-if="menuActive"
    )
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Logotype from '~/components/ui/logotype.vue'
import Menu from '~/components/blanks/menu.vue'
@Component({
  components: {
    'logotype-component': Logotype,
    'menu-component': Menu
  }
})
export default class Header extends Vue {
  tagline = 'Купим дорого \n ваш алкоголь'

  menuActive = false

  toggleMenu() {
    this.menuActive = !this.menuActive
  }
}
</script>
