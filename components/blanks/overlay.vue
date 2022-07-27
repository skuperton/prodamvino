<template lang="pug">
  .b-overlay(
    :style="{'top': `${indent}px`}"
  )
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { IMenu } from '~/components/blanks/menu.vue'

@Component
export default class Overlay extends Vue {
  @Prop() readonly indent!: IMenu['indent']
}
</script>
