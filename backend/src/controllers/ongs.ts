import { Request, Response } from 'express'
import supabase from '../supabase'

export async function list(req: Request, res: Response) {
  let { data, error } = await supabase.from('ongs').select(`*`)

  if (error || !data) {
    return res.status(401).json({ error: error })
  }

  return res.json(data)
}
