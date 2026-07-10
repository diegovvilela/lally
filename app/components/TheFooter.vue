<script setup lang="ts">
const links = [
  { href: '#o-que-mudou', label: 'Como funciona' },
  { href: '#quem-somos', label: 'Quem somos' },
  { href: '#faq', label: 'FAQ' },
  { href: '#autoavaliacao', label: 'Autoavaliação' }
]
</script>

<template>
  <footer class="relative overflow-hidden bg-nebula-900">
    <div
      class="absolute inset-0 scale-110 bg-cover bg-center opacity-25 animate-drift"
      style="background-image: url('/background/Lally%20background.png');"
    />
    <div class="absolute inset-0 bg-gradient-to-t from-nebula-900 via-nebula-900/90 to-nebula-900/70" />
    <div class="pointer-events-none absolute inset-0 bg-dotgrid animate-dot-pan opacity-[0.12]" />
    <div class="pointer-events-none absolute left-1/2 top-0 h-56 w-[32rem] -translate-x-1/2 rounded-full bg-brand-pink/10 blur-[100px] animate-blob-drift" />

    <div class="relative mx-auto max-w-7xl px-6 py-14 sm:px-10 lg:px-16">
      <div class="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
        <div class="max-w-sm">
          <img src="/brand/Lally id visual 2.png" alt="L.ally" class="h-6 w-auto" />
          <p class="mt-4 text-sm leading-relaxed text-brand-ice/70">
            Consultoria de adequação à NR-1: diagnóstico, gestão de riscos psicossociais relacionados
            ao trabalho, documentação e plano de ação, com clareza técnica e segurança jurídica.
          </p>
        </div>

        <nav class="grid grid-cols-2 gap-x-10 gap-y-3 text-sm text-brand-ice/80 sm:flex sm:gap-8">
          <a v-for="link in links" :key="link.href" :href="link.href" class="transition hover:text-white">
            {{ link.label }}
          </a>
        </nav>
      </div>

      <div class="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-brand-ice/50 sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; {{ new Date().getFullYear() }} L.ally Consultoria. Todos os direitos reservados.</p>
        <p class="max-w-xl sm:text-right">
          Conteúdo institucional e informativo. Não substitui análise técnica ou jurídica do caso concreto.
        </p>
      </div>
    </div>
  </footer>
</template>
