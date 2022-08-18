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
        v-on:click="$emit('tap', $event)"
      )
      template(
        v-if="resultList"
      )
        transition-group.__tags(
          name="fade"
          mode="out-in"
        )
          .__tag(
            v-for="tag in resultList"
            :key="tag.name"
            :class="tag.active ? ['is-active'] : ''"
            v-on:click="$emit('click', $event)"
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
  @Prop() resultList!: {id: number, name: string, active: boolean}[]
  @Prop() choosedList!: string[]
  @Prop() disable!: boolean
  @VModel() valueModel!: string

  onInput (e: InputEvent | string) {
    this.valueModel = ((e as InputEvent).target as HTMLInputElement).value
  }
}
</script>
