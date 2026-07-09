<script setup lang="ts">
const quiz = useQuiz()

const form = reactive({
  nome: '',
  empresa: '',
  cargo: '',
  email: '',
  whatsapp: '',
  colaboradores: '',
  mensagem: ''
})

const colaboradoresOptions = ['Até 50', '51 a 200', '201 a 500', 'Mais de 500']

type Status = 'idle' | 'submitting' | 'success' | 'error'
const status = ref<Status>('idle')

const quizResultLabel = computed(() => quiz.level.value?.title ?? null)

async function handleSubmit() {
  status.value = 'submitting'
  try {
    const payload = {
      ...form,
      quizResult: quizResultLabel.value,
      quizScore: quiz.level.value ? quiz.score.value : null
    }
    await $fetch('/api/lead', { method: 'POST', body: payload })
    status.value = 'success'
  } catch {
    status.value = 'error'
  }
}

const whatsappHref = computed(() => {
  const base = 'Olá, gostaria de entender como a L.ally pode ajudar minha empresa na adequação à NR-1.'
  const message = quizResultLabel.value ? `${base} Meu resultado na autoavaliação foi: ${quizResultLabel.value}.` : base
  return `https://wa.me/5500000000000?text=${encodeURIComponent(message)}`
})
</script>

<template>
  <div class="rounded-3xl border border-ink-900/10 bg-white p-7 shadow-card sm:p-10">
    <div v-if="status === 'success'" class="py-6 text-center">
      <span class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-pink/10 text-brand-pink">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
        </svg>
      </span>
      <h3 class="mt-4 font-display text-xl text-ink-900">Recebemos sua solicitação</h3>
      <p class="mt-2 text-sm text-ink-500">
        Nossa equipe vai entrar em contato em breve para conversar sobre a adequação à NR-1 da sua empresa.
      </p>
    </div>

    <form v-else class="grid gap-5" @submit.prevent="handleSubmit">
      <div v-if="quizResultLabel" class="rounded-xl bg-brand-pink/5 px-4 py-3 text-sm text-ink-700">
        Resultado da sua autoavaliação: <span class="font-semibold text-brand-pink">{{ quizResultLabel }}</span>
      </div>

      <div class="grid gap-5 sm:grid-cols-2">
        <label class="flex flex-col gap-1.5 text-sm font-medium text-ink-700">
          Nome
          <input
            v-model="form.nome"
            type="text"
            name="nome"
            required
            autocomplete="name"
            class="rounded-xl border border-ink-900/15 px-4 py-3 text-ink-900 outline-none transition focus:border-brand-pink"
          />
        </label>
        <label class="flex flex-col gap-1.5 text-sm font-medium text-ink-700">
          Empresa
          <input
            v-model="form.empresa"
            type="text"
            name="empresa"
            required
            autocomplete="organization"
            class="rounded-xl border border-ink-900/15 px-4 py-3 text-ink-900 outline-none transition focus:border-brand-pink"
          />
        </label>
        <label class="flex flex-col gap-1.5 text-sm font-medium text-ink-700">
          Cargo
          <input
            v-model="form.cargo"
            type="text"
            name="cargo"
            autocomplete="organization-title"
            class="rounded-xl border border-ink-900/15 px-4 py-3 text-ink-900 outline-none transition focus:border-brand-pink"
          />
        </label>
        <label class="flex flex-col gap-1.5 text-sm font-medium text-ink-700">
          E-mail
          <input
            v-model="form.email"
            type="email"
            name="email"
            required
            autocomplete="email"
            class="rounded-xl border border-ink-900/15 px-4 py-3 text-ink-900 outline-none transition focus:border-brand-pink"
          />
        </label>
        <label class="flex flex-col gap-1.5 text-sm font-medium text-ink-700">
          WhatsApp
          <input
            v-model="form.whatsapp"
            type="tel"
            name="whatsapp"
            required
            autocomplete="tel"
            placeholder="(11) 90000-0000"
            class="rounded-xl border border-ink-900/15 px-4 py-3 text-ink-900 outline-none transition focus:border-brand-pink"
          />
        </label>
        <label class="flex flex-col gap-1.5 text-sm font-medium text-ink-700">
          Número aproximado de colaboradores
          <select
            v-model="form.colaboradores"
            name="colaboradores"
            class="rounded-xl border border-ink-900/15 px-4 py-3 text-ink-900 outline-none transition focus:border-brand-pink"
          >
            <option value="" disabled>Selecione</option>
            <option v-for="option in colaboradoresOptions" :key="option" :value="option">{{ option }}</option>
          </select>
        </label>
      </div>

      <label class="flex flex-col gap-1.5 text-sm font-medium text-ink-700">
        Mensagem (opcional)
        <textarea
          v-model="form.mensagem"
          name="mensagem"
          rows="3"
          class="resize-none rounded-xl border border-ink-900/15 px-4 py-3 text-ink-900 outline-none transition focus:border-brand-pink"
        />
      </label>

      <p class="text-xs text-ink-500">
        Ao enviar, você concorda em ser contatado pela L.ally para receber orientações sobre adequação à NR-1.
      </p>

      <div class="flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          type="submit"
          :disabled="status === 'submitting'"
          class="rounded-full bg-brand-pink px-7 py-3.5 text-sm font-semibold text-white shadow-card transition duration-200 hover:bg-[#c91f73] disabled:opacity-60"
        >
          {{ status === 'submitting' ? 'Enviando...' : 'Falar com especialista' }}
        </button>
        <a
          :href="whatsappHref"
          target="_blank"
          rel="noopener"
          class="inline-flex items-center justify-center gap-2 rounded-full border border-ink-900/15 px-7 py-3.5 text-sm font-semibold text-ink-900 transition hover:border-brand-pink hover:text-brand-pink"
        >
          Chamar no WhatsApp
        </a>
      </div>

      <p v-if="status === 'error'" class="text-sm text-red-600">
        Não foi possível enviar agora. Tente novamente ou use o WhatsApp.
      </p>
    </form>
  </div>
</template>
