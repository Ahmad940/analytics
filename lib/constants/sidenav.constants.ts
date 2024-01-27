import ArrowRightIcon from '@/components/icons/sidebar/arrow_right.svg'
import BoxIcon from '@/components/icons/sidebar/box.svg'
import CategoryIcon from '@/components/icons/sidebar/category.svg'
import DiscountIcon from '@/components/icons/sidebar/discount.svg'
import InfoCircleIcon from '@/components/icons/sidebar/info_circle.svg'
import LogoutIcon from '@/components/icons/sidebar/logout.svg'
import ProfileIcon from '@/components/icons/sidebar/profile.svg'
import SettingsIcon from '@/components/icons/sidebar/settings.svg'
import TrendingUpIcon from '@/components/icons/sidebar/trend.svg'

export const sideNavMenuItems = [
  {
    label: 'Category',
    icon: CategoryIcon,
    to: '/',
  },
  {
    label: 'Trending',
    icon: TrendingUpIcon,
    to: '/trending',
  },
  {
    label: 'Profile',
    icon: ProfileIcon,
    to: '/profile',
  },
  {
    label: 'Packages',
    icon: BoxIcon,
    to: '/packages',
  },
  {
    label: 'Discounts',
    icon: DiscountIcon,
    to: '/discounts',
  },
  {
    label: 'InfoCircle',
    icon: InfoCircleIcon,
    to: '/info',
  },
]

export const controlsSideMenuItems = [
  {
    label: 'Expand',
    icon: ArrowRightIcon,
  },
  {
    label: 'Settings',
    icon: SettingsIcon,
  },
  {
    label: 'Log out',
    icon: LogoutIcon,
  },
]
