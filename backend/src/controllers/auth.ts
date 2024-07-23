import { Request, Response } from 'express'
import supabase from '../supabase'

export async function signIn(req: Request, res: Response) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: req.body.email,
    password: req.body.password,
  })

  if (error) {
    return res.status(error?.status || 401).json({ message: error?.message })
  }

  return res.json(data)
}

export async function signUp(req: Request, res: Response) {
  const { data, error } = await supabase.auth.signUp({
    email: req.body.email,
    password: req.body.password,
  })

  if (error) {
    return res.status(error?.status || 401).json({ message: error?.message })
  }

  return res.json(data)
}
