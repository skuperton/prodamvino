<template lang="pug">
  component.b-button(
    v-bind="attrs"
    v-on:click="$emit('click', $event)"
  )
    font-awesome-icon.__icon(
      v-if="iconName"
      :icon="iconSettings"
    )
    span(
      :style="{'opacity': `${loading ? '0' : null}`}"
    )
      slot
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

export interface IButtonProps {
  view?: 'primary' | 'secondary'
  tag?: 'button' | 'a' | 'nuxt-link'
  size?: 's' | 'm' | 'l'
  type?: 'button' | 'submit'
  disabled?: boolean | ''
  loading?: boolean
  href?: string
  ariaLabel: string
  iconName: string
  iconStyle: string
  shadow: 'flat' | 'box'
}

@Component
export default class Button extends Vue {
  @Prop({ default: 'primary' }) readonly view?: IButtonProps['view']
  @Prop({ default: 's' }) readonly size?: IButtonProps['size']
  @Prop({ default: 'button' }) readonly tag?: IButtonProps['tag']
  @Prop({ default: 'button' }) readonly type?: IButtonProps['type']
  @Prop({ required: true }) readonly ariaLabel!: IButtonProps['ariaLabel']
  @Prop({ default: 'fas' }) readonly iconStyle?: IButtonProps['iconStyle']
  @Prop({ default: 'flat' }) readonly shadow?: IButtonProps['shadow']
  @Prop() readonly iconName?: IButtonProps['iconName']
  @Prop() readonly href?: IButtonProps['href']
  @Prop() readonly loading?: IButtonProps['loading']
  @Prop() readonly disabled?: IButtonProps['disabled']

  get attrs (): Record<string, unknown> {
    return {
      ...this.tag === 'a' && {
        href: this.href,
        rel: 'noopener noreferrer',
        target: '_blank'
      },
      ...this.tag === 'button' && {
        role: 'button',
        type: 'button'
      },
      ...this.tag === 'nuxt-link' && {
        to: this.href
      },
      is: this.tag,
      type: this.type,
      class: this.classes,
      disabled: this.isDisabled,
      ariaLabel: this.ariaLabel
    }
  }

  get iconSettings () {
    return [`${this.iconStyle}`, `${this.iconName}`]
  }

  get classes (): string[] {
    const classes = [
      `button--view-${this.view}`,
      `button--size-${this.size}`,
      `button--shadow-${this.shadow}`
    ]
    if (this.isDisabled) {
      classes.push('is-disabled')
    }
    return classes
  }

  get isDisabled (): boolean {
    return typeof this.disabled !== 'undefined' && this.disabled !== false
  }
}
</script>
