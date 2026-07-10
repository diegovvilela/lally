<script setup lang="ts">
interface Dot {
  left: number
  top: number
  size: number
  delay: number
  duration: number
}

const SPACING = 46

const rootEl = ref<HTMLElement | null>(null)
const dots = ref<Dot[]>([])

function buildDots() {
  const el = rootEl.value
  if (!el) return
  const { width, height } = el.getBoundingClientRect()
  if (!width || !height) return

  const cols = Math.max(2, Math.round(width / SPACING))
  const rows = Math.max(2, Math.round(height / SPACING))
  const list: Dot[] = []

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      list.push({
        left: (c / (cols - 1)) * 100,
        top: (r / (rows - 1)) * 100,
        size: Math.random() > 0.82 ? 3 : 2,
        delay: Math.random() * 5,
        duration: 2.8 + Math.random() * 3.2
      })
    }
  }

  dots.value = list
}

onMounted(() => {
  buildDots()
  window.addEventListener('resize', buildDots)
})

onUnmounted(() => window.removeEventListener('resize', buildDots))
</script>

<template>
  <div ref="rootEl" class="pointer-events-none absolute inset-0 overflow-hidden">
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
