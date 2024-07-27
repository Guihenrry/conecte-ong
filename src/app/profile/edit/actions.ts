'use server'

import {
  changePasswordWithCurrentPassword,
  updateUserName,
} from '@/lib/supabase/queries/users'
import { redirect } from 'next/navigation'
import { z } from 'zod'

const schema = z
  .object({
    name: z.string().min(1, {
      message: 'Por favor, insira seu nome',
    }),
    current_password: z.string().optional(),
    password: z.string().optional(),
    password_confirmation: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.current_password || data.password || data.password_confirmation) {
      if (!data.current_password) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'Todos os campos de senha são obrigatórios',
          path: ['current_password'],
        })
      }
      if (!data.password) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'Todos os campos de senha são obrigatórios',
          path: ['password'],
        })
      }
      if (!data.password_confirmation) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'Todos os campos de senha são obrigatórios',
          path: ['password_confirmation'],
        })
      }
    }
  })
  .refine((data) => data.password === data.password_confirmation, {
    message: 'A confirmação da senha não corresponde.',
    path: ['password_confirmation'],
  })

export async function editProfile(formData: FormData) {
  const result = schema.safeParse(Object.fromEntries(formData))

  if (!result.success) {
    const errors = result.error.flatten().fieldErrors

    return { success: false, message: null, errors }
  }

  const { error } = await updateUserName({ name: result.data.name })

  if (error) {
    return { success: false, message: error.message, errors: null }
  }

  if (result.data.current_password && result.data.password) {
    const responseChangePassword = await changePasswordWithCurrentPassword({
      current_password: result.data.current_password,
      password: result.data.password,
    })

    if (responseChangePassword.error) {
      return {
        success: false,
        message: responseChangePassword.error.message,
        errors: null,
      }
    }

    return redirect('/api/auth/sign-out')
  }

  return { success: true, message: null, errors: null }
}
