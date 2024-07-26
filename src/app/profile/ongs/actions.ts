'use server'

import { deleteOngById } from '@/lib/supabase/queries/ongs'
import { revalidatePath } from 'next/cache'

type FormType = {
  id: string
}

export async function deleteOng(data: FormData) {
  const result = Object.fromEntries(data) as FormType
  console.log(result)

  await deleteOngById(result.id)
  revalidatePath('/profile/ongs')
}
