<script setup lang="ts">
const phases = ['Inicial', 'Parcial', 'Em adequação', 'Gestão contínua']
const activePhase = 1

const gaps = [
  'PGR existente',
  'Riscos psicossociais parcialmente mapeados',
  'Inventário precisa revisão',
  'Plano de ação pendente',
  'Evidências dispersas'
]

const MATURITY = 62

interface Stage {
  revealLevel: number
  top: number
  left: number
  duration: number
  ping: boolean
}

const stages: Stage[] = [
  { revealLevel: 1, top: 27, left: 90, duration: 900, ping: true },
  { revealLevel: 2, top: 39, left: 37, duration: 900, ping: true },
  { revealLevel: 3, top: 55, left: 8, duration: 700, ping: true },
  { revealLevel: 4, top: 60.5, left: 8, duration: 700, ping: true },
  { revealLevel: 5, top: 66, left: 8, duration: 700, ping: true },
  { revealLevel: 6, top: 71.5, left: 8, duration: 700, ping: true },
  { revealLevel: 7, top: 77, left: 8, duration: 700, ping: true },
  { revealLevel: 8, top: 90, left: 50, duration: 900, ping: true },
  { revealLevel: 8, top: 90, left: 50, duration: 2400, ping: false },
  { revealLevel: 0, top: 27, left: 90, duration: 500, ping: false }
]

const revealLevel = ref(0)
const cursorTop = ref(stages[0].top)
const cursorLeft = ref(stages[0].left)
const pingKey = ref(0)
const showCursor = ref(false)

const barWidth = computed(() => (revealLevel.value >= 1 ? `${MATURITY}%` : '0%'))
const gapVisible = (i: number) => revealLevel.value >= 3 + i
const recoVisible = computed(() => revealLevel.value >= 8)

let timer: ReturnType<typeof setTimeout> | undefined

function runStage(index: number) {
  const stage = stages[index]
  revealLevel.value = stage.revealLevel
  cursorTop.value = stage.top
  cursorLeft.value = stage.left
  if (stage.ping) pingKey.value += 1

  timer = setTimeout(() => {
    runStage((index + 1) % stages.length)
  }, stage.duration)
}

onMounted(() => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (prefersReducedMotion) {
    revealLevel.value = 8
    return
  }
  showCursor.value = true
  runStage(0)
})

onUnmounted(() => {
  if (timer) clearTimeout(timer)
})
</script>

<template>
  <div class="relative">
    <div class="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-brand-pink/25 blur-[80px]" />
    <div class="pointer-events-none absolute -bottom-10 -right-6 h-36 w-36 rounded-full bg-[#8b5cf6]/20 blur-[80px]" />

    <div class="relative overflow-hidden rounded-3xl border border-white/10 bg-nebula-800/80 p-6 shadow-glow-lg backdrop-blur-xl sm:p-8">
      <div class="flex items-center gap-2">
        <span class="h-1.5 w-1.5 rounded-full bg-brand-pink" />
        <p class="text-xs font-semibold uppercase tracking-[0.2em] text-brand-ice/70">Diagnóstico NR-1</p>
      </div>

      <div class="mt-6">
        <p class="text-[11px] uppercase tracking-wide text-brand-ice/50">Status atual</p>
        <p class="mt-1 font-display text-xl text-white sm:text-2xl">Parcialmente preparada</p>
      </div>

      <div class="mt-6">
        <div class="flex items-center justify-between text-[11px] text-brand-ice/60">
          <span>Nível de maturidade</span>
          <span class="font-semibold text-brand-pink">{{ MATURITY }}%</span>
        </div>
        <div class="mt-2 h-2 w-full overflow-hidden rounded-full bg-white/10">
          <div
            class="h-full rounded-full bg-gradient-to-r from-brand-pink to-[#c86ef2] transition-[width] duration-[900ms] ease-out"
            :style="{ width: barWidth }"
          />
        </div>
      </div>

      <div class="mt-7">
        <div class="relative flex justify-between">
          <div class="absolute left-0 right-0 top-[5px] h-px bg-white/10" />
          <div
            v-for="(phase, i) in phases"
            :key="phase"
            class="relative z-10 flex flex-1 flex-col items-center gap-2 px-0.5"
          >
            <span
              class="h-2.5 w-2.5 rounded-full transition-colors duration-500"
              :class="i === activePhase && revealLevel >= 2 ? 'bg-brand-pink shadow-glow' : 'bg-white/20'"
            />
            <span
              class="text-center text-[9.5px] leading-tight transition-colors duration-500 sm:text-[10px]"
              :class="i === activePhase && revealLevel >= 2 ? 'font-semibold text-white' : 'text-brand-ice/40'"
            >
              {{ phase }}
            </span>
          </div>
        </div>
      </div>

      <div class="mt-7 border-t border-white/10 pt-5">
        <p class="text-[11px] uppercase tracking-wide text-brand-ice/50">Lacunas identificadas</p>
        <div class="mt-3 flex flex-col gap-2.5">
          <div
            v-for="(gap, i) in gaps"
            :key="gap"
            class="flex items-start gap-2.5 text-sm text-brand-ice/80 transition-all duration-500"
            :class="gapVisible(i) ? 'translate-x-0 opacity-100' : '-translate-x-1 opacity-0'"
          >
            <span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-pink/60" />
            <span>{{ gap }}</span>
          </div>
        </div>
      </div>

      <div
        class="mt-7 rounded-2xl border border-brand-pink/25 bg-brand-pink/10 p-4 transition-all duration-500"
        :class="recoVisible ? 'translate-y-0 opacity-100' : 'translate-y-1 opacity-0'"
      >
        <p class="text-[11px] font-semibold uppercase tracking-wide text-brand-pink">Próximo passo recomendado</p>
        <p class="mt-1.5 text-sm leading-relaxed text-white/90">
          Revisar documentação e estruturar plano de ação.
        </p>
      </div>

      <div
        v-if="showCursor"
        class="pointer-events-none absolute z-20"
        :style="{ top: `${cursorTop}%`, left: `${cursorLeft}%`, transition: 'top 700ms ease-in-out, left 700ms ease-in-out' }"
      >
        <span :key="pingKey" class="absolute -left-2 -top-2 h-4 w-4 rounded-full border border-brand-pink/70 animate-click-ping" />
        <span class="absolute -left-[5px] -top-[5px] h-2.5 w-2.5 rounded-full bg-white shadow-glow" />
      </div>
    </div>
  </div>
</template>
