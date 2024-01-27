import ThreeDRotateIcon from '@/components/icons/home/3d_rotate.svg'
import BoxTickIcon from '@/components/icons/home/box_tick.svg'
import CoinIcon from '@/components/icons/home/coin.svg'
import { ShoppingCartIcon } from 'lucide-react'

export const sideStatsItems = [
  {
    icon: BoxTickIcon,
    label: 'Total Order',
    count: 350,
    trendType: 'up',
    percentage: '23.5%',
  },
  {
    icon: ThreeDRotateIcon,
    label: 'Total Refund',
    count: 270,
    trendType: 'down',
    percentage: '23.5%',
  },
  {
    icon: ShoppingCartIcon,
    label: 'Average Sales',
    count: 1567,
    trendType: 'down',
    percentage: '23.5%',
  },
  {
    icon: CoinIcon,
    label: 'Total Income',
    count: '$350.000',
    trendType: 'up',
    percentage: '23.5%',
  },
]

export const topPlatformsItems = [
  {
    name: 'Book Bazaar',
    progress: 50,
    color: '#6160DC',
    price: '$2,500,000',
    percentage: '+15%',
  },
  {
    name: 'Artisan Aisle',
    progress: 40,
    color: '#54C5EB',
    price: '$1,800,000',
    percentage: '+10%',
  },
  {
    name: 'Toy Troop',
    progress: 30,
    color: '#FFB74A',
    price: '$1,200,000',
    percentage: '+8%',
  },
  {
    name: 'XStore',
    progress: 25,
    color: '#FF4A55',
    price: '$600,000',
    percentage: '+5%',
  },
]
