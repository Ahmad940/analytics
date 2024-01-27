'use client'

import TrendUpIcon from '@/components/icons/home/trend_up.svg'
import ViewIcon from '@/components/icons/home/view.svg'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { DollarSign, DownloadIcon, Locate, MinusCircle } from 'lucide-react'

const ViewOrder = ({ item }: { item: any }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className='flex items-center gap-[0.375rem]'>
          <ViewIcon className='dark:fill-white' />{' '}
          <span className='text-[#0D062D] dark:text-white/40 font-jakarta-sans text-[0.875rem]'>
            View
          </span>
        </button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Invoice</DialogTitle>
          <DialogDescription>user@gmail.com</DialogDescription>
        </DialogHeader>
        <div className='grid gap-4 py-4'>
          <Alert>
            <Locate className='h-4 w-4' />
            <AlertTitle>John Doe</AlertTitle>
            <AlertDescription className=''>
              Somewhere on earth rn
            </AlertDescription>
          </Alert>
          <Alert>
            <DollarSign className='h-4 w-4' />
            <AlertTitle>Amount</AlertTitle>
            <AlertDescription>
              <span className='text-green-600'>$350.00</span>
            </AlertDescription>
          </Alert>
          <Alert>
            <MinusCircle className='h-4 w-4' />
            <AlertTitle>VAX</AlertTitle>
            <AlertDescription className='text-red-600'>$5.00</AlertDescription>
          </Alert>
          <Alert>
            <TrendUpIcon />
            <AlertTitle>Invoice Type</AlertTitle>
            <AlertDescription>
              <span className='text-green-600'>Paid</span>
            </AlertDescription>
          </Alert>
        </div>
        <DialogFooter>
          <Button variant={'outline'}>
            <DownloadIcon /> Download
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default ViewOrder
