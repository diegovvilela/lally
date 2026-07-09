<script setup lang="ts">
const categories = [
  {
    title: 'Diagnóstico',
    items: [
      { text: 'Revisão do PGR', done: true },
      { text: 'Inclusão de fatores psicossociais relacionados ao trabalho', done: false },
      { text: 'Inventário de riscos atualizado', done: false }
    ]
  },
  {
    title: 'Execução',
    items: [
      { text: 'Critérios de avaliação e classificação', done: true },
      { text: 'Plano de ação com responsáveis e prazos', done: false },
      { text: 'Participação/consulta dos trabalhadores', done: false }
    ]
  },
  {
    title: 'Governança',
    items: [
      { text: 'Evidências de comunicação e acompanhamento', done: true },
      { text: 'Capacitação de lideranças', done: false },
      { text: 'Integração entre RH, SST e jurídico', done: false }
    ]
  }
]
</script>

<template>
  <section class="relative overflow-hidden bg-surface-soft py-20 sm:py-28">
    <div class="pointer-events-none absolute inset-0 bg-dotgrid animate-dot-pan opacity-[0.18]" />
    <div class="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-brand-pink/[0.06] blur-[100px] animate-blob-drift" style="animation-delay: 7s" />

    <div class="relative mx-auto max-w-5xl px-6 sm:px-10 lg:px-16">
      <div v-reveal class="mx-auto max-w-2xl text-center">
        <h2 class="font-display text-3xl text-ink-900 sm:text-4xl">
          O problema geralmente não é saber que a NR-1 existe. É saber o que falta fazer.
        </h2>
        <p class="mt-5 text-base leading-relaxed text-ink-500 sm:text-lg">
          Não basta saber que o tema existe. Em uma fiscalização, auditoria, demanda trabalhista ou
          revisão interna, a empresa precisa demonstrar que possui processo, critérios, documentação
          e ações compatíveis com sua realidade.
        </p>
      </div>

      <div class="mt-12 rounded-3xl border border-ink-900/10 bg-white p-6 shadow-card sm:p-8">
        <div v-reveal class="mb-6 inline-flex items-center gap-2 rounded-full bg-brand-pink/10 px-4 py-1.5 text-xs font-semibold text-brand-pink">
          Ilustração: 3 de 9 itens organizados
        </div>

        <div class="grid gap-8 sm:grid-cols-3">
          <div
            v-for="(category, ci) in categories"
            :key="category.title"
            v-reveal
            :style="{ transitionDelay: `${ci * 100}ms` }"
          >
            <p class="text-xs font-semibold uppercase tracking-[0.2em] text-brand-pink">{{ category.title }}</p>
            <div class="mt-4 flex flex-col gap-3">
              <div v-for="item in category.items" :key="item.text" class="flex items-start gap-3 text-sm text-ink-700">
                <span
                  class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded"
                  :class="item.done ? 'bg-brand-pink' : 'border-2 border-brand-pink/40'"
                >
                  <svg v-if="item.done" xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </span>
                <span :class="item.done ? 'text-ink-900' : 'text-ink-700'">{{ item.text }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-reveal class="mt-10 text-center">
        <a
          href="#autoavaliacao"
          class="inline-flex rounded-full bg-brand-pink px-7 py-3.5 text-sm font-semibold text-white shadow-card transition duration-200 hover:bg-[#c91f73]"
        >
          Fazer autoavaliação
        </a>
      </div>
    </div>
  </section>
</template>
