import Image from 'next/image'

export function NoResult() {
  return (
    <div className="flex flex-col items-center mx-auto py-20 w-[290px] text-center">
      <Image
        width={207.85}
        height={96}
        className="mb-8"
        src="/no-results.svg"
        alt=""
      />
      <h3 className="mb-2 font-bold text-center">Ops... Sem resultados</h3>
      <p className="text-gray-500 text-center">
        Não conseguimos encontrar resultados para essa sua solicitação
      </p>
    </div>
  )
}
