import Image from 'next/image'

type OngCardProps = {
  imgSrc?: string | null
  imgAlt?: string | null
  title?: string | null
}

export function OngCard({ imgSrc, imgAlt, title }: OngCardProps) {
  return (
    <div className="flex flex-col gap-2">
      <Image
        className="max-w-full w-full rounded-2xl"
        src={imgSrc || ''}
        alt={imgAlt || ''}
        width={384}
        height={274}
        objectFit="cover"
      />
      <h3>{title}</h3>
    </div>
  )
}
