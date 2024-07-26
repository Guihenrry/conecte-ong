import { Button } from '@/components/Button'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <h2 className="text-3xl font-bold mb-2">Não Encontrado</h2>
      <p className="mb-4 text-lg">
        Não foi possível encontrar o recurso solicitado
      </p>
      <Link href="/">
        <Button>Voltar para Home</Button>
      </Link>
    </div>
  )
}
