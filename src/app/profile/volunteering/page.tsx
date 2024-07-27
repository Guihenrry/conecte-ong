import { getAuthenticatedUser } from '@/auth/auth'
import { OngDetail } from '@/components/OngDetail'
import { getOngsByUserId } from '@/lib/supabase/queries/users_ongs'
import { redirect } from 'next/navigation'
import { VolunteerForm } from './volunteer-form'
import { Info } from 'lucide-react'
import { NoResult } from '@/components/NoResult'

export default async function Volunteering() {
  const user = await getAuthenticatedUser()
  if (!user) redirect('/auth/sing-in')

  const ongs = await getOngsByUserId(user?.id)

  return (
    <div className="pb-16">
      <h2 className="font-bold text-3xl mb-4">Meus Voluntariados</h2>

      <div>
        {!ongs?.length && <NoResult />}

        {ongs?.map((ong) => (
          <OngDetail
            key={ong?.id}
            id={ong?.id}
            imgSrc={ong?.cover || ''}
            imgAlt={ong?.title || ''}
            title={ong?.title || ''}
            occupation={ong?.occupation || ''}
            description={ong?.description || ''}
            date={ong?.created_at || ''}
          >
            <div className="mt-4">
              <VolunteerForm ongId={ong?.id} userId={user?.id} />
              <p className="mt-4 text-sm text-gray-400 font-medium flex gap-2 items-center">
                <Info className="w-4 h-4" /> A ONG entrará em contato para mais
                detalhes.
              </p>
            </div>
          </OngDetail>
        ))}
      </div>
    </div>
  )
}
