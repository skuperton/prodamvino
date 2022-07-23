<template lang="pug">
  div
    plug-component
    header-component
    Nuxt
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Header from '~/components/blanks/header.vue'
import Plug from '~/components/ui/plug.vue'

@Component({
  components: {
    'plug-component': Plug,
    'header-component': Header
  }
})
export default class DefaultLayout extends Vue {
}
</script>
