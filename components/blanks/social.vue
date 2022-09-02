<template lang="pug">
  .b-social
    a.__link(
      v-for="social in socials"
      :key="social.id"
      :href="social.url"
      :style="{'background-color': social.color}"
      target="_blank"
      rel="noopener noreferrer",
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
      url: 'https://t.me/+79362734449',
      color: '#0088CC'
    },
    {
      id: 2,
      prefix: 'fab',
      iconName: 'whatsapp',
      url: 'https://wa.me/79362734449',
      color: '#25D366'
    },
    {
      id: 3,
      prefix: 'fab',
      iconName: 'viber',
      url: 'https://skobelkin.ru/viber/79362734449',
      color: '#7F40BD'
    },
    {
      id: 4,
      prefix: 'far',
      iconName: 'envelope',
      url: 'mailto:order@prodamvino.ru',
      color: '#00B4D8'
    }
  ]
}
</script>
