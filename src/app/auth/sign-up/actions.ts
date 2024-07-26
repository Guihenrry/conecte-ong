'use server'

import { z } from 'zod'
import { cookies } from 'next/headers'

import { signUp as signUpUser } from '@/lib/supabase/auth'
import { redirect } from 'next/navigation'

const schema = z
  .object({
    name: z.string().min(1, {
      message: 'Por favor, insira seu nome',
    }),
    email: z
      .string()
      .email({ message: 'Por favor, forneça um endereço de e-mail válido.' }),
    password: z
      .string()
      .min(6, { message: 'A senha deve ter pelo menos 6 caracteres.' }),
    password_confirmation: z
      .string()
      .min(1, 'Por favor, insira a confirmação da senha.'),
  })
  .refine((data) => data.password === data.password_confirmation, {
    message: 'A confirmação da senha não corresponde.',
    path: ['password_confirmation'],
  })

export async function signUp(formData: FormData) {
  const result = schema.safeParse(Object.fromEntries(formData))

  if (!result.success) {
    const errors = result.error.flatten().fieldErrors

    return { success: false, message: null, errors }
  }

  const { error, data } = await signUpUser({
    name: result.data.name,
    email: result.data.email,
    password: result.data.password,
  })

  if (error) {
    return { success: false, message: error.message, errors: null }
  }

  const token = String(data.session?.access_token)

  cookies().set('token', token, {
    path: '/',
    maxAge: 60 * 60 * 24 * 7, // 7 days
  })

  return redirect('/')
}
