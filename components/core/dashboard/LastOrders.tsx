'use client'

import ViewIcon from '@/components/icons/home/view.svg'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import Link from '@/components/ui/link'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { lastOrdersList } from '@/lib/constants'
import { cn } from '@/lib/utils'

const LastOrders = () => {
  const tableHeaderClass =
    'text-[#9CA4AB] dark:text-white/80 text-[1rem] font-jakarta-sans font-medium'
  return (
    <div className='pt-[1.13rem] px-[1.25rem] pb-[1.94rem]'>
      <div className='flex flex-row justify-between items-center p-0'>
        <p className='text-[#26282C] dark:text-slate-200 text-[1rem] md:text-[1.125rem] font-semibold font-jakarta-sans '>
          Last Orders
        </p>

        <Link href={'#!'}>See All</Link>
      </div>

      <div className='flex flex-col gap-[1.25rem] p-0 mt-[0.88rem]'>
        <div className='overflow-x-auto'>
          <Table className='relative'>
            <TableHeader>
              <TableRow className=' w-full'>
                <TableHead className={tableHeaderClass}>Name</TableHead>
                <TableHead className={tableHeaderClass}>Date</TableHead>
                <TableHead className={tableHeaderClass}>Amount</TableHead>
                <TableHead className={tableHeaderClass}>Amount</TableHead>
                <TableHead className={tableHeaderClass}>Status</TableHead>
                <TableHead className={cn(tableHeaderClass, 'text-right')}>
                  Invoice
                </TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {lastOrdersList?.map((invoice) => (
                <TableRow key={invoice.fullName}>
                  <TableCell>
                    <Avatar className='h-[2rem] w-[2rem]'>
                      <AvatarImage src={invoice?.profile_img} alt='profile' />
                      <AvatarFallback className='h-[2rem] w-[2rem]'>
                        {`${invoice.fullName
                          .split(' ')[0]
                          .charAt(0)}${invoice.fullName
                          .split(' ')[1]
                          .charAt(0)}`}
                      </AvatarFallback>
                    </Avatar>
                  </TableCell>
                  <TableCell className='font-jakarta-sans text-[1rem] text-[#3A3F51] dark:text-slate-300 font-medium '>
                    {invoice.fullName}
                  </TableCell>
                  <TableCell className='font-jakarta-sans text-[1rem] text-gray-500 dark:text-slate-300 '>
                    {invoice.date}
                  </TableCell>
                  <TableCell className='font-jakarta-sans text-[1rem] text-[#0D062D] dark:text-white/70 font-medium'>
                    {invoice.amount}
                  </TableCell>
                  <TableCell
                    className={cn(
                      'font-jakarta-sans text-[1rem]',
                      invoice?.status === 'Paid'
                        ? 'text-[#34CAA5]'
                        : 'text-alert-error'
                    )}
                  >
                    {invoice.status}
                  </TableCell>
                  <TableCell className='float-right'>
                    <button className='flex items-center gap-[0.375rem]'>
                      <ViewIcon className='dark:fill-white' />{' '}
                      <span className='text-[#0D062D] dark:text-white/40 font-jakarta-sans text-[0.875rem]'>
                        View
                      </span>
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}

export default LastOrders
