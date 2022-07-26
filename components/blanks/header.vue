<template lang="pug">
  header.b-header(
    :class="classes"
    ref="header"
    v-on-clickaway="hideMenu"
    v-on:keyup.esc="hideMenu"
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
        link-component.__dropdown(
          tag="button"
          view="secondary"
          iconName="angle-down"
          @click="toggleMenuContent('types')"
        ) Виды алкоголя
        link-component.__dropdown(
          tag="button"
          view="secondary"
          iconName="angle-down"
          @click="toggleMenuContent('information')"
        ) Информация
        button-component.__button(
          shadow="box"
          view="secondary"
          icon-name="phone"
          aria-label="Позвонить мне"
          @click="toggleMenuContent('contact')"
        ) Позвонить мне
        .__burger(
          :class="burgerMenuActive ? 'active' : ''"
          @click="toggleMenuContent('mobile')"
        )
          span
          span
          span
    transition(
      name="fade"
      mode="out-in"
    )
      menu-component.__menu(
        v-if="menuActive"
        :current-content="menuContent"
        :indent="$refs.header.clientHeight"
      )
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Logotype from '~/components/ui/logotype.vue'
import Menu, { IMenu } from '~/components/blanks/menu.vue'
import Button from '~/components/ui/button.vue'
import Link from '~/components/ui/link.vue'

@Component({
  components: {
    'link-component': Link,
    'button-component': Button,
    'logotype-component': Logotype,
    'menu-component': Menu
  }
})
export default class Header extends Vue {
  tagline = 'Купим дорого \n ваш алкоголь'

  menuActive = false
  menuContent: IMenu['currentContent'] | string = ''
  burgerMenuActive = false

  isShowPlug = false

  toggleMenuContent (content: IMenu['currentContent']) {
    if (this.menuContent === content) {
      this.menuActive = !this.menuActive
    } else {
      this.menuActive = true
    }

    if (content === 'mobile') {
      this.burgerMenuActive = !this.burgerMenuActive
    } else {
      this.burgerMenuActive = false
    }

    this.menuContent = content
  }

  onResize () {
    this.menuActive = false
  }

  toggleMenu () {
    this.menuActive = !this.menuActive
  }

  hideMenu () {
    this.menuActive = false
  }

  setIsShowPlug () {
    if (process.client) {
      const scroll = this.getScroll()

      // @ts-ignore
      this.isShowPlug = scroll > this.$refs.plug?.clientHeight
    }
  }

  addEvents (): void {
    window.addEventListener('scroll', this.onScroll, { passive: true })
    window.addEventListener('resize', this.onResize, { passive: true })
  }

  removeEvents (): void {
    window.removeEventListener('scroll', this.onScroll)
    window.removeEventListener('resize', this.onResize)
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

  get classes () {
    return this.menuActive ? ['active'] : ''
  }

  mounted () {
    this.addEvents()
    this.setIsShowPlug()
  }

  beforeDestroy (): void {
    this.removeEvents()
  }
}
</script>
