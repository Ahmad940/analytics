import { Card, CardContent, CardHeader } from '@/components/ui/card'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { motion } from 'framer-motion'

const SalesTrend = () => {
  const monthsClasses =
    'relative flex-1 mt-[-1.00px] font-jakarta-sans font-semibold text-[0.75rem] text-neutral-600 dark:text-neutral-200 text-center'
  const chartNumbersClasses =
    'relative w-fit mt-[-1.00px] font-jakarta-sans font-semibold text-[0.75rem] text-neutral-600 dark:text-neutral-200'
  return (
    <Card className='pt-[1.34rem] px-[1.25rem]'>
      <CardHeader className='flex flex-row justify-between items-center p-0'>
        <p className='text-[#26282C] dark:text-slate-200 text-[1rem] md:text-[1.125rem] font-semibold font-jakarta-sans '>
          Last Orders
        </p>

        <div className='inline-flex items-center gap-[0.625rem]'>
          <p className=''>Short by : </p>
          <Select defaultValue='daily'>
            <SelectTrigger className='w-[180px]'>
              <SelectValue placeholder='Duration' />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Duration</SelectLabel>
                <SelectItem value='daily'>Daily</SelectItem>
                <SelectItem value='weekly'>Weekly</SelectItem>
                <SelectItem value='monthly'>Monthly</SelectItem>
                <SelectItem value='yearly'>Yearly</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>

      <CardContent className='p-0 w-full h-[19rem] mt-[1.34rem] overflow-x-auto'>
        <div className='relative'>
          <div className='absolute w-[696px] h-[255px] left-[70px] bg-[url(/line.svg)] dark:bg-[url(/line_dark.svg)]'>
            <div className='flex w-full items-end justify-between absolute top-[39px] left-0'>
              <motion.div
                initial={{ height: '0px' }}
                animate={{ height: `68px` }}
                transition={{ duration: 2, delay: 1 }}
                className='bg-[#34caa51a] relative w-[1.875rem] rounded-t-[1.25rem]'
              />
              <motion.div
                initial={{ height: '0px' }}
                animate={{ height: `120px` }}
                transition={{ duration: 2, delay: 1 }}
                className='bg-[#34caa51a] relative w-[1.875rem] rounded-t-[1.25rem]'
              />
              <motion.div
                initial={{ height: '0px' }}
                animate={{ height: `40px` }}
                transition={{ duration: 2, delay: 1 }}
                className='bg-[#34caa51a] relative w-[1.875rem] rounded-t-[1.25rem]'
              />
              <motion.div
                initial={{ height: '0px' }}
                animate={{ height: `161px` }}
                transition={{ duration: 2, delay: 1 }}
                className='bg-[#34caa51a] relative w-[1.875rem] rounded-t-[1.25rem]'
              />
              <motion.div
                initial={{ height: '0px' }}
                animate={{ height: `81px` }}
                transition={{ duration: 2, delay: 1 }}
                className='bg-[#34caa51a] relative w-[1.875rem] rounded-t-[1.25rem]'
              />
              <motion.div
                initial={{ height: '0px' }}
                animate={{ height: `216px` }}
                transition={{ duration: 1, delay: 0 }}
                className='[background:linear-gradient(180deg,rgb(52,202,165)_0%,rgba(52,202,165,0)_100%)] relative w-[1.875rem] rounded-t-[1.25rem]'
              />
              <motion.div
                initial={{ height: '0px' }}
                animate={{ height: `161px` }}
                transition={{ duration: 2, delay: 1 }}
                className='h-[81px] bg-[#34caa51a] relative w-[1.875rem] rounded-t-[1.25rem]'
              />
              <motion.div
                initial={{ height: '0px' }}
                animate={{ height: `131px` }}
                transition={{ duration: 2, delay: 1 }}
                className='bg-[#34caa51a] relative w-[1.875rem] rounded-t-[1.25rem]'
              />
              <motion.div
                initial={{ height: '0px' }}
                animate={{ height: `182px` }}
                transition={{ duration: 2, delay: 1 }}
                className='bg-[#34caa51a] relative w-[1.875rem] rounded-t-[1.25rem]'
              />
              <motion.div
                initial={{ height: '0px' }}
                animate={{ height: `51px` }}
                transition={{ duration: 2, delay: 1 }}
                className='bg-[#34caa51a] relative w-[1.875rem] rounded-t-[1.25rem]'
              />
              <motion.div
                initial={{ height: '0px' }}
                animate={{ height: `171px` }}
                transition={{ duration: 2, delay: 1 }}
                className='bg-[#34caa51a] relative w-[1.875rem] rounded-t-[1.25rem]'
              />
              <motion.div
                initial={{ height: '0px' }}
                animate={{ height: `151px` }}
                transition={{ duration: 2, delay: 1 }}
                className='bg-[#34caa51a] relative w-[1.875rem] rounded-t-[1.25rem]'
              />
            </div>
            <div className='absolute w-[82px] h-[32px] top-[4px] left-[278px]'>
              <div className='relative w-[80px] h-[32px] bg-[url(/currency_indicator.svg)] dark:bg-[url(/currency_indicator_dark.svg)] bg-contain'>
                <div className='absolute top-[5px] left-[15px] font-inter font-medium text-white dark:text-gray-500 text-[12px] tracking-[0] leading-[normal]'>
                  $45.000
                </div>
              </div>
            </div>
          </div>
          <div className='flex w-[696px] items-start gap-[30px] absolute -bottom-[18rem] left-[70px] opacity-[0.56]'>
            <div className={monthsClasses}>Jan</div>
            <div className={monthsClasses}>Feb</div>
            <div className={monthsClasses}>Mar</div>
            <div className={monthsClasses}>Apr</div>
            <div className={monthsClasses}>Mei</div>
            <div className={monthsClasses}>Jun</div>
            <div className={monthsClasses}>Jul</div>
            <div className={monthsClasses}>Aug</div>
            <div className={monthsClasses}>Sep</div>
            <div className={monthsClasses}>Okt</div>
            <div className={monthsClasses}>Nov</div>
            <div className={monthsClasses}>Des</div>
          </div>
          <div className='inline-flex flex-col h-[255px] items-start justify-between absolute opacity-[0.56]'>
            <div className={chartNumbersClasses}>50.000</div>
            <div className={chartNumbersClasses}>40.000</div>
            <div className={chartNumbersClasses}>30.000</div>
            <div className={chartNumbersClasses}>20.000</div>
            <div className={chartNumbersClasses}>10.000</div>
            <div className={chartNumbersClasses}>5.000</div>
            <div className={chartNumbersClasses}>0</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default SalesTrend
