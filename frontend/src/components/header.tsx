import { Link } from 'react-router-dom'

import { Logo } from '@/components/logo'
import { Button } from '@/components/ui/button'

import { useAuth } from '@/hooks/useAuth'

export function Header() {
  const { isLoggedIn, signOut } = useAuth()

  return (
    <header className="max-w-6xl mx-auto flex justify-between p-8">
      <Link to="/">
        <Logo />
      </Link>
      {isLoggedIn ? (
        <Button onClick={signOut}>Sair</Button>
      ) : (
        <Button asChild>
          <Link to="/sign-in">Entrar</Link>
        </Button>
      )}
    </header>
  )
}
