import { z } from 'zod'

export const signIn = z.object({
  body: z.object({
    email: z.string().email(),
    password: z.string(),
  }),
})

export const signUp = z.object({
  body: z.object({
    email: z.string().email(),
    password: z.string(),
    name: z.string(),
    phone: z.string(),
  }),
})
