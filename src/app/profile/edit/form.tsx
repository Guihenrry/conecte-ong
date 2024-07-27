'use client'

import { Lock, User } from 'lucide-react'

import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { useFormState } from '@/hooks/useFormState'
import { editProfile } from './actions'
import toast from 'react-hot-toast'

type EditProfileFormProps = {
  name: string
}

export function EditProfileForm({ name }: EditProfileFormProps) {
  const [state, handleSubmit, isPending] = useFormState(editProfile, () => {
    toast.success('Perfil atualizado com sucesso')
  })

  return (
    <form onSubmit={handleSubmit} className="max-w-[384px] w-full">
      {!state.success && state.message && (
        <p className="text-red-500 font-medium text-sm mb-8 bg-red-100 p-4 border border-red-300 rounded-md">
          {state.message}
        </p>
      )}

      <Input
        placeholder="Nome"
        name="name"
        type="text"
        icon={User}
        defaultValue={name}
        error={!!state.errors?.name}
      />
      {state.errors?.name && (
        <p className="text-red-500 font-medium text-sm mt-2">
          {state.errors?.name[0]}
        </p>
      )}

      <Input
        placeholder="Senha atual"
        name="current_password"
        type="password"
        icon={Lock}
        className="mt-6"
        error={!!state.errors?.current_password}
      />
      {state.errors?.current_password && (
        <p className="text-red-500 font-medium text-sm mt-2">
          {state.errors?.current_password[0]}
        </p>
      )}

      <Input
        placeholder="Nova senha"
        name="password"
        type="password"
        icon={Lock}
        className="mb-2"
        error={!!state.errors?.password}
      />
      {state.errors?.password && (
        <p className="text-red-500 font-medium text-sm mt-2">
          {state.errors?.password[0]}
        </p>
      )}

      <Input
        placeholder="Confirmar senha"
        name="password_confirmation"
        type="password"
        icon={Lock}
        error={!!state.errors?.password_confirmation}
      />
      {state.errors?.password_confirmation && (
        <p className="text-red-500 font-medium text-sm mt-2">
          {state.errors?.password_confirmation[0]}
        </p>
      )}

      <Button className="mt-6 w-full">Confirmar mudanças</Button>
    </form>
  )
}
