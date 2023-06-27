import { forwardRef } from 'react'
import { cn } from '@/lib/utils'
import { cva, VariantProps } from 'class-variance-authority'
import { ImSpinner2 } from 'react-icons/im'

const buttonVariants = cva(
  'active:scale-95 inline-flex tracking-wide items-center justify-center rounded-md text-sm font-medium transition-all focus:outline-none  disabled:opacity-50  disabled:pointer-events-none ring-offset-0',
  {
    variants: {
      variant: {
        default     : 'bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-200 dark:text-slate-900 dark:hover:bg-slate-100',
        destructive : 'text-white hover:bg-red-600 dark:hover:bg-red-600',
        outline     : 'bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-200 dark:text-slate-900 dark:hover:bg-slate-100 border border-slate-200 dark:border-slate-700',
        subtle      : 'bg-slate-200 text-slate-900 hover:bg-slate-200 dark:bg-slate-700 cursor-pointer dark:text-slate-100',
        ghost       : 'bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 dark:text-slate-400 cursor-pointer data-[state=open]:bg-transparent dark:data-[state=open]:bg-transparent',
        link        : 'bg-transparent dark:bg-transparent underline-offset-4 hover:underline text-slate-900 dark:text-slate-100 hover:bg-transparent dark:hover:bg-transparent',
      },
      size: {
        default: 'h-10 py-2 px-4',
        sm: 'h-9 px-2 rounded-md',
        lg: 'h-11 px-8 rounded-md',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ className, children, variant, isLoading, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={isLoading}
        {...props}>
        {isLoading ? <ImSpinner2 className='mr-2 h-4 w-4 animate-spin' /> : null}
        {children}
      </button>
    )
  }
)
Button.displayName = 'Button'

export { buttonVariants }
export default Button