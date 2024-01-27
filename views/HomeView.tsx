'use client'

import LastOrders from '@/components/core/dashboard/LastOrders'
import SalesTrend from '@/components/core/dashboard/SalesTrend'
import SideStats from '@/components/core/dashboard/SideStats'
import TopPlatform from '@/components/core/dashboard/TopPlatform'
import { motion } from 'framer-motion'

const HomeView = () => {
  return (
    <>
      <div className='flex flex-col md:flex-row gap-[1.25rem]'>
        {/* Content */}
        <div className='flex flex-col gap-[1.25rem] flex-1'>
          {/* Sales trend */}
          <motion.div
            initial={{ scale: 0, x: '-100vw' }} // Start off-screen to the left
            animate={{ scale: 1, x: 0 }} // Slide into view from the left
            transition={{
              type: 'spring',
              stiffness: 260,
              damping: 20,
              delay: 0.2,
            }}
          >
            <SalesTrend />
          </motion.div>

          {/* Last orders */}
          <motion.div
            initial={{ scale: 0, x: '-100vw' }} // Start off-screen to the left
            animate={{ scale: 1, x: 0 }} // Slide into view from the left
            transition={{
              type: 'spring',
              stiffness: 260,
              damping: 20,
              delay: 0.3,
            }}
          >
            <LastOrders />
          </motion.div>
        </div>

        {/* Side nav */}
        {/* <div className='hidden lg:flex flex-col w-[20rem] lg:w-[32.125rem] gap-[1.25rem]'> */}
        <div className='hidden md:flex flex-col w-full xl:w-[32.125rem] gap-[1.25rem]'>
          {/* Stats */}
          <motion.div
            initial={{ scale: 0, x: '-100vw' }} // Start off-screen to the left
            animate={{ scale: 1, x: 0 }} // Slide into view from the left
            transition={{
              type: 'spring',
              stiffness: 260,
              damping: 20,
              delay: 0.4,
            }}
          >
            <SideStats />
          </motion.div>

          {/* Top platform */}
          <motion.div
            initial={{ scale: 0, x: '-100vw' }} // Start off-screen to the left
            animate={{ scale: 1, x: 0 }} // Slide into view from the left
            transition={{
              type: 'spring',
              stiffness: 260,
              damping: 20,
              delay: 0.5,
            }}
          >
            <TopPlatform />
          </motion.div>
        </div>

        <div>
          {/* Stats */}
          <motion.div
            initial={{ scale: 0, x: '-100vw' }} // Start off-screen to the left
            animate={{ scale: 1, x: 0 }} // Slide into view from the left
            transition={{
              type: 'spring',
              stiffness: 260,
              damping: 20,
              delay: 0.4,
            }}
          >
            <SideStats />
          </motion.div>

          {/* Top platform */}
          <motion.div
            initial={{ scale: 0, x: '-100vw' }} // Start off-screen to the left
            animate={{ scale: 1, x: 0 }} // Slide into view from the left
            transition={{
              type: 'spring',
              stiffness: 260,
              damping: 20,
              delay: 0.5,
            }}
          >
            <TopPlatform />
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default HomeView
