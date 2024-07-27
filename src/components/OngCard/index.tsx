import Image from 'next/image'
import { AspectRatio } from '@/components/AspectRatio'

type OngCardProps = {
  imgSrc?: string | null
  imgAlt?: string | null
  title?: string | null
}

export function OngCard({ imgSrc, imgAlt, title }: OngCardProps) {
  return (
    <div className="flex flex-col gap-2">
      <AspectRatio ratio="380 / 290" className="bg-gray-100 rounded-2xl border">
        <Image
          className="max-w-full w-full rounded-2xl"
          src={imgSrc || ''}
          alt={imgAlt || ''}
          objectFit="cover"
          fill
        />
      </AspectRatio>
      <h3>{title}</h3>
    </div>
  )
}
