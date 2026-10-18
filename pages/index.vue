<script setup lang="ts">
const { locale, locales, setLocale } = useI18n()
const { wishlistUrl } = useRuntimeConfig().public
</script>

<template>
  <main class="min-h-screen bg-amber-50 text-stone-800">
    <nav class="flex justify-end gap-2 p-4" :aria-label="$t('language')">
      <button
        v-for="l in locales"
        :key="l.code"
        class="rounded-full px-3 py-1 text-sm font-medium"
        :class="l.code === locale ? 'bg-orange-500 text-white' : 'bg-white'"
        @click="setLocale(l.code)"
      >
        {{ l.name }}
      </button>
    </nav>

    <section class="mx-auto max-w-2xl px-4 py-16 text-center">
      <h1 class="text-4xl font-extrabold">{{ $t('hero.title') }}</h1>
      <p class="mt-4 text-lg">{{ $t('hero.subtitle') }}</p>
      <a :href="wishlistUrl || '#'" target="_blank" rel="noopener" class="mt-8 inline-block rounded-full bg-orange-500 px-6 py-3 font-bold text-white">
        {{ $t('hero.cta') }}
      </a>
    </section>
  </main>
</template>
