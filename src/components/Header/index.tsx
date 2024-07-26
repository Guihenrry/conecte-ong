import Link from 'next/link'
import { Button } from '../Button'
import { Logo } from '../Logo'
import { isAuthenticated } from '@/auth/auth'

export function Header() {
  const authenticated = isAuthenticated()

  return (
    <header className="border-b">
      <div className="flex justify-between items-center px-6 h-[88px] box-border max-w-[1300px] m-auto">
        <Link href="/">
          <Logo className="mb-[-10px]" />
        </Link>
        {authenticated ? (
          <Link href="/profile/edit">
            <Button>Minha conta</Button>
          </Link>
        ) : (
          <nav>
            <Link href="/auth/sign-in" className="font-bold mr-4">
              Logar
            </Link>

            <Link href="/auth/sign-up">
              <Button>Cadastrar</Button>
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
