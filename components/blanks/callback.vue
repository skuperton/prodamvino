<template lang="pug">
  .b-callback
    transition-group(
      name="fade-up"
      mode="out-in"
    )
      div(
        v-if="!ordered"
        key="callback"
      )
        p.__label {{field.label}}
        .__wrapper
          input.__input(
            type="number"
            placeholder="Введите номер"
            v-model="inputValue"
          )
          button-component.__button(
            :aria-label="field.button"
            :disabled="!isValid"
            size="l"
            @click="onCallRequest"
          ) {{field.button}}
        p.__link {{field.personalData}}
      div(
        v-else
        key="response"
      )
        p.__ordered Мы свяжемся с вами в ближайшее время.
          <br> Ожидайте звонка.
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
  phoneMask = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/
  ordered = false

  @Watch('inputValue')
  onChangeInputValue (newValue: string) {
    if (newValue.match(this.phoneMask)) {
      this.inputValue = newValue.slice(0, 11)
    }
  }

  field = {
    button: 'Заказать звонок',
    label: 'Ваш номер телефона',
    personalData: 'Нажимая на кнопку "Заказать звонок", вы даёте согласие на обработку ваших персональных данных'
  }

  async sendPhoneNumber () {
    return await this.$axios.post('/reviews/call', {
      phone_number: this.inputValue
    })
      .then((response) => {
        console.log(response)
        this.ordered = true
      })
      .catch((error: any) => console.log(error))
  }

  onCallRequest () {
    if (this.isValid) {
      console.log(this.inputValue)
      this.sendPhoneNumber()
    }
  }

  get isValid () {
    return this.inputValue.toString().match(this.phoneMask) && this.inputValue.toString().match(this.phoneMask)?.length
  }
}
</script>
