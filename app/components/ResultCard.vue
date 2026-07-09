<script setup lang="ts">
import type { QuizLevel } from '~/composables/useQuiz'

const props = defineProps<{
  level: QuizLevel
  score: number
}>()

const emit = defineEmits<{ restart: [] }>()

const levelIndex = computed(() => ['inicial', 'parcial', 'adequacao', 'continua'].indexOf(props.level.key) + 1)

const whatsappHref = computed(() => {
  const message = `Olá, gostaria de entender como a L.ally pode ajudar minha empresa na adequação à NR-1. Meu resultado na autoavaliação foi: ${props.level.title}.`
  return `https://wa.me/5500000000000?text=${encodeURIComponent(message)}`
})
</script>

<template>
  <div class="rounded-3xl border border-ink-900/10 bg-white p-8 shadow-card sm:p-10">
    <div class="flex flex-wrap items-center gap-3">
      <span class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-pink text-sm font-bold text-white">
        {{ levelIndex }}
      </span>
      <span class="text-xs font-semibold uppercase tracking-[0.2em] text-brand-pink">Resultado da autoavaliação</span>
    </div>

    <h3 class="mt-5 font-display text-2xl text-ink-900 sm:text-3xl">{{ level.title }}</h3>
    <p class="mt-4 max-w-2xl text-base leading-relaxed text-ink-500">{{ level.text }}</p>

    <div class="mt-6 h-2 w-full max-w-sm overflow-hidden rounded-full bg-surface-mist">
      <div
        class="h-full rounded-full bg-brand-pink transition-all duration-700"
        :style="{ width: `${(score / 16) * 100}%` }"
      />
    </div>
    <p class="mt-2 text-xs text-ink-500">Pontuação: {{ score }} de 16</p>

    <div class="mt-8 flex flex-wrap gap-3">
      <a
        href="#contato"
        class="rounded-full bg-brand-pink px-6 py-3 text-sm font-semibold text-white shadow-card transition hover:bg-[#c91f73]"
      >
        Receber orientação da L.ally
      </a>
      <a
        :href="whatsappHref"
        target="_blank"
        rel="noopener"
        class="inline-flex items-center gap-2 rounded-full border border-ink-900/15 px-6 py-3 text-sm font-semibold text-ink-900 transition hover:border-brand-pink hover:text-brand-pink"
      >
        Falar com especialista sobre meu resultado
      </a>
      <button
        type="button"
        class="rounded-full px-4 py-3 text-sm font-medium text-ink-500 transition hover:text-ink-900"
        @click="emit('restart')"
      >
        Refazer autoavaliação
      </button>
    </div>

    <p class="mt-6 text-xs text-ink-500">
      Este resultado é apenas uma autoavaliação inicial e não substitui uma análise técnica ou jurídica do caso concreto.
    </p>
  </div>
</template>
