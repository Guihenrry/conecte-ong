import Link from 'next/link'
import { LockIcon } from 'lucide-react'

import { Input } from '@/components/Input'
import { Button } from '@/components/Button'
import { Form } from './form'

export default function ResetPassword() {
  return (
    <div className="w-full p-6 max-w-[384px]">
      <h2 className="text-3xl mb-2 font-bold">Restaurar senha</h2>
      <p className="mb-12">Informe a senha abaixo para restaurar sua conta</p>

      <Form />

      <Link
        href="/auth/sign-in"
        className="text-gray-600 text-center w-full block hover:underline"
      >
        Voltar
      </Link>
    </div>
  )
}
