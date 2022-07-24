<template lang="pug">
  header.b-header(
    data-aos-offset="0"
    data-aos="fade"
    data-aos-delay="100"
    data-aos-once="true"
    data-aos-mirror="false"
  )
    transition(
      name="fade-up"
      mode="out-in"
    )
      .__plug(
        v-show="!isShowPlug"
        ref="plug"
      )
    .container.__container
      .__product
        logotype-component.__logotype
        span.__tagline {{tagline}}
      .__navigation
        p.__dropdown Виды алкоголя
        p.__dropdown Информация
        button-component.__button(
          shadow="box"
          view="secondary"
          icon-name="phone"
          aria-label="Позвонить мне"
        ) Позвонить мне
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
import Button from '~/components/ui/button.vue'
@Component({
  components: {
    'button-component': Button,
    'logotype-component': Logotype,
    'menu-component': Menu
  }
})
export default class Header extends Vue {
  tagline = 'Купим дорого \n ваш алкоголь'

  menuActive = false
  isShowPlug = false

  toggleMenu () {
    this.menuActive = !this.menuActive
  }

  setIsShowPlug () {
    if (process.client) {
      const scroll = this.getScroll()

      // @ts-ignore
      this.isShowPlug = scroll > this.$refs.plug?.clientHeight
    }
  }

  addScrollEvent (): void {
    window.addEventListener('scroll', this.onScroll, { passive: true })
  }

  onScroll (): void {
    this.setIsShowPlug()
  }

  getScroll (): number | boolean {
    if (process.client) {
      let y
      const d = document
      const r = d.documentElement
      const b = d.body
      if (typeof window.pageYOffset !== 'undefined') {
        y = window.pageYOffset
      } else {
        y = r.scrollTop || b.scrollTop || 0
      }
      return y
    } else {
      return false
    }
  }

  mounted () {
    this.addScrollEvent()
    this.setIsShowPlug()
  }
}
</script>
