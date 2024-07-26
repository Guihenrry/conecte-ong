import { getAuthenticatedUser } from '@/auth/auth'
import { redirect } from 'next/navigation'

import { Form } from './form'

export default async function AddOng() {
  const user = await getAuthenticatedUser()
  if (user?.role !== 'admin') redirect('/profile/edit')

  return (
    <div className="mb-20">
      <h2 className="font-bold text-3xl mb-8">Adicionar ONG</h2>
      <Form />
    </div>
  )
}
