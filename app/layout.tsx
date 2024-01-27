import LayoutHeader from '@/components/layout/LayoutHeader'
import SideBar from '@/components/layout/Sidebar'
import { ThemeProvider } from '@/components/theme-provider'
import { cn } from '@/lib/utils'
import type { Metadata } from 'next'
import './globals.css'

// const inter = Inter({ subsets: ['latin'] })
// const manrope = Manrope({ subsets: ['latin'] })
// const jakarta_plus = Plus_Jakarta_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dashboard Analytics',
  description: 'Dashboard Analytics',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={cn(
          // inter.className,
          // manrope.className,
          // jakarta_plus.className,
          'flex flex-row'
        )}
      >
        <ThemeProvider attribute='class' defaultTheme='light'>
          <div className='hidden md:block'>
            <SideBar />
          </div>
          <main className='flex-1 h-screen'>
            <LayoutHeader />
            {/* <MobileLayoutHeader /> */}
            <section className='p-[1.25rem]'>{children}</section>
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
