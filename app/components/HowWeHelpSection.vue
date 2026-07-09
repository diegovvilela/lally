<script setup lang="ts">
const steps = [
  {
    title: 'Diagnóstico inicial',
    text: 'Entendemos a estrutura da empresa, documentos existentes, áreas envolvidas e nível de maturidade atual.'
  },
  {
    title: 'Mapeamento de lacunas',
    text: 'Identificamos o que precisa ser revisado em relação a riscos psicossociais, PGR, inventário de riscos, plano de ação e evidências.'
  },
  {
    title: 'Plano de adequação',
    text: 'Organizamos ações, responsáveis, prioridades e documentação necessária para avançar com segurança.'
  },
  {
    title: 'Governança e acompanhamento',
    text: 'Apoiamos a empresa na manutenção do processo, capacitação de áreas-chave e melhoria contínua.'
  }
]
</script>

<template>
  <section id="o-que-mudou" class="relative overflow-hidden scroll-mt-24 bg-white py-20 sm:py-28">
    <div class="pointer-events-none absolute inset-0 bg-dotgrid animate-dot-pan opacity-[0.18]" />
    <div class="pointer-events-none absolute -right-28 top-1/3 h-72 w-72 rounded-full bg-brand-pink/[0.05] blur-[100px] animate-blob-drift" style="animation-delay: 10s" />

    <div class="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
      <div v-reveal class="mx-auto max-w-2xl text-center">
        <p class="text-xs font-semibold uppercase tracking-[0.2em] text-brand-pink">Como funciona</p>
        <h2 class="mt-3 font-display text-3xl text-ink-900 sm:text-4xl">
          Da mudança na NR-1 a um plano de adequação claro
        </h2>
        <p class="mt-5 text-base leading-relaxed text-ink-500 sm:text-lg">
          A NR-1 passou a exigir atenção formal aos fatores de risco psicossociais relacionados ao trabalho
          dentro do Gerenciamento de Riscos Ocupacionais. Na prática, empresas precisam olhar para aspectos
          da organização do trabalho que podem gerar riscos à saúde e segurança, como sobrecarga, assédio,
          conflitos, falta de clareza de função, baixa autonomia, ausência de apoio e outros fatores
          relacionados ao trabalho. É aqui que entra a L.ally.
        </p>
      </div>

      <div class="relative mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div class="pointer-events-none absolute left-0 right-0 top-6 hidden h-px bg-ink-900/10 lg:block" />
        <div
          v-for="(step, i) in steps"
          :key="step.title"
          v-reveal
          :style="{ transitionDelay: `${i * 100}ms` }"
          class="relative flex flex-col items-start"
        >
          <span class="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-brand-pink font-display text-lg font-semibold text-white shadow-card">
            {{ i + 1 }}
          </span>
          <h3 class="mt-5 font-display text-lg text-ink-900">{{ step.title }}</h3>
          <p class="mt-2 text-sm leading-relaxed text-ink-500">{{ step.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
