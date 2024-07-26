'use client'

import { Button } from '@/components/Button'
import { useFormState } from '@/hooks/useFormState'

import { removeVolunteer } from './actions'

type VolunteerFormProps = {
  userId: string
  ongId?: number
}

export function VolunteerForm({ userId, ongId }: VolunteerFormProps) {
  const [state, handleSubmit, isPending] = useFormState(removeVolunteer)

  return (
    <form onSubmit={handleSubmit}>
      <input name="user_id" value={userId} type="hidden" />
      <input name="ong_id" value={ongId} type="hidden" />
      <button className="px-4 h-12 bg-red-500 hover:bg-red-600 active:bg-red-500 text-white rounded-lg font-bold">
        {isPending ? 'Carregando...' : 'Deixar de ser voluntário'}
      </button>
    </form>
  )
}
