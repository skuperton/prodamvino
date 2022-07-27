<template lang="pug">
  .b-deal-step(
    :class="{'is-disabled': isDisabled}"
  )
    .__head
      span.__number {{stepNumber}}
      h3.__title {{stepName}}
    .__body
      slot
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component
export default class DealStep extends Vue {
  @Prop() stepNumber!: string
  @Prop() stepName!: string
  @Prop() disabled!: boolean

  get isDisabled (): boolean {
    return typeof this.disabled !== 'undefined' && this.disabled !== false
  }
}
</script>
