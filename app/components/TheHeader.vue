<script setup lang="ts">
const isOpen = ref(false)
const isScrolled = ref(false)

const links = [
  { href: '#o-que-mudou', label: 'Como funciona' },
  { href: '#quem-somos', label: 'Quem somos' },
  { href: '#faq', label: 'FAQ' },
  { href: '#autoavaliacao', label: 'Autoavaliação' }
]

function closeMenu() {
  isOpen.value = false
}

function handleScroll() {
  isScrolled.value = window.scrollY > 64
}

onMounted(() => {
  handleScroll()
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-50 border-b backdrop-blur-md transition-colors duration-300"
    :class="isScrolled || isOpen ? 'border-ink-900/5 bg-white/80' : 'border-transparent bg-transparent'"
  >
    <div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-10 lg:px-16">
      <a href="#top" class="flex items-center">
        <img
          :src="isScrolled || isOpen ? '/brand/Lally id visual 1.png' : '/brand/Lally id visual 2.png'"
          alt="L.ally"
          class="h-6 w-auto sm:h-7"
        />
      </a>

      <nav
        class="hidden items-center gap-8 text-sm font-medium lg:flex"
        :class="isScrolled ? 'text-ink-700' : 'text-white/90'"
      >
        <a
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          class="transition hover:text-brand-pink"
        >
          {{ link.label }}
        </a>
      </nav>

      <div class="hidden lg:block">
        <a
          href="#contato"
          class="rounded-full bg-brand-pink px-5 py-2.5 text-sm font-semibold text-white shadow-card transition duration-200 hover:bg-[#c91f73]"
        >
          Falar com especialista
        </a>
      </div>

      <button
        type="button"
        class="flex h-10 w-10 items-center justify-center rounded-full border lg:hidden"
        :class="isScrolled || isOpen ? 'border-ink-900/10 text-ink-900' : 'border-white/20 text-white'"
        :aria-expanded="isOpen"
        aria-label="Abrir menu"
        @click="isOpen = !isOpen"
      >
        <svg v-if="!isOpen" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="isOpen"
        class="border-t border-ink-900/5 bg-white px-6 py-4 lg:hidden"
      >
        <nav class="flex flex-col gap-1 text-sm font-medium text-ink-700">
          <a
            v-for="link in links"
            :key="link.href"
            :href="link.href"
            class="rounded-lg px-3 py-3 transition hover:bg-surface-soft hover:text-brand-pink"
            @click="closeMenu"
          >
            {{ link.label }}
          </a>
          <a
            href="#contato"
            class="mt-2 rounded-full bg-brand-pink px-5 py-3 text-center font-semibold text-white shadow-card"
            @click="closeMenu"
          >
            Falar com especialista
          </a>
        </nav>
      </div>
    </Transition>
  </header>
</template>
