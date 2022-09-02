<template lang="pug">
  section.b-information
    .container.__container
      div(
        v-html="content"
        data-aos="fade"
        data-aos-delay="100"
      )
</template>

<script lang="ts">
import { Component, mixins } from 'nuxt-property-decorator'
import AosMixin from '~/mixins/aos'

@Component({
  layout: 'information'
})
export default class InformationTitle extends mixins(AosMixin) {
  content = ''

  async fetch (this: InformationTitle) {
    await this.$axios.post('/reviews/info/content',
      {
        title: this.$route.params.title
      })
      .then((response: {
        data: {
          content: string
        }
      }) => {
        this.content = response.data.content
      })
      .catch((error: any) => {
        this.content = '<p style="text-align: center; font-size: 18px"> Ничего не найдено </p>'
        console.log(error)
      })
  }
}
</script>
