<template lang="pug">
  .b-information-layout
    h2.__title(
      v-if="title && isMobile"
    ) {{title}}
    .__content
      link-component.__link(
        v-for="(link, index) in links"
        :key="link.id + index"
        :href="link.href"
        tag="nuxt-link"
        view="secondary"
      ) {{link.name}}
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import Link from '~/components/ui/link.vue'

export interface IInformation {
  title: string
  links: {
    id: number
    name: string
    href: string
  }[]
}

@Component({
  components: {
    'link-component': Link
  }
})
export default class Information extends Vue {
  @Prop() readonly title!: IInformation['title']
  @Prop() readonly links!: IInformation['links']

  get isMobile () {
    return window.innerWidth < 650
  }
}
</script>
