<template lang="pug">
  tutorial-component
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Tutorial from '~/components/Tutorial.vue'

@Component({
  components: {
    'tutorial-component': Tutorial
  }
})
export default class Home extends Vue {
}
</script>
