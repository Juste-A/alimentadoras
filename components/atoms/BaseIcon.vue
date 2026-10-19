<script setup lang="ts">
import { ICONS, type IconName } from '~/utils/icons'

const props = withDefaults(defineProps<{ name: IconName; size?: number; label?: string }>(), {
  size: 20,
  label: undefined,
})

const path = computed(() => ICONS[props.name])
</script>

<template>
  <svg
    v-if="path"
    class="inline-block shrink-0 align-middle"
    :width="size"
    :height="size"
    viewBox="0 0 256 256"
    fill="currentColor"
    focusable="false"
    :role="label ? 'img' : undefined"
    :aria-label="label"
    :aria-hidden="label ? undefined : 'true'"
  >
    <path :d="path" />
  </svg>
</template>
