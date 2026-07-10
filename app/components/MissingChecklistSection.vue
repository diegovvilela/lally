<script setup lang="ts">
const categories = [
  {
    title: 'Diagnóstico',
    items: [
      'Revisão do PGR',
      'Inclusão de fatores psicossociais relacionados ao trabalho',
      'Inventário de riscos atualizado'
    ]
  },
  {
    title: 'Execução',
    items: [
      'Critérios de avaliação e classificação',
      'Plano de ação com responsáveis e prazos',
      'Participação/consulta dos trabalhadores'
    ]
  },
  {
    title: 'Governança',
    items: [
      'Evidências de comunicação e acompanhamento',
      'Capacitação de lideranças',
      'Integração entre RH, SST e jurídico'
    ]
  }
]
</script>

<template>
  <section class="relative overflow-hidden border-t border-ink-900/10 bg-surface-soft py-20 sm:py-28">
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
        <div class="grid gap-8 sm:grid-cols-3">
          <div
            v-for="(category, ci) in categories"
            :key="category.title"
            v-reveal
            :style="{ transitionDelay: `${ci * 100}ms` }"
          >
            <p class="text-xs font-semibold uppercase tracking-[0.2em] text-brand-pink">{{ category.title }}</p>
            <div class="mt-4 flex flex-col gap-3">
              <div v-for="item in category.items" :key="item" class="flex items-start gap-3 text-sm text-ink-700">
                <span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-pink/40" />
                <span>{{ item }}</span>
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
