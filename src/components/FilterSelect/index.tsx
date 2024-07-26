import { SelectHTMLAttributes } from 'react'
import clsx from 'clsx'
import { ArrowDown, ChevronDown } from 'lucide-react'

interface FilterSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string
}

export function FilterSelect({ label, ...rest }: FilterSelectProps) {
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
      <select
        {...rest}
        className={clsx(
          'appearance-none w-full min-w-[150px] h-14 pt-7 pb-3 px-3 rounded-lg text-xs text-gray-700 bg-gray-200 border-2 focus:ring-2 focus:border-brand-300 focus:ring-brand-200 outline-none'
        )}
        style={{ lineHeight: '1' }}
      >
        {rest.children}
      </select>

      <ChevronDown className="absolute right-3 bottom-3 w-4 h-4 text-gray-500" />
    </div>
  )
}
