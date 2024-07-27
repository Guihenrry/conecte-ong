'use client'

import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { Select } from '@/components/Select'
import { Textarea } from '@/components/Textarea'
import { useFormState } from '@/hooks/useFormState'

import { addOng } from './actions'
import { cities } from '@/data/cities'
import { ongsTypes } from '@/data/ongsTypes'

export function Form() {
  const [state, handleSubmit, isPending] = useFormState(addOng)

  return (
    <form onSubmit={handleSubmit} className="max-w-[384px] w-full">
      {!state.success && state.message && (
        <p className="text-red-500 font-medium text-sm mb-8 bg-red-100 p-4 border border-red-300 rounded-md">
          {state.message}
        </p>
      )}

      <div className="mb-4">
        <label htmlFor="cover" className="font-bold mb-2 inline-block">
          Imagem
        </label>

        <Input required type="file" id="cover" name="cover" accept="image/*" />
      </div>

      <div className="mb-4">
        <label htmlFor="title" className="font-bold mb-2 inline-block">
          Titulo
        </label>

        <Input id="title" name="title" required />
      </div>

      <div className="mb-4">
        <label htmlFor="occupation" className="font-bold mb-2 inline-block">
          Área de atuação
        </label>

        <Select id="occupation" name="occupation" required>
          <option value="">Selecione</option>
          {ongsTypes.map((ongType) => (
            <option key={ongType} value={ongType}>
              {ongType}
            </option>
          ))}
        </Select>
      </div>

      <div className="mb-4">
        <label htmlFor="city" className="font-bold mb-2 inline-block">
          Cidade
        </label>

        <Select id="city" name="city" required>
          <option value="">Selecione</option>
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </Select>
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="font-bold mb-2 inline-block">
          E-mail
        </label>

        <Input id="email" name="email" type="email" required />
      </div>

      <div className="mb-4">
        <label htmlFor="phone" className="font-bold mb-2 inline-block">
          Telefone
        </label>

        <Input id="phone" name="phone" type="tel" required />
      </div>

      <div className="mb-4">
        <label htmlFor="cnpj" className="font-bold mb-2 inline-block">
          CNPJ
        </label>

        <Input id="cnpj" name="cnpj" />
      </div>

      <div className="mb-4">
        <label htmlFor="site" className="font-bold mb-2 inline-block">
          Site
        </label>

        <Input id="site" name="site" />
      </div>

      <div>
        <label htmlFor="description" className="font-bold mb-2 inline-block">
          Descrição
        </label>

        <Textarea id="description" name="description" required />
      </div>

      <Button className="mt-6 w-full" disabled={isPending}>
        {isPending ? 'Adicionando...' : 'Adicionar ONG'}
      </Button>
    </form>
  )
}
