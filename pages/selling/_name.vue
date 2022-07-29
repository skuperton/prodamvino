<template lang="pug">
  section.b-selling
    .container.__container
      h2.__title(
        data-aos="fade-right"
        data-aos-delay="100"
      ) Продать {{titleName}}
      trade-component.__trade(
        :image-name="imageName"
        data-aos="fade"
        data-aos-delay="200"
      )
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { NuxtOptions } from '@nuxt/types'
import AOS from 'aos'
import Trade from '~/components/blanks/trade.vue'

const productNames = {
  vino: {
    title: 'вино',
    imgName: 'vine'
  },
  kon: {
    title: 'коньяк',
    imgName: 'kon'
  },
  viski: {
    title: 'виски',
    imgName: 'viski'
  },
  vodka: {
    title: 'водка',
    imgName: 'vodka'
  },
  shamp: {
    title: 'шампанское',
    imgName: 'shamp'
  }
}

@Component({
  components: {
    'trade-component': Trade
  },
  layout: 'selling'
})
export default class SellingName extends Vue {
  validate ({ params }: NuxtOptions) {
    if (params) {
      return Object.entries(productNames).some(item => item.includes(params.name))
    }
  }

  get currentProduct () {
    const current = Object.entries(productNames).find(([key]) => key === this.$route.params.name)
    return current ? current[1] : ''
  }

  get titleName () {
    const candidate = this.currentProduct
    return candidate ? candidate.title : ''
  }

  get imageName () {
    const name = this.currentProduct
    return name ? name.imgName : ''
  }

  mounted () {
    AOS.init()
  }

  beforeDestroy () {
    AOS.refreshHard()
  }
}
</script>
