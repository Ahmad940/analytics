'use client'

import { motion } from 'framer-motion'
import { Input } from '../ui/input'
import DateSelector from './partials/calender'
import MobileDrawer from './partials/mobile_drawer'
import NotificationDropDown from './partials/notification'
import ProfileDropDown from './partials/profile'

const LayoutHeader = () => {
  return (
    <motion.header
      className='flex flex-col flex-1 gap-[1.125rem] content-end items-center pt-[1.125rem] bg-[#FAFAFA] dark:bg-main-secondary/10'
      initial={{ scale: 0, x: '-100vw' }} // Start off-screen to the left
      animate={{ scale: 1, x: 0 }} // Slide into view from the left
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 20,
        delay: 0.2,
      }}
    >
      {/* Search section */}
      <div className='flex justify-between items-center self-stretch gap-[1.37rem] px-[1.25rem]'>
        {/* Search section */}
        <div className='flex justify-between items-center flex-1 gap-1'>
          <p className='text-[#26282C] dark:text-slate-200 font-jakarta-sans text-[1.25rem] font-semibold leading-[1.75rem]'>
            Dashboard
          </p>

          <div className='hidden lg:block w-[21.8125rem]'>
            <Input type='search' placeholder='Search...' />
          </div>
        </div>

        {/* Profile section */}
        <div className='flex justify-between items-center gap-[0.5rem] md:gap-[1.25rem]'>
          {/* Calendar */}
          <DateSelector />

          {/* Notification bell */}
          <NotificationDropDown />

          {/* Profile */}
          <ProfileDropDown />

          {/* Mobile drawer */}
          <MobileDrawer />
        </div>
      </div>

      <div className='w-full h-[0.0625rem] bg-[#E5EAEF] dark:bg-main-secondary/40'></div>
    </motion.header>
  )
}

export default LayoutHeader
