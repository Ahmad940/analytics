import NextLink, { LinkProps } from 'next/link'
import { ReactNode } from 'react'

interface componentInterface extends LinkProps {
  children: ReactNode
}

const Link = (props: componentInterface) => {
  return (
    <NextLink
      href={props.href}
      className='text-[#34CAA5] dark:text-green-400 hover:underline text-[1.125rem] font-jakarta-sans font-medium'
    >
      {props.children}
    </NextLink>
  )
}

export default Link
