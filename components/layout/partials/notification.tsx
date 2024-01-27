'use client'

import NotificationIcon from '@/components/icons/header/notification.svg'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const NotificationDropDown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className='flex justify-center items-center'>
          <button className='flex justify-center items-center w-[2.5rem] h-[2.5rem] p-[0.6875rem] border-[0.769px] border-[#DADDDD] rounded-[1.6875rem] hover:bg-grayscale-200 dark:hover:bg-main-primary/20'>
            <NotificationIcon className='dark:fill-slate-300' />
          </button>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56'>
        <DropdownMenuLabel>Notifications</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>No notification at the moment</DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default NotificationDropDown
