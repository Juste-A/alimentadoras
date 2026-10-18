<script setup lang="ts">
const { locale, locales, setLocale } = useI18n()
const { wishlistUrl } = useRuntimeConfig().public
</script>

<template>
  <main class="min-h-screen">
    <nav class="flex justify-end gap-space-2 p-space-4" :aria-label="$t('language')">
      <button
        v-for="l in locales"
        :key="l.code"
        class="rounded-pill px-space-3 py-space-1 text-label"
        :class="l.code === locale ? 'bg-surface-raised shadow-sm' : 'text-ink-muted'"
        @click="setLocale(l.code)"
      >
        {{ l.name }}
      </button>
    </nav>

    <section class="mx-auto max-w-2xl px-space-4 py-space-8 text-center">
      <h1 class="font-serif text-display md:text-display-xl">{{ $t('hero.title') }}</h1>
      <p class="mt-space-4 text-body-lg text-ink-muted">{{ $t('hero.subtitle') }}</p>
      <a
        :href="wishlistUrl || '#'"
        target="_blank"
        rel="noopener"
        class="lift mt-space-6 inline-block rounded-pill bg-tangerine px-space-5 py-space-3 text-label text-on-tangerine no-underline shadow-sm hover:shadow-md"
      >
        {{ $t('hero.cta') }}
      </a>
    </section>
  </main>
</template>
