import Image from 'next/image'
import Link from 'next/link'

import { checkHasVolunteer } from '@/lib/supabase/queries/users_ongs'
import { getOngById } from '@/lib/supabase/queries/ongs'
import { getAuthenticatedUser } from '@/auth/auth'
import { Button } from '@/components/Button'

type DetailPageProps = {
  params: {
    id: string
  }
}

import { volunteer } from './actions'
import { VolunteerForm } from './volunteer-form'

export default async function DetailPage({ params: { id } }: DetailPageProps) {
  const { data } = await getOngById(id)
  const user = await getAuthenticatedUser()
  const hasVolunteer = await checkHasVolunteer({
    ong_id: id,
    user_id: user?.id,
  })

  return (
    <div>
      <div className="border-b">
        <div className="px-6 pt-16 pb-3 max-w-[848px] m-auto">
          <h1 className="text-2xl font-bold mb-1">{data.title}</h1>
          <p className="text-gray-500 font-light">{data.occupation}</p>
        </div>
      </div>
      <div className="px-6 pt-6 pb-20 max-w-[848px] m-auto">
        <Image
          src={data.cover || ''}
          alt={data.title || ''}
          width={800}
          height={540}
          className="max-w-full rounded-3xl"
        />

        <div className="flex flex-col md:flex-row gap-8 md:gap-20 mt-12">
          <div className="order-2 md:order-1">
            {data.description && (
              <div className="mb-4 pb-4 border-b">
                <h4 className="font-bold mb-2">Descrição</h4>
                <p className="text-gray-500">{data.description}</p>
              </div>
            )}

            {data.phone && (
              <div className="mb-4 pb-4 border-b">
                <h4 className="font-bold mb-2">Telefone</h4>
                <p className="text-gray-500">{data.phone}</p>
              </div>
            )}

            {data.email && (
              <div className="mb-4 pb-4 border-b">
                <h4 className="font-bold mb-2">E-mail</h4>
                <p className="text-gray-500">{data.email}</p>
              </div>
            )}

            {data.cnpj && (
              <div className="mb-4 pb-4 border-b">
                <h4 className="font-bold mb-2">CNPJ</h4>
                <p className="text-gray-500">{data.cnpj}</p>
              </div>
            )}

            {data.site && (
              <div className="mb-4 pb-4 border-b">
                <h4 className="font-bold mb-2">Site</h4>
                <p className="text-gray-500">{data.site}</p>
              </div>
            )}
          </div>
          <div className="order-1 md:order-2 min-w-[160px]">
            {user ? (
              <VolunteerForm
                hasVolunteer={hasVolunteer}
                ong_id={id}
                user_id={user.id}
              />
            ) : (
              <Link href="/auth/sign-up">
                <Button>Seja Voluntário</Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
