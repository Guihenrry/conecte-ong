'use client'

import { MailIcon, LockIcon, User } from 'lucide-react'

import { Input } from '@/components/Input'
import { Button } from '@/components/Button'
import { useFormState } from '@/hooks/useFormState'

import { signUp } from './actions'

export function Form() {
  const [state, handleSubmit, isPending] = useFormState(signUp)

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      {!state.success && state.message && (
        <p className="text-red-500 font-medium text-sm mb-8 bg-red-100 p-4 border border-red-300 rounded-md">
          {state.message}
        </p>
      )}

      <Input
        className="mb-2 w-full"
        type="text"
        name="name"
        placeholder="Nome"
        icon={User}
        error={!!state.errors?.name}
      />
      {state.errors?.name && (
        <p className="text-red-500 font-medium text-sm">
          {state.errors?.name[0]}
        </p>
      )}

      <Input
        className="mb-2 w-full"
        type="email"
        name="email"
        placeholder="E-mail"
        icon={MailIcon}
        error={!!state.errors?.email}
      />
      {state.errors?.email && (
        <p className="text-red-500 font-medium text-sm">
          {state.errors?.email[0]}
        </p>
      )}

      <Input
        className="mb-2 w-full"
        name="password"
        type="password"
        placeholder="Senha"
        icon={LockIcon}
        error={!!state.errors?.password}
      />
      {state.errors?.password && (
        <p className="text-red-500 font-medium text-sm">
          {state.errors?.password[0]}
        </p>
      )}

      <Input
        className="mb-2 w-full"
        name="password_confirmation"
        type="password"
        placeholder="Confirmar senha"
        icon={LockIcon}
        error={!!state.errors?.password_confirmation}
      />
      {state.errors?.password_confirmation && (
        <p className="text-red-500 font-medium text-sm">
          {state.errors?.password_confirmation[0]}
        </p>
      )}

      <Button className="w-full mt-6" disabled={isPending}>
        {isPending ? 'Carregando...' : 'Entrar'}
      </Button>
    </form>
  )
}