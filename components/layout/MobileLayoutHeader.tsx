'use client'

import { motion } from 'framer-motion'

const MobileLayoutHeader = () => {
  return (
    <motion.header
      className='flex lg:hidden flex-col flex-1 gap-[1.125rem] content-end items-center pt-[1.125rem] bg-[#FAFAFA]'
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
      <div className='flex justify-between items-center self-stretch gap-[1.37rem] px-[1.25rem]'></div>

      <div className='w-full h-[0.0625rem] bg-[#E5EAEF]'></div>
    </motion.header>
  )
}

export default MobileLayoutHeader
