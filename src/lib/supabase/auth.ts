import { supabase } from './client'
import { createUser } from './queries/users'

type SignUpParams = {
  name: string
  email: string
  password: string
}

export const signUp = async ({ email, password, name }: SignUpParams) => {
  const { data, error } = await supabase.auth.signUp({ email, password })

  if (!error && data.user?.id) {
    await createUser({ id: data.user?.id, name })
  }

  return { data, error }
}

type SignInParams = {
  email: string
  password: string
}

export const signInWithPassword = async ({ email, password }: SignInParams) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })
  return { data, error }
}

type ResetPasswordForEmailParams = {
  email: string
}

export const resetPasswordForEmail = async ({
  email,
}: ResetPasswordForEmailParams) => {
  const { error, data } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${process.env.NEXT_PUBLIC_SUPABASE_RESET_PASSWORD_URL}`,
  })
  return { error, data }
}

type UpdateUserPasswordParams = {
  password: string
}

export const updateUserPassword = async ({
  password,
}: UpdateUserPasswordParams) => {
  const { error, data } = await supabase.auth.updateUser({ password })
  return { error, data }
}

export const signOut = async () => {
  const { error } = await supabase.auth.signOut()
  return { error }
}
