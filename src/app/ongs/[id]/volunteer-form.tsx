'use client'

import { Button } from '@/components/Button'
import { useFormState } from '@/hooks/useFormState'

import { volunteer } from './actions'
import { useState } from 'react'
import toast from 'react-hot-toast'

type VolunteerFormProps = {
  user_id: string
  ong_id: string
  hasVolunteer: boolean
}

export function VolunteerForm({
  user_id,
  ong_id,
  hasVolunteer,
}: VolunteerFormProps) {
  const [buttonText, setButtonText] = useState(
    hasVolunteer ? 'Desvoluntariar' : 'Seja voluntário'
  )
  const [state, handleSubmit, isPending] = useFormState(volunteer, () => {
    toast.success('A ONG entrará em contato para mais detalhes.')

    setButtonText((prevState) =>
      prevState === 'Desvoluntariar' ? 'Seja voluntário' : 'Desvoluntariar'
    )
  })

  return (
    <form onSubmit={handleSubmit}>
      <input name="user_id" value={user_id} type="hidden" />
      <input name="ong_id" value={ong_id} type="hidden" />
      {isPending ? (
        <Button disabled>Carregando...</Button>
      ) : (
        <Button>{buttonText}</Button>
      )}
    </form>
  )
}
