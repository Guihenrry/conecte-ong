import clsx from 'clsx'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={clsx(
        props.className,
        'px-4 h-12 bg-brand-500 hover:bg-brand-600 active:bg-brand-500 text-white rounded-lg font-bold'
      )}
    >
      {children}
    </button>
  )
}
