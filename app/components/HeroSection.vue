<script setup lang="ts">
const parallaxOffset = ref(0)
let ticking = false

function handleScroll() {
  if (ticking) return
  ticking = true
  requestAnimationFrame(() => {
    parallaxOffset.value = Math.min(window.scrollY * 0.15, 40)
    ticking = false
  })
}

onMounted(() => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (!prefersReducedMotion) {
    window.addEventListener('scroll', handleScroll, { passive: true })
  }
})

onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<template>
  <section class="relative isolate overflow-hidden bg-nebula-900 pb-24 pt-28 sm:pb-32 sm:pt-32">
    <div class="absolute inset-0" :style="{ transform: `translateY(${parallaxOffset}px)` }">
      <div
        class="absolute inset-0 scale-110 bg-cover bg-center opacity-70 animate-drift"
        style="background-image: url('/background/Lally%20background.png');"
      />
    </div>
    <div class="absolute inset-0 bg-gradient-to-b from-nebula-900/60 via-nebula-900/75 to-nebula-900" />
    <div class="absolute inset-0 bg-gradient-to-r from-nebula-900/70 via-transparent to-nebula-900/40" />
    <div class="pointer-events-none absolute inset-0 bg-dotgrid animate-dot-pan opacity-[0.16]" />

    <div class="pointer-events-none absolute -left-32 top-16 h-96 w-96 rounded-full bg-brand-pink/20 blur-[120px] animate-blob-drift" />
    <div
      class="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-brand-pink/15 blur-[120px] animate-blob-drift"
      style="animation-delay: 4s"
    />

    <div class="relative mx-auto grid max-w-7xl gap-14 px-6 sm:px-10 lg:grid-cols-2 lg:items-center lg:gap-10 lg:px-16">
      <div v-reveal>
        <div class="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-brand-ice backdrop-blur-md">
          <span class="h-1.5 w-1.5 rounded-full bg-brand-pink" />
          Consultoria de adequação à NR-1
        </div>

        <h1 class="font-display text-4xl leading-[1.15] text-white sm:text-5xl lg:text-[3.4rem]">
          Adequação à NR-1 com clareza técnica e segurança jurídica
        </h1>

        <p class="mt-6 max-w-xl text-lg leading-relaxed text-brand-ice/85">
          A L.ally apoia empresas na identificação, avaliação e gestão de riscos psicossociais
          relacionados ao trabalho — com diagnóstico, documentação e plano de ação alinhados ao GRO/PGR.
        </p>

        <div class="mt-9 flex flex-wrap items-center gap-4">
          <a
            href="#autoavaliacao"
            class="rounded-full bg-brand-pink px-7 py-3.5 text-sm font-semibold text-white shadow-glow transition duration-200 hover:scale-[1.03] hover:bg-[#c91f73]"
          >
            Entender minha situação
          </a>
          <a
            href="#contato"
            class="rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white/90 backdrop-blur-md transition duration-200 hover:border-white/60 hover:text-white"
          >
            Falar com especialista
          </a>
        </div>
      </div>

      <div v-reveal style="transition-delay: 120ms" class="lg:pl-6">
        <div class="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] p-7 shadow-glow-lg backdrop-blur-xl sm:p-8">
          <p class="text-center text-xs font-semibold uppercase tracking-[0.2em] text-brand-ice/70">
            Órbita de adequação
          </p>

          <AdequacyOrbit class="mt-6" />

          <p class="mx-auto mt-5 max-w-xs text-center text-xs leading-relaxed text-brand-ice/50">
            Ilustração — cada empresa tem sua própria órbita de adequação.
          </p>
        </div>
      </div>
    </div>

    <a
      href="#o-que-mudou"
      class="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-[11px] font-medium uppercase tracking-[0.25em] text-brand-ice/60 transition hover:text-white"
    >
      Role para saber mais
      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 animate-bounce-down" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </a>
  </section>
</template>
