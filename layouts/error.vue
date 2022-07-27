<template lang="pug">
  .b-error
    h1.__text(
      v-if="error.statusCode === 404"
    ) Page Not Found
    h1.__text(
      v-else
    ) An error occurred - {{ error.statusCode }}
    NuxtLink.__button.button.button--view-secondary.button--size-s(
      to="/"
    ) Home page
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { NuxtError } from '@nuxt/types'

@Component({
  layout: 'error'
})
export default class ErrorLayout extends Vue {
  @Prop() readonly error!: NuxtError

  mounted () {
    console.log(this.$refs)
  }
}
</script>

<style lang="scss">
.error {
  padding-top: 100px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  &__text {
    font-size: 34px;
    text-transform: uppercase;
    margin-bottom: 20px;
  }

  @media (min-width: 650px) {
    padding-top: 140px;
  }
}
</style>
