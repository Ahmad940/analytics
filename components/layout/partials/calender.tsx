'use client'

import CalendarIcon from '@/components/icons/header/calendar.svg'
import { Calendar } from '@/components/ui/calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { cn } from '@/lib/utils'
import { format } from 'date-fns/format'
import { useState } from 'react'

const DateSelector = () => {
  const [date, setDate] = useState(new Date('2023-11-15'))
  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className='flex justify-center items-center'>
          <button
            className={cn(
              'hidden md:flex flex-row gap-[0.5rem] items-center w-[240px text-[0.875rem] font-inter font-medium rounded-[1.25rem] p-1 leading-[1.375rem] dark:text-slate-300 hover:bg-grayscale-200/55'
            )}
          >
            <CalendarIcon className='dark:fill-slate-300' />
            {format(date, 'PPP')}
          </button>
          <button className='md:hidden p-[0.6875rem] rounded-full hover:bg-grayscale-200 '>
            <CalendarIcon className='dark:fill-slate-300' />
          </button>
        </div>
      </PopoverTrigger>
      <PopoverContent className='w-auto p-0' align='start'>
        <Calendar
          mode='single'
          selected={date}
          onSelect={(val) => {
            if (val) setDate(val)
          }}
          disabled={(date) =>
            date > new Date() || date < new Date('1900-01-01')
          }
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}

export default DateSelector
