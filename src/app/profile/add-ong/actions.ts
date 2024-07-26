'use server'

import { redirect } from 'next/navigation'

import { createOng } from '@/lib/supabase/queries/ongs'
import { uploadFile } from '@/lib/supabase/storage'

type FormType = {
  cover: File
  title: string
  occupation: string
  phone: string
  city: string
  email: string
  cnpj: string
  site: string
  description: string
}

export async function addOng(formData: FormData) {
  const result = Object.fromEntries(formData) as FormType

  const cover = await uploadFile(result.cover)
  const { error } = await createOng({
    cover,
    title: result.title,
    occupation: result.occupation,
    city: result.city,
    email: result.email,
    phone: result.phone,
    cnpj: result.cnpj,
    site: result.site,
    description: result.description,
  })

  if (error) {
    return { success: false, message: error.message, errors: null }
  }

  return redirect('/')
}
