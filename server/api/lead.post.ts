export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  if (!body?.nome || !body?.empresa || !body?.email || !body?.whatsapp) {
    throw createError({ statusCode: 400, statusMessage: 'Campos obrigatórios ausentes.' })
  }

  // TODO: integrar com CRM/webhook/e-mail transacional.
  console.log('[lead] novo contato NR-1:', body)

  return { ok: true }
})
