'use client'

import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer'
import { MenuIcon } from 'lucide-react'
import SideBar from '../Sidebar'

const MobileDrawer = () => {
  return (
    <Drawer direction='right'>
      <DrawerTrigger asChild>
        <button className='md:hidden flex flex-col items-center justify-center gap-[0.38rem] w-[3rem] h-[2rem] dark:fill-white'>
          <MenuIcon />
        </button>
      </DrawerTrigger>
      <DrawerContent className='h-screen'>
        <SideBar />
      </DrawerContent>
    </Drawer>
  )
}

export default MobileDrawer
