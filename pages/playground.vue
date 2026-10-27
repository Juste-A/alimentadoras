<script setup lang="ts">
import { ICONS, type IconName } from '~/utils/icons'

const iconNames = Object.keys(ICONS) as IconName[]

const variants = ['primary', 'secondary', 'sea', 'ghost'] as const
const sizes = ['md', 'lg'] as const

// Force a theme for testing (adds .light / .dark to <html>)
const theme = ref<'auto' | 'light' | 'dark'>('auto')
useHead({ htmlAttrs: { class: computed(() => (theme.value === 'auto' ? '' : theme.value)) } })

const submitted = ref(0)
</script>

<template>
  <main class="min-h-screen">
    <section class="mx-auto max-w-2xl px-space-4 py-space-8 text-center">
      <h1 class="font-serif text-display md:text-display-xl">Playground</h1>

      <!-- Theme switcher -->
      <div class="flex justify-center gap-space-2 pt-space-5">
        <AtomsBaseButton
          v-for="t in ['auto', 'light', 'dark'] as const"
          :key="t"
          :variant="theme === t ? 'primary' : 'secondary'"
          @click="theme = t"
        >
          {{ t }}
        </AtomsBaseButton>
      </div>

      <!-- BaseIcon -->
      <div class="all-icons pt-10 text-tangerine">
        <h2 class="text-title">BaseIcon</h2>
        <div class="icons flex flex-wrap justify-between gap-space-3 pt-4">
          <AtomsBaseIcon
            v-for="name in iconNames"
            :key="name"
            :name="name"
            :size="24"
            :label="name"
          />
        </div>
      </div>

      <!-- BaseButton -->
      <div class="all-buttons space-y-space-5 pt-10">
        <h2 class="text-title">BaseButton</h2>

        <div v-for="size in sizes" :key="size" class="space-y-space-3">
          <p class="text-ink-muted">size: {{ size }}</p>
          <div class="flex flex-wrap justify-center gap-space-3">
            <AtomsBaseButton v-for="v in variants" :key="v" :variant="v" :size="size">
              {{ v }}
            </AtomsBaseButton>
          </div>
          <div class="flex flex-wrap justify-center gap-space-3">
            <AtomsBaseButton
              v-for="v in variants"
              :key="v"
              :variant="v"
              :size="size"
              icon="gift"
              icon-end="arrow-right"
            >
              {{ v }}
            </AtomsBaseButton>
          </div>
        </div>

        <div class="space-y-space-3">
          <p class="text-ink-muted">
            disabled — "Cubierto" has an href; should still be a &lt;button&gt;
          </p>
          <div class="flex flex-wrap justify-center gap-space-3">
            <AtomsBaseButton v-for="v in variants" :key="v" :variant="v" disabled>{{
              v
            }}</AtomsBaseButton>
            <AtomsBaseButton disabled href="https://example.com" icon="check-circle"
              >Cubierto</AtomsBaseButton
            >
          </div>
        </div>

        <div class="space-y-space-3">
          <p class="text-ink-muted">as a link — should be an &lt;a&gt;, opens a new tab</p>
          <AtomsBaseButton href="https://example.com" target="_blank" rel="noopener" icon="gift">
            Regalar
          </AtomsBaseButton>
        </div>

        <form class="space-y-space-3" @submit.prevent="submitted++">
          <p class="text-ink-muted">inside a form — submitted {{ submitted }} times</p>
          <div class="flex flex-wrap justify-center gap-space-3">
            <AtomsBaseButton variant="secondary">Plain (shouldn't submit)</AtomsBaseButton>
            <AtomsBaseButton type="submit">Submit</AtomsBaseButton>
          </div>
        </form>
      </div>
    </section>
  </main>
</template>
