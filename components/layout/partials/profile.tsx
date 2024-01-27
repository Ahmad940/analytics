'use client'

import ArrowDownIcon from '@/components/icons/header/arrow_down.svg'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useState } from 'react'

const ProfileDropDown = () => {
  const [date, setDate] = useState(new Date('2023-11-15'))
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className='flex justify-center items-center'>
          <button className='hidden md:flex justify-center items-center gap-[0.75rem] rounded-[1.75rem] border border-[#DADDDD] dark:border-slate-500 py-[0.375rem] px-[0.5rem]'>
            {/* Profile image */}
            <Avatar className='h-[2.375rem] w-[2.375rem]'>
              <AvatarImage
                src='/assets/images/avatars/justin.png'
                alt='profile'
              />
              <AvatarFallback className='h-[2.375rem] w-[2.375rem]'>
                JB
              </AvatarFallback>
            </Avatar>

            {/* profile name section */}
            <div className='flex flex-col items-end gap-[0.25rem] font-inter'>
              <p className='text-[#26282C] dark:text-slate-400 text-[1rem] text-right leading-none'>
                Justin Bergson
              </p>
              <p className='text-[#787486] text-[0.875rem] text-right leading-none'>
                Justin@gmail.com
              </p>
            </div>

            {/* Drop down icon */}
            <ArrowDownIcon className='dark:fill-slate-300' />
          </button>
          <button>
            <Avatar className='md:hidden h-[2.375rem] w-[2.375rem]'>
              <AvatarImage
                src='/assets/images/avatars/justin.png'
                alt='profile'
              />
              <AvatarFallback className='h-[2.375rem] w-[2.375rem]'>
                JB
              </AvatarFallback>
            </Avatar>
          </button>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56'>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            Profile
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Settings
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Email</DropdownMenuItem>
                <DropdownMenuItem>Message</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>More...</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Support</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          Log out
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default ProfileDropDown
