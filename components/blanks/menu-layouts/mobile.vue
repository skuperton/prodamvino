<template lang="pug">
  .b-mobile-layout
    types-layout-component.__content(
      :products="products"
      title="Виды алкоголя"
    )
    information-layout-component.__content(
      :links="links"
      title="Информация"
    )
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import CardProduct from '~/components/blanks/card-product.vue'
import Link from '~/components/ui/link.vue'
import Types from '~/components/blanks/menu-layouts/types.vue'
import Information from '~/components/blanks/menu-layouts/information.vue'

export interface IMenu {
  currentContent: 'mobile' | 'types' | 'information' | 'contact'
  indent: number
}

@Component({
  components: {
    'information-layout-component': Information,
    'types-layout-component': Types,
    'card-product-component': CardProduct,
    'link-component': Link
  }
})
export default class Mobile extends Vue {
  @Prop({ default: 'mobile' }) readonly currentContent!: IMenu['currentContent']
  @Prop() readonly indent!: IMenu['indent']

  products = [
    {
      id: 1,
      imageName: 'vine',
      name: 'Вино',
      to: '/selling/vino'
    },
    {
      id: 2,
      imageName: 'kon',
      name: 'Коньяк',
      to: '/selling/kon'
    },
    {
      id: 3,
      imageName: 'viski',
      name: 'Виски',
      to: '/selling/viski'
    },
    {
      id: 4,
      imageName: 'vodka',
      name: 'Водка',
      to: '/selling/vodka'
    },
    {
      id: 5,
      imageName: 'shamp',
      name: 'Шампанское',
      to: '/selling/shamp'
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

  get isMobileOrTablet () {
    return this.$device.isMobileOrTablet
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
