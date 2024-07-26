import { getAuthenticatedUser } from '@/auth/auth'
import { redirect } from 'next/navigation'

import { OngDetail } from '@/components/OngDetail'
import { listOngs } from '@/lib/supabase/queries/ongs'

import { DeleteButton } from './delete-button'
import { NoResult } from '@/components/NoResult'

export default async function Ongs() {
  const user = await getAuthenticatedUser()
  if (user?.role !== 'admin') redirect('/profile/edit')

  const ongs = await listOngs()

  return (
    <div className="pb-16">
      <h2 className="font-bold text-3xl mb-4">Gerenciar ONGs</h2>

      <div>
        {!ongs.data?.length && <NoResult />}

        {ongs.data?.map((ong) => (
          <OngDetail
            key={ong.id}
            id={ong.id}
            imgSrc={ong.cover || ''}
            imgAlt={ong.title}
            title={ong.title}
            occupation={ong.occupation}
            description={ong?.description || ''}
            date={ong?.created_at || ''}
          >
            <DeleteButton id={ong.id} />
          </OngDetail>
        ))}
      </div>
    </div>
  )
}
