<template lang="pug">
  .b-callback
    p.__label {{field.label}}
    .__wrapper
      input.__input(
        type="number"
        placeholder="Введите номер"
        v-model="inputValue"
      )
      button-component.__button(
        :aria-label="field.button"
        size="l"
      ) {{field.button}}
    link-component.__link(
      view="secondary"
      href="#"
    ) {{field.personalData}}
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'nuxt-property-decorator'
import Link from '~/components/ui/link.vue'
import Button from '~/components/ui/button.vue'

@Component({
  components: {
    'button-component': Button,
    'link-component': Link
  }
})
export default class Callback extends Vue {
  inputValue = ''

  @Watch('inputValue')
  onChangeInputValue (newValue: string) {
    if (newValue.length > 11) {
      this.inputValue = newValue.slice(0, 11)
    }
  }

  field = {
    button: 'Заказать звонок',
    label: 'Ваш номер телефона',
    personalData: 'Нажимая на кнопку, вы даёте согласие на обработку ваших персональных данных'
  }
}
</script>
