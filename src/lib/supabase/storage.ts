import { supabase } from './client'

const BUCKET_NAME = 'images'

export function getImageUrl(image: string | null | undefined) {
  if (!image) return null
  const { data } = supabase.storage.from(BUCKET_NAME).getPublicUrl(image)
  return data.publicUrl
}

export async function uploadFile(file: File) {
  const fileName = `${Date.now()}-${file.name}`
  const { error } = await supabase.storage
    .from(BUCKET_NAME)
    .upload(fileName, file)

  if (error) {
    console.error(error)
  }

  return fileName
}

export async function deleteFile(fileName: string) {
  return await supabase.storage.from(BUCKET_NAME).remove([fileName])
}
