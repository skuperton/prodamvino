<template lang="pug">
  .b-social
    a.__link(
      v-for="social in socials"
      :key="social.id"
      :href="social.url"
      :style="{'background-color': social.color}"
    )
      font-awesome-icon.__icon(
        :icon="[social.prefix, social.iconName]"
      )
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Link from '~/components/ui/link.vue'

@Component({
  components: {
    'link-component': Link
  }
})
export default class Social extends Vue {
  socials = [
    {
      id: 1,
      prefix: 'fab',
      iconName: 'telegram',
      url: '#',
      color: '#0088CC'
    },
    {
      id: 2,
      prefix: 'fab',
      iconName: 'whatsapp',
      url: '#',
      color: '#25D366'
    },
    {
      id: 3,
      prefix: 'fab',
      iconName: 'viber',
      url: '#',
      color: '#7F40BD'
    },
    {
      id: 4,
      prefix: 'fab',
      iconName: 'vk',
      url: '#',
      color: '#0077FF'
    },
    {
      id: 5,
      prefix: 'far',
      iconName: 'envelope',
      url: '#',
      color: '#00B4D8'
    }
  ]
}
</script>
