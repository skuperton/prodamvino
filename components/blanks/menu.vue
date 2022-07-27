<template lang="pug">
  .b-menu(
    :style="{'top': `${indent}px`, 'bottom': isMobile && currentContent === 'mobile' ? 0 : 'auto'}"
    data-scroll-lock-scrollable
  )
    .container.__container
      transition(
        name="fade-fast"
        mode="out-in"
      )
        mobile-layout-component(
          v-if="currentContent === 'mobile'"
          key="mobile"
        )
        types-layout-component.__content(
          v-if="currentContent === 'types'"
          :products="products"
          title="Виды алкоголя"
          key="types"
        )
        information-layout-component.__content(
          v-if="currentContent === 'information'"
          :links="links"
          title="Информация"
          key="Информация"
        )
        contact-layout-component(
          v-if="currentContent === 'contact'"
          key="contact"
        )
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import CardProduct from '~/components/blanks/card-product.vue'
import Link from '~/components/ui/link.vue'
import Mobile from '~/components/blanks/menu-layouts/mobile.vue'
import Types from '~/components/blanks/menu-layouts/types.vue'
import Information from '~/components/blanks/menu-layouts/information.vue'
import Contact from '~/components/blanks/menu-layouts/contact.vue'

export interface IMenu {
  currentContent: 'mobile' | 'types' | 'information' | 'contact'
  indent: number
}

@Component({
  components: {
    'contact-layout-component': Contact,
    'types-layout-component': Types,
    'information-layout-component': Information,
    'mobile-layout-component': Mobile,
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
    },
    {
      id: 6,
      name: 'Алкоголь оптом',
      href: '#'
    },
    {
      id: 7,
      name: 'Алкоголь оптом и в розницу',
      href: '#'
    },
    {
      id: 8,
      name: 'Алкоголь оптом',
      href: '#'
    },
    {
      id: 9,
      name: 'Алкоголь оптом и в розницу',
      href: '#'
    },
    {
      id: 10,
      name: 'Алкоголь оптом',
      href: '#'
    },
    {
      id: 11,
      name: 'Алкоголь оптом',
      href: '#'
    },
    {
      id: 12,
      name: 'Алкоголь оптом и в розницу',
      href: '#'
    },
    {
      id: 13,
      name: 'Алкоголь оптом',
      href: '#'
    },
    {
      id: 14,
      name: 'Алкоголь оптом и в розницу',
      href: '#'
    },
    {
      id: 15,
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
