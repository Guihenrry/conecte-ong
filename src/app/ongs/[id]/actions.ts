'use server'

import { toggleVolunteer } from '@/lib/supabase/queries/users_ongs'

type FormType = {
  user_id: string
  ong_id: string
}

export async function volunteer(formData: FormData) {
  const data = Object.fromEntries(formData) as FormType

  const { error } = await toggleVolunteer({
    user_id: data.user_id,
    ong_id: data.ong_id,
  })

  if (error) {
    return { success: true, message: error.message, errors: null }
  }

  return { success: true, message: null, errors: null }
}
