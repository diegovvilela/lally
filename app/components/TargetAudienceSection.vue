<script setup lang="ts">
const audiences = [
  {
    title: 'Empresas com CLT',
    text: 'Empresas com colaboradores CLT.',
    icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
  },
  {
    title: 'PGR em revisão',
    text: 'Empresas que já possuem PGR, mas precisam revisar fatores psicossociais.',
    icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15'
  },
  {
    title: 'RH e Pessoas',
    text: 'RHs que precisam orientar liderança e diretoria.',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857m0 0a5.002 5.002 0 00-9.288 0M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M13 7a4 4 0 11-8 0 4 4 0 018 0zm6 3a2 2 0 11-4 0 2 2 0 014 0z'
  },
  {
    title: 'SST',
    text: 'Equipes de SST que precisam integrar o tema à gestão de riscos.',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
  },
  {
    title: 'Jurídico e Compliance',
    text: 'Jurídicos e áreas de compliance que desejam reduzir insegurança e passivos.',
    icon: 'M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z'
  },
  {
    title: 'Em expansão',
    text: 'Empresas em crescimento que precisam estruturar governança de SST.',
    icon: 'M2.25 18L9 11.25l4.306 4.306a11.95 11.95 0 015.814-5.518L21.75 6M21.75 6h-5.25M21.75 6v5.25'
  }
]
</script>

<template>
  <section class="relative overflow-hidden border-t border-ink-900/10 bg-white py-20 sm:py-28">
    <div class="pointer-events-none absolute inset-0 bg-dotgrid animate-dot-pan opacity-[0.18]" />
    <div class="pointer-events-none absolute right-1/4 top-0 h-72 w-72 rounded-full bg-brand-pink/[0.05] blur-[100px] animate-blob-drift" style="animation-delay: 5s" />

    <div class="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
      <div v-reveal class="mx-auto max-w-2xl text-center">
        <p class="text-xs font-semibold uppercase tracking-[0.2em] text-brand-pink">Para quem é</p>
        <h2 class="mt-3 font-display text-3xl text-ink-900 sm:text-4xl">
          Para empresas que precisam agir com clareza
        </h2>
      </div>

      <div class="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="(audience, i) in audiences"
          :key="audience.title"
          v-reveal
          :style="{ transitionDelay: `${i * 70}ms` }"
          class="rounded-2xl border border-ink-900/10 bg-white p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-card-hover"
        >
          <span class="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-pink/10 text-brand-pink">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
              <path stroke-linecap="round" stroke-linejoin="round" :d="audience.icon" />
            </svg>
          </span>
          <h3 class="mt-4 font-display text-base text-ink-900">{{ audience.title }}</h3>
          <p class="mt-2 text-sm leading-relaxed text-ink-500">{{ audience.text }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
