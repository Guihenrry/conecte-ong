import React, { SelectHTMLAttributes } from 'react'
import clsx from 'clsx'

import { CircleAlert, LucideProps } from 'lucide-react'

interface InputProps extends SelectHTMLAttributes<HTMLSelectElement> {
  icon?: React.ComponentType<LucideProps>
  error?: boolean
  children: React.ReactNode
}

export function Select({ icon: Icon, error, children, ...rest }: InputProps) {
  return (
    <div
      className={clsx(`${rest.className}  relative`, {
        'mt-2': !!rest.className,
      })}
    >
      {Icon && <Icon className="absolute left-4 top-5 w-5 h-5 text-gray-500" />}
      <select
        {...rest}
        className={clsx(
          'w-full h-14 px-4 py-3  rounded bg-gray-200 border-2 focus:ring-2 focus:border-brand-300 focus:ring-brand-200 outline-none',
          { 'pl-12': Icon },
          { 'border-red-500 focus:border-red-300 focus:ring-red-200': error }
        )}
      >
        {children}
      </select>
      {error && (
        <div className="absolute right-4 top-4">
          <CircleAlert className="w-5 h-5 text-red-500" />
        </div>
      )}
    </div>
  )
}
