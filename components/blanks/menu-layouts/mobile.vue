<template lang="pug">
  .b-mobile-layout
    types-layout-component.__content(
      :products="products"
      title="Виды алкоголя"
      @clicked="$emit('clickedMobile', $event)"
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
import Types, { ITypes } from '~/components/blanks/menu-layouts/types.vue'
import Information, { IInformation } from '~/components/blanks/menu-layouts/information.vue'

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
  @Prop() readonly products!: ITypes['products']
  @Prop() readonly links!: IInformation['links']

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
