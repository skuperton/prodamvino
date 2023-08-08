<template lang="pug">
  section.b-selling
    .container.__container
      h2.__title(
        data-aos="fade-right"
        data-aos-delay="100"
      ) Продать {{titleName}}
      trade-component.__trade(
        :image-name="imageName"
        :current-category="titleName"
      )
</template>

<script lang="ts">
import { Component, mixins } from 'nuxt-property-decorator'
import { NuxtOptions } from '@nuxt/types'
import Trade from '~/components/blanks/trade.vue'
import AosMixin from '~/mixins/aos'

const productNames = {
  vino: {
    title: 'вино',
    imgName: 'vine',
    head: {
      title: 'Продать вино. Он-лайн калькулятор скупки алкоголя',
      meta: [
        {
          name: 'description',
          content: 'Продать элитное или коллекционное вино с выгодной оценкой. Наши курьеры в Москве проведут сделку быстро ,на лучших условиях'
        }
      ]
    }
  },
  kon: {
    title: 'коньяк',
    imgName: 'kon',
    head: {
      title: 'Продать коньяк. Он-лайн калькулятор выкупа алкоголя',
      meta: [
        {
          name: 'description',
          content: 'Продать элитный или коллекционный коньяк с выгодной оценкой. Наши курьеры в Москве проведут сделку быстро ,на лучших условиях'
        }
      ]
    }
  },
  viski: {
    title: 'виски',
    imgName: 'viski',
    head: {
      title: 'Продать виски. Он-лайн калькулятор выкупа алкоголя',
      meta: [
        {
          name: 'description',
          content: 'Продать элитное или коллекционное виски с выгодной оценкой. Наши курьеры в Москве проведут сделку быстро ,на лучших условиях'
        }
      ]
    }
  },
  vodka: {
    title: 'водка',
    imgName: 'vodka',
    head: {
      title: 'Продать водку. Он-лайн калькулятор выкупа алкоголя',
      meta: [
        {
          name: 'description',
          content: 'Продать элитную или коллекционную водку с выгодной оценкой. Наши курьеры в Москве проведут сделку быстро ,на лучших условиях'
        }
      ]
    }
  },
  shamp: {
    title: 'шампанское',
    imgName: 'shamp',
    head: {
      title: 'Продать шампанское. Он-лайн калькулятор выкупа алкоголя',
      meta: [
        {
          name: 'description',
          content: 'Продать элитное или коллекционное шампанское с выгодной оценкой. Наши курьеры в Москве проведут сделку быстро ,на лучших условиях'
        }
      ]
    }
  },
  pivo: {
    title: 'пиво',
    imgName: 'pivo',
    head: {
      title: 'Продать пиво. Он-лайн калькулятор выкупа алкоголя',
      meta: [
        {
          name: 'description',
          content: 'Продать элитное или коллекционное пиво с выгодной оценкой. Наши курьеры в Москве проведут сделку быстро ,на лучших условиях'
        }
      ]
    }
  }
}

@Component({
  components: {
    'trade-component': Trade
  },
  layout: 'selling',
  head () {
    const current = Object.values(productNames).find(product => product.title === this.$route.params.name)
    const head = current?.head || {}

    return head
  }
})
export default class SellingName extends mixins(AosMixin) {
  validate ({ params }: NuxtOptions) {
    if (params) {
      return Object.entries(productNames).some((item) => {
        return item[1].title === (params.name)
      })
    }
  }

  get currentProduct () {
    const current = Object.entries(productNames).find(product => product[1].title === this.$route.params.name)
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
}
</script>
