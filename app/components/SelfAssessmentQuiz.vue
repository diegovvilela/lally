<script setup lang="ts">
const quiz = useQuiz()

onMounted(() => quiz.restore())

const progress = computed(() => ((quiz.currentStep.value + 1) / quiz.questions.length) * 100)
const currentQuestion = computed(() => quiz.questions[quiz.currentStep.value])
const selected = computed(() => quiz.answers.value[currentQuestion.value.id])
const isLastStep = computed(() => quiz.currentStep.value === quiz.questions.length - 1)

function choose(points: number) {
  quiz.selectAnswer(currentQuestion.value.id, points)
  window.setTimeout(() => quiz.goNext(), 220)
}

function restart() {
  quiz.reset()
}
</script>

<template>
  <section id="autoavaliacao" class="relative overflow-hidden scroll-mt-24 border-t border-ink-900/10 bg-surface-soft py-20 sm:py-28">
    <div class="pointer-events-none absolute inset-0 bg-dotgrid animate-dot-pan opacity-[0.18]" />
    <div class="pointer-events-none absolute left-1/2 top-0 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-brand-pink/[0.06] blur-[110px] animate-blob-drift" style="animation-delay: 6s" />

    <div class="relative mx-auto max-w-4xl px-6 sm:px-10 lg:px-16">
      <div v-reveal class="text-center">
        <p class="text-xs font-semibold uppercase tracking-[0.2em] text-brand-pink">Autoavaliação</p>
        <h2 class="mt-3 font-display text-3xl text-ink-900 sm:text-4xl">
          Em que fase sua empresa está na adequação à NR-1?
        </h2>
        <p class="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-ink-500 sm:text-lg">
          Responda algumas perguntas rápidas e entenda se sua empresa está no estágio inicial,
          em estruturação, em adequação ou em gestão contínua.
        </p>
        <p class="mx-auto mt-4 flex max-w-xl items-center justify-center gap-2 text-xs text-ink-500">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 shrink-0 text-brand-pink" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
          </svg>
          Leva menos de 2 minutos. Suas respostas ficam só neste navegador — nada é enviado até
          você decidir preencher o formulário no final.
        </p>
      </div>

      <div class="mt-12">
        <ResultCard
          v-if="quiz.showResult.value && quiz.level.value"
          :level="quiz.level.value"
          :score="quiz.score.value"
          @restart="restart"
        />

        <div v-else class="rounded-3xl border border-ink-900/10 bg-white p-8 shadow-card sm:p-10">
          <div class="mb-8">
            <div class="flex items-center justify-between text-xs font-medium text-ink-500">
              <span>Pergunta {{ quiz.currentStep.value + 1 }} de {{ quiz.questions.length }}</span>
              <span>{{ Math.round(progress) }}%</span>
            </div>
            <div class="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-surface-mist">
              <div class="h-full rounded-full bg-brand-pink transition-all duration-500" :style="{ width: `${progress}%` }" />
            </div>
          </div>

          <h3 class="font-display text-xl text-ink-900 sm:text-2xl">
            {{ currentQuestion.question }}
          </h3>

          <div class="mt-6 flex flex-col gap-3">
            <button
              v-for="option in currentQuestion.options"
              :key="option.label"
              type="button"
              class="flex items-center gap-3 rounded-2xl border px-5 py-4 text-left text-sm font-medium transition"
              :class="selected === option.points
                ? 'border-brand-pink bg-brand-pink/5 text-ink-900'
                : 'border-ink-900/10 text-ink-700 hover:border-brand-pink/50 hover:bg-surface-soft'"
              @click="choose(option.points)"
            >
              <span
                class="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2"
                :class="selected === option.points ? 'border-brand-pink bg-brand-pink' : 'border-ink-900/20'"
              >
                <svg v-if="selected === option.points" xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </span>
              {{ option.label }}
            </button>
          </div>

          <div class="mt-8 flex items-center justify-between">
            <button
              type="button"
              class="text-sm font-medium text-ink-500 transition hover:text-ink-900 disabled:opacity-0"
              :disabled="quiz.currentStep.value === 0"
              @click="quiz.goPrev()"
            >
              &larr; Voltar
            </button>
            <span class="text-xs text-ink-500">{{ isLastStep ? 'Última pergunta' : '' }}</span>
          </div>
        </div>
      </div>

      <div id="contato" class="mt-16 scroll-mt-24 border-t border-ink-900/10 pt-16">
        <div v-reveal class="text-center">
          <h3 class="font-display text-2xl text-ink-900 sm:text-3xl">Pronto para o próximo passo?</h3>
          <p class="mx-auto mt-3 max-w-xl text-base leading-relaxed text-ink-500">
            Deixe seus dados abaixo e receba uma orientação inicial sobre o estágio da sua empresa,
            principais lacunas e próximos passos.
          </p>
        </div>

        <div v-reveal class="mt-8">
          <ContactForm />
        </div>
      </div>
    </div>
  </section>
</template>
