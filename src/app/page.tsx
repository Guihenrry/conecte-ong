import { Button } from '@/components/Button'
import { FilterInput } from '@/components/FilterInput'
import { FilterSelect } from '@/components/FilterSelect'
import { Input } from '@/components/Input'
import { NoResult } from '@/components/NoResult'
import { OngCard } from '@/components/OngCard'
import { cities } from '@/data/cities'
import { ongsTypes } from '@/data/ongsTypes'
import { listOngs } from '@/lib/supabase/queries/ongs'
import Link from 'next/link'

export default async function Home() {
  const { data } = await listOngs()

  return (
    <main className="px-6 py-20 max-w-[1300px] m-auto">
      <div className="mb-12 gap-2 flex flex-col sm:flex-row sm:items-center sm:justify-center">
        <FilterSelect label="Cidade">
          <option value="">Selecione</option>
          {cities.map((city) => (
            <option value={city} key={city}>
              {city}
            </option>
          ))}
        </FilterSelect>

        <FilterInput label="Nome" placeholder="Nome da ong" />
        <FilterSelect label="Área de Atuação">
          <option value="">Selecione</option>
          {ongsTypes.map((type) => (
            <option value={type} key={type}>
              {type}
            </option>
          ))}
        </FilterSelect>
        <Button className="w-full sm:w-[100px] h-14">Filtrar</Button>
      </div>

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
