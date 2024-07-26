import { getAuthenticatedUser } from '@/auth/auth'

import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { User, Mail, Lock } from 'lucide-react'

export default async function EditProfile() {
  const user = await getAuthenticatedUser()

  return (
    <div>
      <h2 className="font-bold text-3xl mb-8">Meu perfil</h2>
      <form className="max-w-[384px] w-full">
        <Input
          placeholder="Nome"
          name="name"
          type="text"
          icon={User}
          className="mb-6"
          defaultValue={user.name}
        />

        <Input
          placeholder="Senha atual"
          name="current_password"
          type="password"
          icon={Lock}
          className="mb-2"
        />
        <Input
          placeholder="Nova senha"
          name="password"
          type="password"
          icon={Lock}
          className="mb-2"
        />
        <Input
          placeholder="Confirmar senha"
          name="password_confirmation"
          type="password"
          icon={Lock}
        />

        <Button className="mt-6 w-full">Confirmar mudanças</Button>
      </form>
    </div>
  )
}
