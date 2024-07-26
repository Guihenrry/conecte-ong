import Link from 'next/link'

import { Form } from './form'

export default function SignIn() {
  return (
    <div className="w-full p-6 max-w-[384px]">
      <h2 className="text-3xl mb-2 font-bold">Seja bem vindo</h2>
      <p className="mb-12">Faça login para ter experiência completa</p>

      <div className="border-b mb-8">
        <Link href="/auth/sign-up" className="inline-block mr-5">
          Cadastrar
        </Link>
        <Link
          href="/auth/sign-in"
          className="border-b-2 py-2 border-b-brand-500 inline-block"
        >
          Logar
        </Link>
      </div>

      <Form />

      <Link
        href="/auth/forgot-password"
        className="text-gray-600 text-center w-full block hover:underline"
      >
        Esqueceu sua senha?
      </Link>
    </div>
  )
}
