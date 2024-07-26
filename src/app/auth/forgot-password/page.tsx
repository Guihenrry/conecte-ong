import Link from 'next/link'

import { Form } from './form'

export default function ForgotPassword() {
  return (
    <div className="w-full p-6 max-w-[384px]">
      <h2 className="text-3xl mb-2 font-bold">Recuperar senha</h2>
      <p className="mb-12">Informe seu e-mail para recuperar a senha</p>

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
