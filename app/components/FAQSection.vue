<script setup lang="ts">
const faqs = [
  {
    q: 'NR-1 é uma certificação?',
    a: 'Não exatamente. O foco é adequação e conformidade: identificar, avaliar, documentar e gerenciar riscos ocupacionais, incluindo fatores psicossociais relacionados ao trabalho.'
  },
  {
    q: 'Questionário de clima resolve a NR-1?',
    a: 'Isoladamente, não. Questionários podem apoiar o processo, mas precisam fazer parte de uma análise técnica, conectada à realidade do trabalho, ao inventário de riscos, ao PGR e ao plano de ação.'
  },
  {
    q: 'Minha empresa já tem PGR. Isso é suficiente?',
    a: 'Depende. É necessário avaliar se o PGR contempla fatores psicossociais relacionados ao trabalho, se há inventário atualizado, critérios de classificação, plano de ação e evidências.'
  },
  {
    q: 'Riscos psicossociais são problemas pessoais dos colaboradores?',
    a: 'Não. O foco da NR-1 está nos fatores relacionados ao trabalho e à organização do trabalho, não no diagnóstico clínico individual dos trabalhadores.'
  },
  {
    q: 'Quem deve participar desse processo?',
    a: 'Normalmente, RH, SST, liderança, jurídico/compliance e representantes dos trabalhadores podem ter papéis importantes, de acordo com a estrutura da empresa.'
  },
  {
    q: 'A L.ally faz a adequação completa?',
    a: 'A L.ally apoia a empresa no diagnóstico, organização de lacunas, plano de adequação, documentação, governança e orientação para implementação. O escopo pode ser ajustado conforme a maturidade e necessidade da empresa.'
  }
]

const openIndex = ref<number | null>(0)

function toggle(i: number) {
  openIndex.value = openIndex.value === i ? null : i
}
</script>

<template>
  <section id="faq" class="relative overflow-hidden scroll-mt-24 border-t border-ink-900/10 bg-white py-20 sm:py-28">
    <div class="pointer-events-none absolute inset-0 bg-dotgrid animate-dot-pan opacity-[0.18]" />
    <div class="pointer-events-none absolute left-1/4 bottom-0 h-72 w-72 rounded-full bg-brand-pink/[0.05] blur-[100px] animate-blob-drift" style="animation-delay: 9s" />

    <div class="relative mx-auto max-w-3xl px-6 sm:px-10 lg:px-16">
      <div v-reveal class="text-center">
        <p class="text-xs font-semibold uppercase tracking-[0.2em] text-brand-pink">FAQ</p>
        <h2 class="mt-3 font-display text-3xl text-ink-900 sm:text-4xl">Perguntas frequentes</h2>
      </div>

      <div class="mt-12 flex flex-col gap-3">
        <div
          v-for="(faq, i) in faqs"
          :key="faq.q"
          class="rounded-2xl border border-ink-900/10 bg-white shadow-card"
        >
          <button
            type="button"
            class="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            :aria-expanded="openIndex === i"
            @click="toggle(i)"
          >
            <span class="font-display text-base text-ink-900">{{ faq.q }}</span>
            <span
              class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-surface-soft text-ink-700 transition-transform duration-200"
              :class="{ 'rotate-45': openIndex === i }"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </span>
          </button>
          <Transition
            enter-active-class="transition-all duration-200 ease-out"
            enter-from-class="grid-rows-[0fr] opacity-0"
            enter-to-class="grid-rows-[1fr] opacity-100"
            leave-active-class="transition-all duration-150 ease-in"
            leave-from-class="grid-rows-[1fr] opacity-100"
            leave-to-class="grid-rows-[0fr] opacity-0"
          >
            <div v-if="openIndex === i" class="grid overflow-hidden">
              <p class="min-h-0 px-6 pb-5 text-sm leading-relaxed text-ink-500">{{ faq.a }}</p>
            </div>
          </Transition>
        </div>
      </div>
    </div>
  </section>
</template>
