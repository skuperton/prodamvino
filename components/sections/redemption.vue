<template lang="pug">
  section.b-redemption
    .container.__container
      h2.__title(
        data-aos="fade-right"
        data-aos-delay="100"
      ) Какой алкоголь мы выкупаем
      .__content(
        data-aos="fade-left"
        data-aos-delay="200"
      )
        .__head
          NuxtLink.__card(
            v-for="(tag, index) in tags"
            :key="tag.id"
            :to="tag.to"
            v-on:click.native="goToTop"
          )
            tag-component(
              :img-name="tag.image"
              :name="tag.name"
              :data-aos-delay="300 + (index * 100)"
              data-aos="fade-down"
            )
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Tag from '~/components/ui/tag.vue'

@Component({
  components: {
    'tag-component': Tag
  }
})
export default class Redemption extends Vue {
  tags: {
    id: number,
    name: string,
    image: string,
    to: string
  }[] = []
  // tags = [
  //   {
  //     id: 1,
  //     name: 'Вино',
  //     image: 'vine'
  //   },
  //   {
  //     id: 2,
  //     name: 'Коньяк',
  //     image: 'kon'
  //   },
  //   {
  //     id: 3,
  //     name: 'Виски',
  //     image: 'viski'
  //   },
  //   {
  //     id: 4,
  //     name: 'Водка',
  //     image: 'vodka'
  //   },
  //   {
  //     id: 5,
  //     name: 'Шампанское',
  //     image: 'shamp'
  //   }
  // ]

  async fetch (this: Redemption) {
    return await this.$axios.get('/alcohol/categories')
      .then((response: {
        data: {
          id: number
          author: string
          image: string
          name: string
        }[]
      }) => {
        this.tags = response.data.map((product) => {
          return {
            id: product.id,
            name: product.name,
            image: product.image,
            to: `/selling/${product.name}`
          }
        })
      })
      .catch((error: any) => console.log(error))
  }

  goToTop () {
    // @ts-ignore
    this.$scrollTo('body')
  }
}
</script>
