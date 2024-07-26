'use server'

import { z } from 'zod'

import { resetPasswordForEmail } from '@/lib/supabase/auth'

const schema = z.object({
  email: z
    .string()
    .email({ message: 'Por favor, forneça um endereço de e-mail válido.' }),
})

export async function resetPassword(formData: FormData) {
  const result = schema.safeParse(Object.fromEntries(formData))

  if (!result.success) {
    const errors = result.error.flatten().fieldErrors

    return { success: false, message: null, errors }
  }

  const { error } = await resetPasswordForEmail({
    email: result.data.email,
  })

  if (error) {
    return { success: false, message: error.message, errors: null }
  }

  return { success: true, message: null, errors: null }
}
