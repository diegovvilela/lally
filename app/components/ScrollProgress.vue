<script setup lang="ts">
const progress = ref(0)
let ticking = false

function handleScroll() {
  if (ticking) return
  ticking = true
  requestAnimationFrame(() => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight
    progress.value = scrollable > 0 ? Math.min((window.scrollY / scrollable) * 100, 100) : 0
    ticking = false
  })
}

onMounted(() => {
  handleScroll()
  window.addEventListener('scroll', handleScroll, { passive: true })
  window.addEventListener('resize', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', handleScroll)
})
</script>

<template>
  <div class="fixed inset-x-0 top-0 z-[60] h-[3px] bg-transparent">
    <div class="h-full bg-brand-pink transition-[width] duration-150 ease-out" :style="{ width: `${progress}%` }" />
  </div>
</template>
