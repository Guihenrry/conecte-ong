import Link from 'next/link'

import { Form } from './form'

export default function SignUp() {
  return (
    <div className="w-full p-6 max-w-[384px]">
      <h2 className="text-3xl mb-2 font-bold">Seja bem vindo</h2>
      <p className="mb-12">Cadastra-se para ter experiência completa</p>

      <div className="border-b mb-8">
        <Link
          href="/auth/sign-up"
          className="inline-block mr-5 border-b-2 py-2 border-b-brand-500"
        >
          Cadastrar
        </Link>
        <Link href="/auth/sign-in" className="inline-block">
          Logar
        </Link>
      </div>

      <Form />
    </div>
  )
}
