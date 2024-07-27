import React from 'react'
import clsx from 'clsx'

type AspectRatio = {
  ratio: string
  children: React.ReactNode
  className?: string
}

export function AspectRatio({
  ratio,
  children,
  className,
  ...props
}: AspectRatio) {
  const [numerator, denominator] = ratio.split('/').map(Number)
  const aspectRatio = numerator / denominator

  return (
    <div
      {...props}
      className={clsx('relative w-full', className)}
      style={{
        paddingTop: `${(1 / aspectRatio) * 100}%`,
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full">{children}</div>
    </div>
  )
}
