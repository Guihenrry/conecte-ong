'use server'

import { z } from 'zod'
import { cookies } from 'next/headers'

import { signInWithPassword } from '@/lib/supabase/auth'
import { redirect } from 'next/navigation'

const schema = z.object({
  email: z.string().email({ message: 'Informe um endereço de e-mail válido.' }),
  password: z.string().min(1, { message: 'Informe sua senha.' }),
})

export async function signIn(formData: FormData) {
  const result = schema.safeParse(Object.fromEntries(formData))

  if (!result.success) {
    const errors = result.error.flatten().fieldErrors

    return { success: false, message: null, errors }
  }

  const { error, data } = await signInWithPassword({
    email: result.data.email,
    password: result.data.password,
  })

  if (error) {
    return { success: false, message: error.message, errors: null }
  }

  const token = String(data.session?.access_token)
  const maxAge = data.session?.expires_in

  cookies().set('token', token, {
    path: '/',
    maxAge: maxAge,
  })

  return redirect('/')
}
