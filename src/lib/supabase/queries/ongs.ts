import { supabase } from '../client'
import { getImageUrl } from '../storage'
import { Database } from '../types'

type CreateOngParams = Database['public']['Tables']['ongs']['Insert']

export async function createOng(params: CreateOngParams) {
  return await supabase.from('ongs').insert(params).select()
}

type ListOngsFilters = {
  city?: string
  occupation?: string
  title?: string
}

export async function listOngs(filters?: ListOngsFilters) {
  let query = supabase.from('ongs').select('*')

  if (filters?.city) {
    query = query.eq('city', filters.city)
  }

  if (filters?.occupation) {
    query = query.eq('occupation', filters.occupation)
  }

  if (filters?.title) {
    query = query.like('title', `%${filters.title}%`)
  }

  const response = await query

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
    data: data
      ? {
          ...data,
          cover: getImageUrl(data?.cover),
        }
      : null,
  }
}

export async function deleteOngById(id: string) {
  return supabase.from('ongs').delete().eq('id', id)
}
