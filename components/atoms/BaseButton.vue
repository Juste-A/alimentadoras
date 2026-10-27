<script setup lang="ts">
import type { IconName } from '~/utils/icons'

type Variant = 'primary' | 'secondary' | 'sea' | 'ghost'
type Size = 'md' | 'lg'

const props = withDefaults(
  defineProps<{
    variant?: Variant
    size?: Size
    icon?: IconName
    iconEnd?: IconName
    href?: string
    disabled?: boolean
  }>(),
  {
    variant: 'primary',
    size: 'md',
    icon: undefined,
    iconEnd: undefined,
    href: undefined,
    disabled: false,
  },
)

// A disabled link can't really be disabled, so it becomes a <button disabled>.
const isLink = computed(() => !!props.href && !props.disabled)

const base =
  'inline-flex items-center justify-center gap-space-2 rounded-pill font-sans font-semibold no-underline ' +
  'transition-[transform,box-shadow,background-color] duration-150 ease-out ' +
  'motion-reduce:transition-none'

const sizes: Record<Size, string> = {
  md: 'h-[46px] px-space-5 text-[15px] leading-5',
  lg: 'h-14 px-space-6 text-[17px] leading-6',
}

const iconSizes: Record<Size, number> = { md: 18, lg: 22 }

const variants: Record<Variant, { rest: string; hover: string }> = {
  primary: {
    rest: 'bg-tangerine text-on-tangerine shadow-sm',
    hover: 'hover:-translate-y-[2px] hover:shadow-md motion-reduce:hover:translate-y-0',
  },
  sea: {
    rest: 'bg-sea text-on-sea shadow-sm',
    hover: 'hover:-translate-y-[2px] hover:shadow-md motion-reduce:hover:translate-y-0',
  },
  secondary: {
    rest: 'bg-surface-raised text-ink ring-1 ring-inset ring-line-strong',
    hover: 'hover:ring-ink hover:shadow-sm',
  },
  ghost: {
    rest: '!px-space-2 bg-transparent text-ink underline decoration-tangerine decoration-2 underline-offset-[5px]',
    hover: 'hover:decoration-ink',
  },
}

const disabledClasses =
  'cursor-default bg-surface-sunk text-ink-muted shadow-[none] ring-0 no-underline'
const pressedClasses = 'active:translate-y-0 active:shadow-[none]'

const classes = computed(() => [
  base,
  sizes[props.size],
  props.disabled
    ? disabledClasses
    : [
        variants[props.variant].rest,
        variants[props.variant].hover,
        pressedClasses,
        'cursor-pointer',
      ],
])
</script>

<template>
  <component
    :is="isLink ? 'a' : 'button'"
    :href="isLink ? href : undefined"
    :type="isLink ? undefined : 'button'"
    :disabled="isLink ? undefined : disabled || undefined"
    :class="classes"
  >
    <AtomsBaseIcon v-if="icon" :name="icon" :size="iconSizes[size]" />
    <span><slot /></span>
    <AtomsBaseIcon v-if="iconEnd" :name="iconEnd" :size="iconSizes[size]" />
  </component>
</template>
