<script setup lang="ts">
const factors = [
  { label: 'PGR', covered: true },
  { label: 'Psicossociais', covered: true },
  { label: 'Inventário', covered: false },
  { label: 'Plano de ação', covered: false },
  { label: 'Evidências', covered: false }
]

const orbitDurations = [18, 22, 26, 30, 34]
const orbitDirections = ['normal', 'reverse', 'normal', 'reverse', 'normal']

const RADIUS = 110
const STROKE = 14
const CIRCUMFERENCE = 2 * Math.PI * RADIUS
const FILL_FRACTION = 0.45
const ARC_LENGTH = CIRCUMFERENCE * FILL_FRACTION
</script>

<template>
  <div>
    <div class="relative mx-auto aspect-square w-full max-w-[300px]">
      <div class="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div class="h-[70%] w-[70%] rounded-full bg-brand-pink/25 blur-3xl" />
      </div>

      <svg viewBox="0 0 300 300" class="absolute inset-0 z-10 h-full w-full">
        <circle :cx="150" :cy="150" :r="RADIUS" fill="none" stroke="rgba(255,255,255,0.1)" :stroke-width="STROKE" />
        <circle
          :cx="150"
          :cy="150"
          :r="RADIUS"
          fill="none"
          stroke="#E72787"
          opacity="0.35"
          :stroke-width="STROKE + 10"
          stroke-linecap="round"
          :stroke-dasharray="`${ARC_LENGTH} ${CIRCUMFERENCE - ARC_LENGTH}`"
          transform="rotate(-90 150 150)"
          style="filter: blur(6px)"
        />
        <circle
          :cx="150"
          :cy="150"
          :r="RADIUS"
          fill="none"
          stroke="#E72787"
          :stroke-width="STROKE"
          stroke-linecap="round"
          :stroke-dasharray="`${ARC_LENGTH} ${CIRCUMFERENCE - ARC_LENGTH}`"
          transform="rotate(-90 150 150)"
        />
      </svg>

      <div
        v-for="(factor, i) in factors"
        :key="factor.label"
        class="absolute inset-[13.5%] z-10 animate-orbit-spin"
        :style="{ animationDuration: `${orbitDurations[i]}s`, animationDirection: orbitDirections[i] }"
      >
        <span
          class="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full"
          :class="factor.covered ? 'h-3 w-3 bg-brand-pink shadow-glow' : 'h-2.5 w-2.5 border border-white/30 bg-nebula-900/60'"
        />
      </div>

      <div
        v-for="n in 3"
        :key="n"
        class="pointer-events-none absolute left-1/2 top-1/2 h-[18%] w-[18%] rounded-full border-2 border-brand-pink/50 animate-sonar-ping"
        :style="{ animationDelay: `${(n - 1)}s` }"
      />

      <span class="absolute left-1/2 top-1/2 z-20 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-pink shadow-glow animate-pulse-soft" />

      <div class="pointer-events-none absolute inset-0 z-20 flex flex-col items-center justify-center px-[22%] text-center">
        <p class="font-display text-lg text-white sm:text-xl">Estruturação</p>
        <p class="mt-1 text-[10px] uppercase tracking-wide text-brand-ice/50">Nível estimado de adequação</p>
      </div>
    </div>

    <div class="mt-6 flex flex-wrap justify-center gap-x-4 gap-y-2">
      <span v-for="factor in factors" :key="factor.label" class="inline-flex items-center gap-1.5 text-[10px] text-brand-ice/70">
        <span class="h-1.5 w-1.5 rounded-full" :class="factor.covered ? 'bg-brand-pink' : 'border border-white/40'" />
        {{ factor.label }}
      </span>
    </div>
  </div>
</template>
