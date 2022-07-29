<template lang="pug">
  .b-deal-step(
    :class="{'is-disabled': disabled}"
  )
    .__head
      span.__number {{stepNumber}}
      h3.__title {{stepName}}
    transition(
      name="fade"
      mode="out-in"
    )
      .__body(
        v-if="!disabled"
        ref="stepContent"
      )
        slot
</template>

<script lang="ts">
import { Component, Prop, Ref, Vue } from 'nuxt-property-decorator'
import { Maybe } from '~/ts/other'

@Component
export default class DealStep extends Vue {
  @Prop() stepNumber!: string
  @Prop() stepName!: string
  @Prop() disabled!: boolean
  @Ref('stepContent') contentRef!: HTMLDivElement

  isTransition = false

  styles = {
    maxHeight: null as null | string,
    transition: null as null | string
  }

  resize = {
    prevWidth: null as Maybe<number>,
    currentWidth: null as Maybe<number>,
    callback: null as Maybe<() => void>
  }

  readonly animationDuration = 233
  animationTimeout = {} as ReturnType<typeof setTimeout>
  clearAnimationTimeout = {} as ReturnType<typeof setTimeout>

  toggleCollapse (): void {
    this.animateHeight()
  }

  setStyle (name: 'maxHeight' | 'transition', value: Maybe<string>): void {
    this.styles[name] = value
  }

  animateHeight (): void {
    clearTimeout(this.animationTimeout)
    clearTimeout(this.clearAnimationTimeout)

    this.isTransition = true
    this.setStyle('transition', `max-height ${this.animationDuration}ms ease`)

    const height = `${this.contentRef ? this.contentRef.getBoundingClientRect().height : 0}px`

    this.$nextTick(() => {
      this.setStyle('maxHeight', height)
      if (!this.disabled) {
        requestAnimationFrame(() => {
          this.setStyle('maxHeight', `${this.contentRef.getBoundingClientRect().height}px`)
        })
      } else {
        // @ts-ignore
        this.clearAnimationTimeout = setTimeout(() => {
          this.setStyle('maxHeight', '0px')
        })
      }

      this.animationTimeout = setTimeout(() => {
        this.setStyle('maxHeight', null)
        this.setStyle('transition', null)
        this.isTransition = false
        this.$emit('toggleCollapse')
      }, this.animationDuration + 50)
    })
  }

  addResizeWidthEvent (callback: () => void): void {
    this.getResizeWidth()
    this.resize.callback = callback
    window.addEventListener('resize', this.onWindowWidthResize)
  }

  removeResizeWidthEvent (): void {
    window.removeEventListener('resize', this.onWindowWidthResize)
  }

  onWindowWidthResize (): void {
    this.resize.prevWidth = this.resize.currentWidth
    this.resize.currentWidth = window.innerWidth

    if (this.resize.prevWidth !== this.resize.currentWidth) {
      this.resize.callback!()
    }
  }

  getResizeWidth (): void {
    this.resize.currentWidth = window.innerWidth
    this.resize.prevWidth = window.innerWidth
  }

  beforeDestroy (): void {
    clearTimeout(this.animationTimeout)
  }
}
</script>
