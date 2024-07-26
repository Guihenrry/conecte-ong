import { getUser } from '@/lib/supabase/queries/users'
import { cookies } from 'next/headers'

export function isAuthenticated() {
  return !!cookies().get('token')?.value
}

export async function getAuthenticatedUser() {
  const accessToken = String(cookies().get('token')?.value)
  const response = await getUser({ accessToken })
  return response.data
}
