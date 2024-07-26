'use client'

import { deleteOng } from './actions'

type DeleteButtonProps = {
  id?: string | number
}

export function DeleteButton({ id }: DeleteButtonProps) {
  return (
    <form action={deleteOng}>
      <input type="hidden" value={id} name="id" />

      <button className="px-4 h-12 bg-red-500 hover:bg-red-600 active:bg-red-500 text-white rounded-lg font-bold">
        Deletar
      </button>
    </form>
  )
}
