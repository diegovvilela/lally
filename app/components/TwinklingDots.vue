<script setup lang="ts">
interface Dot {
  left: number
  top: number
  size: number
  delay: number
  duration: number
}

const COLS = 22
const ROWS = 13

const dots: Dot[] = []
for (let r = 0; r < ROWS; r++) {
  for (let c = 0; c < COLS; c++) {
    dots.push({
      left: (c / (COLS - 1)) * 100,
      top: (r / (ROWS - 1)) * 100,
      size: Math.random() > 0.82 ? 3 : 2,
      delay: Math.random() * 5,
      duration: 2.8 + Math.random() * 3.2
    })
  }
}
</script>

<template>
  <div class="pointer-events-none absolute inset-0 overflow-hidden">
    <span
      v-for="(dot, i) in dots"
      :key="i"
      class="absolute rounded-full bg-brand-pink animate-dot-twinkle"
      :style="{
        left: `${dot.left}%`,
        top: `${dot.top}%`,
        width: `${dot.size}px`,
        height: `${dot.size}px`,
        animationDelay: `${dot.delay}s`,
        animationDuration: `${dot.duration}s`
      }"
    />
  </div>
</template>
