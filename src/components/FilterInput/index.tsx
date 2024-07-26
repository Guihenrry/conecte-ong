import React, { InputHTMLAttributes } from 'react'
import clsx from 'clsx'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
}

export function FilterInput({ label, ...rest }: InputProps) {
  return (
    <div
      className={clsx(`${rest.className}  relative`, {
        'mt-2': !!rest.className,
      })}
    >
      <label
        className="absolute text-xs top-3 left-3 font-medium pointer-events-none"
        style={{ lineHeight: '1' }}
      >
        {label}
      </label>
      <input
        {...rest}
        className={clsx(
          'w-full h-14 pt-7 pb-3 px-3 rounded-lg text-xs text-gray-700 bg-gray-200 border-2 focus:ring-2 focus:border-brand-300 focus:ring-brand-200 outline-none'
        )}
        style={{ lineHeight: '1' }}
      />
    </div>
  )
}
