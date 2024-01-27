'use client'

import { Card, CardContent, CardHeader } from '@/components/ui/card'
import Link from '@/components/ui/link'
import { topPlatformsItems } from '@/lib/constants'
import { motion } from 'framer-motion'

const TopPlatform = () => {
  return (
    <Card className='flex flex-col gap-[1.25rem] py-[1rem] px-[1.25rem]'>
      <CardHeader className='flex flex-row justify-between items-center p-0'>
        <p className='text-[#26282C] dark:text-slate-200 text-[1.125rem] font-semibold font-jakarta-sans '>
          Top platforms
        </p>

        <Link href={''}>See All</Link>
      </CardHeader>

      <CardContent className='flex flex-col gap-[1.25rem] p-0'>
        {topPlatformsItems?.map((item) => (
          <div key={item?.name} className=''>
            {/* Name */}
            <p className='flex text-[1.125rem] font-jakarta-sans text-[#22242C] dark:text-neutral-300/70 font-semibold'>
              {item?.name}
            </p>
            {/* Progress */}
            <div className='mt-[1.06rem] h-[0.75rem] bg-[#F5F5F5] dark:bg-gray-700'>
              <motion.div
                initial={{ width: '0%' }}
                animate={{ width: `${item?.progress}%` }}
                transition={{ duration: 2, delay: 1 }}
                className={`h-full rounded-r-full`}
                style={{
                  background: item?.color,
                }}
              ></motion.div>
            </div>
            {/* <Progress
              className='h-[0.75rem] bg-[#F5F5F5]'
              value={item?.progress}
              indicatorColor={item?.color}
            /> */}

            {/* performance */}
            <div className='flex justify-between items-center mt-[1rem]'>
              <p className='text-[1.125rem] font-jakarta-sans text-[#525252]'>
                $1,800,000
              </p>
              <p className='text-[1.125rem] font-jakarta-sans text-[#525252]'>
                +10%
              </p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

export default TopPlatform
