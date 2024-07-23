import { useState } from 'react'
import toast from 'react-hot-toast'

import { useAuth } from '@/hooks/useAuth'
import { Logo } from '@/components/logo'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Link } from 'react-router-dom'

export function SignUp() {
  const { signUp } = useAuth()

  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault()

    try {
      await signUp({ email, password, name, phone })
    } catch (error) {
      console.error(error)
      toast.error('Credenciais de login inválidas')
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="h-screen flex flex-col p-4 items-center justify-center gap-8 bg-gray-100"
    >
      <Link to="/">
        <Logo />
      </Link>
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Cadastro</CardTitle>
          <CardDescription>
            Digite seus dados abaixo para realizar o cadastro.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Nome</Label>
            <Input
              id="name"
              type="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="phone">Telefone</Label>
            <Input
              id="phone"
              type="phone"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Senha</Label>
            <Input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Cadastra-se</Button>
        </CardFooter>
      </Card>

      <div className="text-center text-sm">
        Já tem uma conta?{' '}
        <Link to="/sign-in" className="underline">
          Entrar
        </Link>
      </div>
    </form>
  )
}
