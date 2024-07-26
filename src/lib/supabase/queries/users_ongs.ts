import { supabase } from '../client'
import { getImageUrl } from '../storage'

type CheckHasVolunteerParams = {
  user_id?: string
  ong_id: number | string
}

export async function checkHasVolunteer({
  user_id,
  ong_id,
}: CheckHasVolunteerParams) {
  if (!user_id) return false

  const { data } = await supabase
    .from('users_ongs')
    .select('*')
    .eq('user_id', user_id)
    .eq('ong_id', ong_id)
    .single()
  return !!data
}

type ToggleVolunteerParams = {
  user_id: string
  ong_id: number | string
}

export async function toggleVolunteer({
  user_id,
  ong_id,
}: ToggleVolunteerParams) {
  const hasVolunteer = await checkHasVolunteer({ user_id, ong_id })

  if (hasVolunteer) {
    return supabase
      .from('users_ongs')
      .delete()
      .eq('user_id', user_id)
      .eq('ong_id', ong_id)
  }

  return supabase.from('users_ongs').insert({
    user_id,
    ong_id: Number(ong_id),
  })
}

export async function getOngsByUserId(userId: string) {
  const { data } = await supabase
    .from('users_ongs')
    .select('ong_id, ongs(*)')
    .eq('user_id', userId)
  return data?.map((item) => ({
    ...item.ongs,
    cover: getImageUrl(item.ongs?.cover),
  }))
}
