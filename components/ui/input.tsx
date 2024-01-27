import * as React from 'react'

import { cn } from '@/lib/utils'
import SearchIcon from '../icons/header/search_icon.svg'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <div className='flex gap-[0.5rem] items-center rounded-[1.25rem] h-[3rem] overflow-hidden bg-white dark:bg-transparent border border-[#DADDDD] dark:border-white/35 group focus-within:border-gray-500 focus-within:dark:border-white/45 pl-[1rem]'>
        {type === 'search' && <SearchIcon />}
        <input
          type={type}
          // border border-input
          className={cn(
            'flex h-10 w-full rounded-md bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium font-inter text-[1rem] placeholder:font-inter text-gray-600 dark:text-white/50 leading-[1.5rem] placeholder:text-[#A3A3A3] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    )
  }
)
Input.displayName = 'Input'

export { Input }
