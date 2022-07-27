<template lang="pug">
  .b-collapse(
    v-on:click="toggleCollapse"
    v-bind="{ 'data-active': isShowSlot }"
    :style="isTransition && 'overflow: hidden'"
  )
    .__head
      h3.__title(
        v-html="title"
      )
      font-awesome-icon.__icon(
        :icon="iconSettings"
      )
    .__wrapper(
      :style="styles"
    )
      transition(
        name="fade"
        mode="out-in"
      )
        .__content(
          v-if="isShowSlot"
          ref="content"
        )
          p(
            v-html="$slots.default[0].text"
          )
</template>

<script lang="ts">
import { Component, Prop, Ref, VModel, Vue, Watch } from 'nuxt-property-decorator'
import { Maybe } from '~/ts/other'

@Component
export default class Collapse extends Vue {
  @Prop() readonly title!: string
  @Ref('content') contentRef!: HTMLDivElement
  @VModel() valueModel!: boolean

  isShowSlot = false
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
    this.toggleValue()
    this.animateHeight()
  }

  toggleValue (): void {
    this.isShowSlot = !this.isShowSlot
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
      if (this.isShowSlot) {
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

  @Watch('valueModel')
  onChangeIsShowSlot (newValue: boolean): void {
    this.valueModel = newValue
  }

  get iconSettings () {
    return ['fas', 'angle-down']
  }

  created (): void {
    this.isShowSlot = this.valueModel
  }

  beforeDestroy (): void {
    clearTimeout(this.animationTimeout)
  }
}
</script>
