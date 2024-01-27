import TrendChartDownSvg from '@/components/icons/home/trend_chart_down.svg'
import TrendChartUpSvg from '@/components/icons/home/trend_chart_up.svg'
import TrendDownIcon from '@/components/icons/home/trend_down.svg'
import TrendUpIcon from '@/components/icons/home/trend_up.svg'
import { Card, CardContent } from '@/components/ui/card'
import { sideStatsItems } from '@/lib/constants'
import { formatNumberWithCommas } from '@/lib/utils'

const SideStats = () => {
  return (
    // <div className=' flex flex-col xl:flex-row flex-wrap flex-1 gap-[1rem]'>
    <div className='grid grid-cols-1 xl:grid-cols-2 gap-[1rem]'>
      {sideStatsItems?.map((item) => (
        <Card className='p-[1rem]' key={item?.label}>
          <CardContent className='p-0 flex flex-col items-start gap-[0.625rem]'>
            {/* Trend section */}
            <div className='flex flex-1 w-full justify-between items-center'>
              <item.icon />
              {item?.trendType === 'up' ? (
                <TrendChartUpSvg />
              ) : (
                <TrendChartDownSvg />
              )}
            </div>

            {/* Text section */}
            <div className='flex flex-col gap-[0.3125rem]'>
              <p className='text-[#898989] text-[1.125rem] font-medium'>
                {item?.label}
              </p>
              <p className='text-[1.5rem] text-[#3A3F51] dark:text-neutral-300 font-jakarta-sans font-semibold'>
                {typeof item?.count === 'number'
                  ? formatNumberWithCommas(item?.count)
                  : item?.count}
              </p>
            </div>

            {/* performance section */}
            <div className='flex items-center justify-between w-full flex-1 gap-[0.625rem]'>
              <div
                className='flex gap-[0.25rem] items-center justify-center rounded-[62.5rem] py-[0.25rem] px-[0.5rem]'
                style={{ background: 'rgba(52, 202, 165, 0.12)' }}
              >
                {item?.trendType === 'up' ? <TrendUpIcon /> : <TrendDownIcon />}
                <span className='text-[0.75rem] font-jakarta-sans font-medium leading-[1rem] text-[#34CAA5]'>
                  {item?.percentage}
                </span>
              </div>
              <p className='text-[#606060] text-[0.875rem] font-inter'>
                vs. previous month
              </p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default SideStats
