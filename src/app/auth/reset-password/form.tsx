'use client'

import { FormEvent, useState, useTransition } from 'react'
import { LockIcon } from 'lucide-react'
import { z } from 'zod'

import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { updateUserPassword } from '@/lib/supabase/auth'

export interface FormState {
  success: boolean
  message: string | null
  errors: Record<string, string[]> | null
}

const schema = z
  .object({
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

export function Form() {
  const [isPending, startTransition] = useTransition()

  const [state, setState] = useState<FormState>({
    success: false,
    message: null,
    errors: null,
  })

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const form = event.currentTarget
    const formData = new FormData(form)
    const data = Object.fromEntries(formData)
    const result = schema.safeParse(data)

    if (!result.success) {
      const errors = result.error.flatten().fieldErrors

      return setState({ success: false, message: null, errors })
    } else {
      setState({ success: false, message: null, errors: null })
    }

    startTransition(async () => {
      const { error } = await updateUserPassword({
        password: result.data.password,
      })

      if (error) {
        return setState({
          success: false,
          message: error?.message,
          errors: null,
        })
      }

      setState({ success: true, message: null, errors: null })
    })
  }

  if (state.success) {
    return (
      <p className="text-green-700 mb-8 text-center bg-green-100 border-green-700 border rounded-md p-4">
        Senha alterada com sucesso
      </p>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <Input
        className="mb-2 w-full"
        placeholder="Senha"
        type="password"
        name="password"
        icon={LockIcon}
        error={!!state.errors?.password}
      />
      {state.errors?.password && (
        <p className="text-red-500 font-medium text-sm">
          {state.errors?.password[0]}
        </p>
      )}
      <Input
        className=" w-full"
        placeholder="Confirmar senha"
        type="password"
        name="password_confirmation"
        icon={LockIcon}
        error={!!state.errors?.password_confirmation}
      />
      {state.errors?.password_confirmation && (
        <p className="text-red-500 font-medium text-sm">
          {state.errors?.password_confirmation[0]}
        </p>
      )}
      <Button type="submit" className="w-full mt-6">
        {isPending ? 'Recuperando...' : 'Recuperar'}
      </Button>
    </form>
  )
}
