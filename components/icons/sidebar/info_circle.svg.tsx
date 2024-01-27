import { SVGProps } from 'react'

const InfoCircleIcon = (props?: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      {...props}
    >
      <path
        d='M12 8V13'
        stroke='#B2ABAB'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M4 6C2.75 7.67 2 9.75 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C10.57 2 9.2 2.3 7.97 2.85'
        stroke='#B2ABAB'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M11.9946 16H12.0036'
        stroke='#B2ABAB'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export default InfoCircleIcon
