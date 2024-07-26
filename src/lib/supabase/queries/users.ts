import { supabase } from '../client'

type CreateUserParams = {
  id: string
  name: string
}

export async function createUser({ id, name }: CreateUserParams) {
  const { data, error } = await supabase
    .from('users')
    .insert([{ id, name, role: 'user' }])
    .select()

  return { data, error }
}

type GetUserParams = {
  accessToken: string
}

export async function getUser({ accessToken }: GetUserParams) {
  const { data, error } = await supabase.auth.getUser(accessToken)

  if (error) {
    return { error }
  }

  const response = await supabase
    .from('users')
    .select('*')
    .eq('id', data.user.id)
    .single()

  return { data: response.data, error: response.error }
}
