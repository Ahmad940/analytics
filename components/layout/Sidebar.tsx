'use client'

import { controlsSideMenuItems, sideNavMenuItems } from '@/lib/constants'

import { motion } from 'framer-motion'

import { cn } from '@/lib/utils'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import LogoIcon from '../icons/logo.svg'
import MoonIcon from '../icons/sidebar/moon.svg'
import SelectionIcon from '../icons/sidebar/selection.svg'
import SunIcon from '../icons/sidebar/sun.svg'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../ui/tooltip'

const SideBar = () => {
  const pathName = usePathname()
  const { setTheme, theme } = useTheme()
  const [activeTheme, setActiveTheme] = useState('')

  useEffect(() => {
    if (!theme) return

    setActiveTheme(theme || 'system')
  }, [theme])

  return (
    <div className=''>
      <motion.div
        initial={{ scale: 0, x: '-100vw', display: 'none' }} // Start off-screen to the left
        animate={{ scale: 1, x: 0, display: 'block' }} // Slide into view from the left
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 20,
          delay: 0.1,
        }}
      >
        <div className='flex flex-col items-center gap-[6rem] w-[5rem] py-[1.25rem] bg-[#F7F8FA] dark:bg-main-secondary/15 border border-[#EBECF2] dark:border-main-secondary/20'>
          {/* Nav items */}
          <div className='flex flex-col items-center w-full '>
            {/* logo */}
            <LogoIcon />
            <div className='flex flex-col flex-1 w-full justify-center items-center gap-[1rem] pt-[1.25rem]'>
              {sideNavMenuItems?.map((item, index) => (
                <div
                  key={item?.label}
                  className='flex flex-col items-center w-full relative'
                >
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Link
                          href={item?.to}
                          className='flex items-center justify-center w-[2.5rem] h-[2.5rem] rounded-[1.25rem] hover:bg-main-primary/10'
                        >
                          <item.icon className='dark:stroke-white' />
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{item?.label}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  {pathName == item?.to && (
                    <SelectionIcon className='absolute right-0 translate-y-1/2 dark:fill-white' />
                  )}
                </div>
              ))}

              {/* Theme mode section */}
              <div className='flex flex-col gap-[0.5rem] justify-center p-[0.5rem] items-center bg-white dark:bg-main-secondary/50 rounded-[6.25rem]'>
                <div className='flex flex-col gap-[1rem]'>
                  {/* Light mode */}
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <button
                          className={cn(
                            'flex flex-col items-center justify-center w-[1.875rem] h-[1.875rem] rounded-[5.875rem]',
                            activeTheme === 'light' && 'bg-[#34CAA5]'
                          )}
                          onClick={() => setTheme('light')}
                        >
                          <SunIcon />
                        </button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Toggle light mode</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>

                  {/* dark mode */}
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <button
                          className={cn(
                            'flex flex-col items-center justify-center w-[1.875rem] h-[1.875rem] rounded-[5.875rem]',
                            activeTheme === 'dark' && 'bg-red-100'
                          )}
                          onClick={() => setTheme('dark')}
                        >
                          <MoonIcon />
                        </button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Toggle dark mode</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </div>
            </div>
          </div>

          {/* Controls section */}
          <div className='flex flex-col items-center justify-center gap-[1rem]'>
            {controlsSideMenuItems?.map((item) => (
              <TooltipProvider key={item?.label}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button className='flex items-center justify-center w-[2.5rem] h-[2.5rem] rounded-[1.25rem] hover:bg-main-primary/10'>
                      <item.icon className='' />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{item?.label}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default SideBar
