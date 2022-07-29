<template lang="pug">
  .b-third-step
    deal-step-component.__box(
      :disabled="disable"
      step-number="#3"
      step-name="Оценка"
    )
      .__field(
        v-for="field in fields"
      )
        p.__label {{field.label}}
        p.__text {{field.text}}
      .__field.--clear
        .__promo
          p.__pay Мы заплатим за ваш алкоголь
          p.__price 4 530 ₽
          p.__descr * Деньги сразу
          p.__descr * Бесплатный выезд
          p.__descr Выкупим за 90 минут
        link-component.__button(
          view="secondary"
          underline
          type="button"
          tag="button"
          @click="$emit('resetForm', $event)"
        ) Рассчитать ещё раз
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import DealStep from '~/components/blanks/deal-step.vue'
import Link from '~/components/ui/link.vue'

export interface IThirdStep {
  fields: {
    id: number
    label: string
    text: string
  }[]
  disable: boolean
}

@Component({
  components: {
    'link-component': Link,
    'deal-step-component': DealStep
  }
})
export default class ThirdStep extends Vue {
  @Prop() disable!: IThirdStep['disable']
  @Prop() fields!: IThirdStep['fields']
}
</script>
