'use client'

import { UserCircle, MailIcon, LockIcon } from 'lucide-react'

import { Input } from '@/components/Input'
import { Button } from '@/components/Button'
import { useFormState } from '@/hooks/useFormState'

import { resetPassword } from './actions'

export function Form() {
  const [state, handleSubmit, isPending] = useFormState(resetPassword)

  if (state.success) {
    return (
      <p className="text-green-700 mb-8 text-center bg-green-100 border-green-700 border rounded-md p-4">
        Email enviado com sucesso
      </p>
    )
  }

  return (
    <form className="mb-4" onSubmit={handleSubmit}>
      {!state.success && state.message && (
        <p className="text-red-500 font-medium text-sm mb-8 bg-red-100 p-4 border border-red-300 rounded-md">
          {state.message}
        </p>
      )}

      <Input
        className="mb-6 w-full"
        name="email"
        type="email"
        placeholder="E-mail"
        icon={MailIcon}
        error={!!state.errors?.email}
      />
      {state.errors?.email && (
        <p className="text-red-500 font-medium text-sm">
          {state.errors?.email[0]}
        </p>
      )}

      <Button className="w-full">
        {isPending ? 'Enviando...' : 'Recuperar'}
      </Button>
    </form>
  )
}
