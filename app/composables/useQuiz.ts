export interface QuizOption {
  label: string
  points: 0 | 1 | 2
}

export interface QuizQuestion {
  id: string
  question: string
  options: QuizOption[]
}

export interface QuizLevel {
  key: 'inicial' | 'parcial' | 'adequacao' | 'continua'
  title: string
  text: string
  min: number
  max: number
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'pgr',
    question: 'Sua empresa já possui PGR atualizado?',
    options: [
      { label: 'Não sei / ainda não temos', points: 0 },
      { label: 'Sim, mas não foi revisado recentemente', points: 1 },
      { label: 'Sim, atualizado recentemente', points: 2 }
    ]
  },
  {
    id: 'inventario',
    question: 'O PGR ou inventário de riscos já contempla fatores psicossociais relacionados ao trabalho?',
    options: [
      { label: 'Não', points: 0 },
      { label: 'Parcialmente / não tenho certeza', points: 1 },
      { label: 'Sim', points: 2 }
    ]
  },
  {
    id: 'fatores',
    question: 'A empresa já avaliou fatores como sobrecarga, assédio, conflitos, falta de apoio, baixa autonomia ou falta de clareza de função?',
    options: [
      { label: 'Não', points: 0 },
      { label: 'De forma informal', points: 1 },
      { label: 'Sim, com metodologia/documentação', points: 2 }
    ]
  },
  {
    id: 'plano',
    question: 'Existe plano de ação para os riscos identificados?',
    options: [
      { label: 'Não', points: 0 },
      { label: 'Parcialmente', points: 1 },
      { label: 'Sim, com responsáveis e prazos', points: 2 }
    ]
  },
  {
    id: 'consulta',
    question: 'Os trabalhadores foram consultados ou considerados no processo?',
    options: [
      { label: 'Não', points: 0 },
      { label: 'Parcialmente', points: 1 },
      { label: 'Sim', points: 2 }
    ]
  },
  {
    id: 'evidencias',
    question: 'A empresa possui evidências organizadas do processo?',
    options: [
      { label: 'Não', points: 0 },
      { label: 'Algumas evidências dispersas', points: 1 },
      { label: 'Sim, documentação estruturada', points: 2 }
    ]
  },
  {
    id: 'liderancas',
    question: 'Lideranças, RH e SST sabem como atuar diante das novas exigências?',
    options: [
      { label: 'Não', points: 0 },
      { label: 'Parcialmente', points: 1 },
      { label: 'Sim', points: 2 }
    ]
  },
  {
    id: 'revisao',
    question: 'Existe rotina de revisão, acompanhamento e melhoria contínua?',
    options: [
      { label: 'Não', points: 0 },
      { label: 'Parcialmente', points: 1 },
      { label: 'Sim', points: 2 }
    ]
  }
]

export const quizLevels: QuizLevel[] = [
  {
    key: 'inicial',
    title: 'Nível 1 — Ainda não iniciado',
    text: 'Sua empresa provavelmente precisa começar pelo diagnóstico inicial. O primeiro passo é entender quais documentos existem, quais lacunas precisam ser tratadas e como iniciar a adequação com segurança.',
    min: 0,
    max: 5
  },
  {
    key: 'parcial',
    title: 'Nível 2 — Parcialmente preparada',
    text: 'Sua empresa já possui alguns elementos, mas pode haver lacunas na integração entre diagnóstico, inventário de riscos, PGR, plano de ação e evidências.',
    min: 6,
    max: 10
  },
  {
    key: 'adequacao',
    title: 'Nível 3 — Em adequação',
    text: 'Sua empresa parece estar no caminho certo, mas ainda pode precisar revisar critérios, documentação, responsabilidades e governança para sustentar o processo.',
    min: 11,
    max: 14
  },
  {
    key: 'continua',
    title: 'Nível 4 — Gestão contínua',
    text: 'Sua empresa demonstra maturidade inicial. O próximo passo é manter revisão periódica, acompanhamento de indicadores, capacitação de lideranças e evidências atualizadas.',
    min: 15,
    max: 16
  }
]

const STORAGE_KEY = 'lally_quiz_result'

const answers = ref<Record<string, number | null>>(
  Object.fromEntries(quizQuestions.map((q) => [q.id, null]))
)
const currentStep = ref(0)
const showResult = ref(false)

const isComplete = computed(() => quizQuestions.every((q) => answers.value[q.id] !== null))

const score = computed(() =>
  quizQuestions.reduce((total, q) => total + (answers.value[q.id] ?? 0), 0)
)

const level = computed<QuizLevel | null>(() => {
  if (!isComplete.value) return null
  return quizLevels.find((l) => score.value >= l.min && score.value <= l.max) ?? null
})

function selectAnswer(questionId: string, points: number) {
  answers.value[questionId] = points
}

function goNext() {
  if (currentStep.value < quizQuestions.length - 1) {
    currentStep.value += 1
  } else {
    finish()
  }
}

function goPrev() {
  if (currentStep.value > 0) currentStep.value -= 1
}

function finish() {
  if (!isComplete.value) return
  showResult.value = true
  persist()
}

function reset() {
  answers.value = Object.fromEntries(quizQuestions.map((q) => [q.id, null]))
  currentStep.value = 0
  showResult.value = false
  if (import.meta.client) localStorage.removeItem(STORAGE_KEY)
}

function persist() {
  if (!import.meta.client || !level.value) return
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      score: score.value,
      levelKey: level.value.key,
      levelTitle: level.value.title,
      completedAt: new Date().toISOString()
    })
  )
}

function restore() {
  if (!import.meta.client) return
  const raw = localStorage.getItem(STORAGE_KEY)
  if (!raw) return
  try {
    const saved = JSON.parse(raw)
    if (saved?.levelTitle) {
      showResult.value = true
    }
  } catch {
    localStorage.removeItem(STORAGE_KEY)
  }
}

export function useQuiz() {
  return {
    questions: quizQuestions,
    answers,
    currentStep,
    showResult,
    isComplete,
    score,
    level,
    selectAnswer,
    goNext,
    goPrev,
    finish,
    reset,
    restore
  }
}
