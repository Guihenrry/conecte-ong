'use client'

import clsx from 'clsx'
import { LucideProps } from 'lucide-react'
import Link, { LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'

type LinkButtonProps = {
  children: React.ReactNode
  className?: string
  isDestructive?: boolean
  icon?: React.ComponentType<LucideProps>
} & LinkProps

export function LinkButton({
  children,
  className,
  href,
  isDestructive,
  ...props
}: LinkButtonProps) {
  const pathname = usePathname()
  const isActiveLink = href === pathname

  return (
    <Link
      {...props}
      href={href}
      className={clsx(
        className,
        'h-14 flex items-center  px-4 bg-gray-100 hover:bg-slate-200 font-bold text-gray-600 rounded-lg',
        {
          'border-l-brand-500 border-l-8': isActiveLink,
        }
      )}
    >
      <span
        className={clsx('text-base', {
          'text-brand-500': isActiveLink,
          'text-red-500': isDestructive,
        })}
      >
        {children}
      </span>
    </Link>
  )
}
