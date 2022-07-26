<template lang="pug">
  .b-menu(
    :style="{'top': `${indent}px`}"
    data-scroll-lock-scrollable
  )
    .container.__container
      template(
        v-if="isMobile"
      )
        template(
          v-if="currentContent === 'contact'"
        )
          p contact
        template(
          v-if="currentContent === 'mobile'"
        )
          .__wrapper
            h2.__title Виды алкоголя
            .__content.--alco
              card-product-component(
                v-for="product in products"
                :key="product.id"
                :img-name="product.imageName"
                :name="product.name"
                :shadow="false"
                size="s"
              )
          .__wrapper
            h2.__title Информация
            .__content.--info
              link-component.__link(
                v-for="link in links"
                :key="link.id"
                :href="link.href"
                view="secondary"
              ) {{link.name}}
      template(
        v-else
      )
        template(
          v-if="currentContent === 'types'"
        )
          p types
        template(
          v-if="currentContent === 'information'"
        )
          p info
        template(
          v-if="currentContent === 'contact'"
        )
          p contact
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import CardProduct from '~/components/blanks/card-product.vue'
import Link from '~/components/ui/link.vue'

export interface IMenu {
  currentContent: 'mobile' | 'types' | 'information' | 'contact'
  indent: number
}

@Component({
  components: {
    'card-product-component': CardProduct,
    'link-component': Link
  }
})
export default class Menu extends Vue {
  @Prop({ default: 'mobile' }) readonly currentContent!: IMenu['currentContent']
  @Prop() readonly indent!: IMenu['indent']

  products = [
    {
      id: 1,
      imageName: 'vine',
      name: 'Вино'
    },
    {
      id: 2,
      imageName: 'kon',
      name: 'Коньяк'
    },
    {
      id: 3,
      imageName: 'viski',
      name: 'Виски'
    },
    {
      id: 4,
      imageName: 'vodka',
      name: 'Водка'
    },
    {
      id: 5,
      imageName: 'shamp',
      name: 'Шампанское'
    }
  ]

  links = [
    {
      id: 1,
      name: 'Алкоголь оптом',
      href: '#'
    },
    {
      id: 2,
      name: 'Алкоголь оптом и в розницу',
      href: '#'
    },
    {
      id: 3,
      name: 'Алкоголь оптом',
      href: '#'
    },
    {
      id: 4,
      name: 'Алкоголь оптом и в розницу',
      href: '#'
    },
    {
      id: 5,
      name: 'Алкоголь оптом',
      href: '#'
    }
  ]

  get isMobile () {
    return this.$device.isMobile
  }

  mounted () {
    if (this.isMobile) {
      // @ts-ignore
      this.$scrollLock.disablePageScroll()
    }
  }

  beforeDestroy (): void {
    // @ts-ignore
    this.$scrollLock.enablePageScroll()
  }
}
</script>
