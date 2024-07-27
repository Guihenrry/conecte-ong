import Link from 'next/link'

import { Filters } from '@/components/Filters'
import { NoResult } from '@/components/NoResult'
import { OngCard } from '@/components/OngCard'
import { listOngs } from '@/lib/supabase/queries/ongs'

type HomeProps = {
  searchParams?: {
    city?: string
    occupation?: string
    name?: string
  }
}

export default async function Home({ searchParams }: HomeProps) {
  const { data } = await listOngs({
    city: searchParams?.city,
    occupation: searchParams?.occupation,
    title: searchParams?.name,
  })

  return (
    <main className="px-6 py-20 max-w-[1300px] m-auto">
      <Filters />

      {!data?.length && <NoResult />}

      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {!!data &&
          data.map((ong) => (
            <Link href={`/ongs/${ong.id}`} key={ong.id}>
              <OngCard
                imgSrc={ong.cover}
                imgAlt={ong.title}
                title={ong.title}
              />
            </Link>
          ))}
      </div>
    </main>
  )
}
