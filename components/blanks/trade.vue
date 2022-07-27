<template lang="pug">
  .b-trade
    .__preview
      .__image
        .__border
          nuxt-img(
            :src="`images/alcohol/${imageName}.svg`"
          )
    .__content
      deal-step-component.__step(
        step-number="#1"
        step-name="Название"
      )
      deal-step-component.__step(
        step-number="#2"
        disabled
        step-name="Год производства"
      )
      deal-step-component.__step(
        step-number="#3"
        disabled
        step-name="Оценка"
      )
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import DealStep from '~/components/blanks/deal-step.vue'

@Component({
  components: {
    'deal-step-component': DealStep
  }
})
export default class Trade extends Vue {
  @Prop() readonly imageName!: string
}
</script>
