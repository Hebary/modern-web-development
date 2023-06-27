import { Figtree } from 'next/font/google'
import { cn } from '@/lib/utils'
import { Providers } from '@/components';
import '@/styles/globals.css'
import { Navbar } from '@/components';

const figtree = Figtree({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className={cn('bg-white dark:bg-black text-slate-900 antialised', figtree.className)}>
      <body className={'min-h-screen bg-slate-50 dark:bg-slate-900 antialiased'}>
          <Providers>
            {children}
          
            {/* @ts-expect-error ->Server compónent reason*/}
            <Navbar/>

            
          </Providers>
          {/* Allow for more height on mobile devices */}
          <div className='h-40 md:hidden' />
        </body>
    </html>
  )
}
