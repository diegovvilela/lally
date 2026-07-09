<script setup lang="ts">
const differentials = [
  {
    title: 'Segurança jurídica',
    text: 'Apoio para interpretar exigências e reduzir incertezas na tomada de decisão.'
  },
  {
    title: 'Clareza técnica',
    text: 'Tradução dos requisitos da NR-1 para um plano aplicável à realidade da empresa.'
  },
  {
    title: 'Integração com RH e SST',
    text: 'Comunicação simples para conectar jurídico, RH, segurança do trabalho e liderança.'
  },
  {
    title: 'Documentação e evidências',
    text: 'Organização do processo para que a empresa consiga demonstrar o caminho adotado.'
  },
  {
    title: 'Plano prático',
    text: 'Nada de relatórios que ficam na gaveta. O foco é transformar diagnóstico em ação.'
  }
]
</script>

<template>
  <section class="relative overflow-hidden bg-surface-soft py-20 sm:py-28">
    <div class="pointer-events-none absolute inset-0 bg-dotgrid animate-dot-pan opacity-[0.18]" />
    <div class="pointer-events-none absolute -left-28 bottom-0 h-72 w-72 rounded-full bg-brand-pink/[0.06] blur-[100px] animate-blob-drift" style="animation-delay: 3s" />

    <div class="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
      <div v-reveal class="mx-auto max-w-2xl text-center">
        <p class="text-xs font-semibold uppercase tracking-[0.2em] text-brand-pink">Diferenciais</p>
        <h2 class="mt-3 font-display text-3xl text-ink-900 sm:text-4xl">
          Consultoria com olhar técnico, jurídico e prático
        </h2>
      </div>

      <div class="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
        <article
          v-for="(item, i) in differentials"
          :key="item.title"
          v-reveal
          :style="{ transitionDelay: `${i * 80}ms` }"
          class="rounded-2xl border border-ink-900/10 bg-white p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-card-hover"
        >
          <h3 class="font-display text-base text-ink-900">{{ item.title }}</h3>
          <p class="mt-2 text-sm leading-relaxed text-ink-500">{{ item.text }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
