import { redirect } from 'next/navigation'
import { getAuthenticatedUser, isAuthenticated } from '@/auth/auth'

import { LinkButton } from '@/components/LinkButton'

export default async function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  if (!isAuthenticated()) redirect('/auth/sign-in')

  const user = await getAuthenticatedUser()

  return (
    <div className="flex flex-col md:flex-row gap-20 px-6 pt-16 max-w-[1300px] m-auto">
      <nav className="flex flex-col gap-2 md:w-full md:max-w-[280px]">
        <LinkButton href="/profile/edit">Meu perfil</LinkButton>
        {user?.role === 'admin' && (
          <>
            <LinkButton href="/profile/add-ong">Adicionar ONG</LinkButton>
            <LinkButton href="/profile/ongs">Gerenciar ongs</LinkButton>
          </>
        )}
        <LinkButton href="/profile/volunteering">Meus Voluntariados</LinkButton>
        <LinkButton href="/api/auth/sign-out" isDestructive>
          Sair do aplicativo
        </LinkButton>
      </nav>
      <main className="flex-1">{children}</main>
    </div>
  )
}
