<template lang="pug">
  .b-first-step
    deal-step-component.__box(
      :disabled="disable"
      step-number="#1"
      step-name="Название"
    )
      p.__label Введите название напитка
      input.__search(
        :value="valueModel"
        placeholder="Введите название напитка"
        v-on:input="onInput"
      )
      .__tags
        .__tag(
          v-for="tag in resultList"
        ) {{tag.name}}
</template>

<script lang="ts">
import { Component, Prop, VModel, Vue } from 'nuxt-property-decorator'
import DealStep from '~/components/blanks/deal-step.vue'

@Component({
  components: {
    'deal-step-component': DealStep
  }
})
export default class FirstStep extends Vue {
  @Prop() resultList!: {name: string}[]
  @Prop() disable!: boolean
  @VModel() valueModel!: string

  onInput (e: InputEvent | string) {
    this.valueModel = ((e as InputEvent).target as HTMLInputElement).value
  }
}
</script>
