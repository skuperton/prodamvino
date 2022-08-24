<template lang="pug">
  .b-third-step
    deal-step-component.__box(
      :disabled="disable"
      step-number="#3"
      step-name="Оценка"
    )
      .__field(
        v-for="field in fields"
        :key="field.id"
      )
        p.__label {{field.label}}
        p.__text {{field.text}}
      .__field.--clear
        .__promo
          p.__pay Мы заплатим за ваш алкоголь
          p.__price(
            v-if="price"
          ) {{price}} ₽
          p.__descr * Деньги сразу
          p.__descr * Бесплатный выезд
          p.__descr * Цена может меняться.
          p.__descr Подробности уточняйте у менеджера.
        .__callme
          p Позвоните нам
          .__number
            font-awesome-icon.__icon(
              :icon="['fas', 'phone']"
            )
            a(
              href="tel:79362734449"
            ) +7 936 273-44-49
        contact-component.__contact(
          :reversed="true"
        )
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
import Contact from '~/components/blanks/menu-layouts/contact.vue'

export interface IThirdStep {
  fields: {
    id: number
    label: string
    text: string
  }[]
  disable: boolean
  price: number
}

@Component({
  components: {
    'contact-component': Contact,
    'link-component': Link,
    'deal-step-component': DealStep
  }
})
export default class ThirdStep extends Vue {
  @Prop() disable!: IThirdStep['disable']
  @Prop() fields!: IThirdStep['fields']
  @Prop() price!: IThirdStep['price']
}
</script>
