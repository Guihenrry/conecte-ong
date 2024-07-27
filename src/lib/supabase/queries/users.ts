import { supabase } from '../client'
import { signInWithPassword } from '../auth'

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

type UpdateUserNameParams = {
  name: string
  accessToken: string
}

export async function updateUserName({
  name,
  accessToken,
}: UpdateUserNameParams) {
  const { data, error } = await supabase.auth.getUser(accessToken)

  if (error) {
    return { error }
  }

  return await supabase
    .from('users')
    .update({ name: name })
    .eq('id', data.user.id)
}

type ChangePasswordWithCurrentPasswordParams = {
  accessToken: string
  current_password: string
  password: string
}

export async function changePasswordWithCurrentPassword({
  accessToken,
  current_password,
  password,
}: ChangePasswordWithCurrentPasswordParams) {
  const { data, error } = await supabase.auth.getUser(accessToken)

  if (error) {
    return { error }
  }

  const response = await signInWithPassword({
    email: data.user.email || '',
    password: current_password,
  })

  if (response.error) {
    return { error: response.error }
  }

  return supabase.auth.updateUser({ password })
}
