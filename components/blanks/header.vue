<template lang="pug">
  header.b-header(
    data-aos="fade"
    data-aos-delay="100"
    data-aos-offset="0"
    data-aos-once="true"
    data-aos-mirror="false"
    ref="header"
    v-on-clickaway="hideMenu"
    v-on:keyup.esc="hideMenu"
    v-bind="classes"
  )
    .__plug(
      v-show="!isShowPlug"
      ref="plug"
    )
    .container.__container
      .__product
        nuxt-link(
          to="/"
        )
          logotype-component.__logotype
        span.__tagline {{tagline}}
      .__navigation
        link-component.__dropdown(
          :active="isDisableTypes"
          tag="button"
          view="secondary"
          iconName="angle-down"
          @click="toggleMenuContent('types')"
        ) Виды алкоголя
        link-component.__dropdown(
          :active="isDisableInfo"
          tag="button"
          view="secondary"
          iconName="angle-down"
          @click="toggleMenuContent('information')"
        ) Информация
        button-component.__button(
          :disabled="isActiveButton"
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
      name="fade-up"
      mode="out-in"
    )
      menu-component.__menu(
        v-if="menuActive"
        :current-content="menuContent"
        :indent="headerHeight"
        key="menu"
        @clickedMobile="productTypeSelected"
        @clicked="productTypeSelected"
      )
    overlay-component(
      v-if="menuActive"
      :indent="headerHeight"
      key="overlay"
    )
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Logotype from '~/components/ui/logotype.vue'
import Menu, { IMenu } from '~/components/blanks/menu.vue'
import Button from '~/components/ui/button.vue'
import Link from '~/components/ui/link.vue'
import { Maybe } from '~/ts/other'
import Overlay from '~/components/blanks/overlay.vue'

@Component({
  components: {
    'overlay-component': Overlay,
    'link-component': Link,
    'button-component': Button,
    'logotype-component': Logotype,
    'menu-component': Menu
  }
})
export default class Header extends Vue {
  tagline = 'Купим дорого \n ваш алкоголь'

  headerHeight: Maybe<number> = null

  menuActive = false
  menuContent: Maybe<IMenu['currentContent']> = null
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
    this.onChangeHeaderHeight()
    this.menuActive = false
    this.burgerMenuActive = false
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
    window.addEventListener('scroll', this.onChangeHeaderHeight, { passive: true })
    window.addEventListener('resize', this.onResize, { passive: true })
  }

  removeEvents (): void {
    window.removeEventListener('scroll', this.onScroll)
    window.removeEventListener('scroll', this.onChangeHeaderHeight)
    window.removeEventListener('resize', this.onResize)
  }

  onScroll (): void {
    this.setIsShowPlug()
  }

  onChangeHeaderHeight () {
    requestAnimationFrame(() => {
      // @ts-ignore
      this.headerHeight = this.$refs.header?.clientHeight
    })
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

  productTypeSelected () {
    this.burgerMenuActive = false
    this.menuActive = false

    // @ts-ignore
    this.$scrollTo('body')
  }

  get classes () {
    return { 'data-active': this.menuActive }
  }

  get isActiveButton () {
    return this.menuActive && this.menuContent === 'contact'
  }

  get isDisableTypes () {
    return this.menuActive && this.menuContent === 'types'
  }

  get isDisableInfo () {
    return this.menuActive && this.menuContent === 'information'
  }

  mounted () {
    this.onChangeHeaderHeight()
    this.addEvents()
    this.setIsShowPlug()
  }

  beforeDestroy (): void {
    this.removeEvents()
  }
}
</script>
