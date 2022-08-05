<template lang="pug">
  .b-second-step
    deal-step-component.__box(
      :disabled="disable"
      step-number="#2"
      step-name="Год производства"
    )
      p.__label Выберете год производства
      select.__select(
        v-if="options"
        v-on:change="$emit('onChange', $event)"
      )
        option.__option(
          v-for="option in options"
          :key="option.id"
          :value="option.value"
        ) {{option.name}}
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import DealStep from '~/components/blanks/deal-step.vue'

export interface ISecondStep {
  options: {
    id: number
    name: string
    value: string
  }[]
  disable: boolean
}

@Component({
  components: {
    'deal-step-component': DealStep
  }
})
export default class SecondStep extends Vue {
  @Prop() disable!: ISecondStep['disable']
  @Prop() options!: ISecondStep['options']
}
</script>
