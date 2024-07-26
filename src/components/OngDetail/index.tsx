import Image from 'next/image'
import Link from 'next/link'

type OngDetailProps = {
  id?: number
  imgSrc: string
  imgAlt: string
  title: string
  occupation: string
  description: string
  date: string
  children?: React.ReactNode
}

export function OngDetail({
  id,
  imgSrc,
  imgAlt,
  title,
  occupation,
  description,
  date,
  children,
}: OngDetailProps) {
  return (
    <div className="flex flex-col md:grid md:grid-cols-2 gap-8 lg:flex-row py-8 border-b">
      <div className="w-full min-w-[180px]">
        <Link href={`/ongs/${id}`}>
          <Image
            className="max-w-full w-full rounded-3xl"
            src={imgSrc}
            alt={imgAlt}
            width={384}
            height={274}
            objectFit="cover"
          />
        </Link>
      </div>

      <div className="relative">
        {title && <h3 className="font-medium text-2xl">{title}</h3>}
        {occupation && (
          <p className="text-xs text-gray-500 mb-8">{occupation}</p>
        )}

        {description && <p className="text-gray-500 mb-4">{description}</p>}

        {children}
      </div>
    </div>
  )
}
