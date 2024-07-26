import { supabase } from '../client'
import { getImageUrl } from '../storage'
import { Database } from '../types'

type CreateOngParams = Database['public']['Tables']['ongs']['Insert']

export async function createOng(params: CreateOngParams) {
  return await supabase.from('ongs').insert(params).select()
}

export async function listOngs() {
  const response = await supabase.from('ongs').select('*')

  return {
    error: response.error,
    data: response.data?.map((ong) => ({
      ...ong,
      cover: getImageUrl(ong.cover),
    })),
  }
}

export async function getOngById(id: string) {
  const { data, error } = await supabase
    .from('ongs')
    .select(`*`)
    .eq('id', id)
    .single()

  return {
    error,
    data: {
      ...data,
      cover: getImageUrl(data?.cover),
    },
  }
}

export async function deleteOngById(id: string) {
  return supabase.from('ongs').delete().eq('id', id)
}
