'use client'

import { useSearchParams, usePathname, useRouter } from 'next/navigation'

import { cities } from '@/data/cities'
import { ongsTypes } from '@/data/ongsTypes'
import { FilterSelect } from '@/components/FilterSelect'
import { FilterInput } from '@/components/FilterInput'
import { Button } from '@/components/Button'
import { FormEvent } from 'react'

type FormType = {
  city: string
  occupation: string
  name: string
}

export function Filters() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)
    const data = Object.fromEntries(formData) as FormType

    const params = new URLSearchParams(searchParams)
    if (data.city) {
      params.set('city', data.city)
    } else {
      params.delete('city')
    }

    if (data.occupation) {
      params.set('occupation', data.occupation)
    } else {
      params.delete('occupation')
    }

    if (data.name) {
      params.set('name', data.name)
    } else {
      params.delete('name')
    }

    replace(`${pathname}?${params.toString()}`)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-12 gap-2 flex flex-col sm:flex-row sm:items-center sm:justify-center"
    >
      <FilterSelect
        label="Cidade"
        name="city"
        defaultValue={searchParams.get('city')?.toString()}
      >
        <option value="">Selecione</option>
        {cities.map((city) => (
          <option value={city} key={city}>
            {city}
          </option>
        ))}
      </FilterSelect>

      <FilterSelect
        label="Área de Atuação"
        name="occupation"
        defaultValue={searchParams.get('occupation')?.toString()}
      >
        <option value="">Selecione</option>
        {ongsTypes.map((type) => (
          <option value={type} key={type}>
            {type}
          </option>
        ))}
      </FilterSelect>

      <FilterInput
        label="Nome"
        placeholder="Nome da ong"
        name="name"
        defaultValue={searchParams.get('name')?.toString()}
      />

      <Button className="w-full sm:w-[100px] h-14" type="submit">
        Filtrar
      </Button>
    </form>
  )
}
