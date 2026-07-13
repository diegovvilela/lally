<script setup lang="ts">
interface Founder {
  name: string
  photo: string | null
}

const founders: Founder[] = [
  { name: 'Pablo Jacinto', photo: '/team/pablo jacinto.png' },
  { name: 'Camila Vilela', photo: '/team/camila vilela.png' },
  { name: 'Camila Brito', photo: '/team/camila brito.png' },
  { name: 'Giulio Franchi', photo: '/team/giulio franchi.png' }
]
</script>

<template>
  <section id="quem-somos" class="relative overflow-hidden scroll-mt-24 border-t border-ink-900/10 bg-white py-20 sm:py-28">
    <div class="pointer-events-none absolute inset-0 bg-dotgrid animate-dot-pan opacity-[0.18]" />
    <div class="pointer-events-none absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-brand-pink/[0.05] blur-[100px] animate-blob-drift" style="animation-delay: 11s" />

    <div class="relative mx-auto max-w-5xl px-6 sm:px-10 lg:px-16">
      <div v-reveal class="mx-auto max-w-2xl text-center">
        <p class="text-xs font-semibold uppercase tracking-[0.2em] text-brand-pink">Quem somos</p>
        <h2 class="mt-3 font-display text-3xl text-ink-900 sm:text-4xl">A L.ally</h2>
        <p class="mx-auto mt-5 text-base leading-relaxed text-ink-500 sm:text-lg">
          A L.ally nasceu do encontro entre direito, gestão de riscos e tecnologia. Somos uma
          consultoria idealizada por sócios com raízes no escritório Jacinto Law, criada para ajudar
          empresas a transformar exigências regulatórias — como a NR-1 — em processos claros,
          documentados e sustentáveis. O nome vem de "Legal Ally": a ideia de ser um aliado jurídico e
          consultivo, não apenas mais um fornecedor de compliance.
        </p>
      </div>

      <p v-reveal class="mt-14 text-center text-xs font-semibold uppercase tracking-[0.2em] text-brand-pink">
        Equipe L.ally
      </p>

      <div
        class="mx-auto mt-6 flex max-w-4xl snap-x snap-mandatory gap-5 overflow-x-auto pb-2 -mx-6 px-6 [-ms-overflow-style:none] [scrollbar-width:none] sm:mx-auto sm:grid sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-4 [&::-webkit-scrollbar]:hidden"
      >
        <article
          v-for="(founder, i) in founders"
          :key="founder.name + i"
          v-reveal
          :style="{ transitionDelay: `${i * 100}ms` }"
          class="flex w-[78%] shrink-0 snap-start flex-col items-center rounded-2xl border border-ink-900/10 bg-surface-soft p-7 text-center shadow-card sm:w-auto sm:shrink"
        >
          <img v-if="founder.photo" :src="founder.photo" :alt="founder.name" class="h-36 w-36 rounded-full object-cover shadow-card sm:h-40 sm:w-40" />
          <span v-else class="flex h-36 w-36 items-center justify-center rounded-full bg-brand-pink/10 text-brand-pink sm:h-40 sm:w-40">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-14 w-14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.964 0a9 9 0 10-11.964 0m11.964 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </span>
          <p class="mt-4 font-display text-base text-ink-900">{{ founder.name }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
