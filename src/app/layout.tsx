import { Inter } from 'next/font/google'
import { cn } from '@/lib/utils'
import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={cn(
      'bg-white dark:bg-black text-slate-900 antialised ', inter.className)}>
      <body className={'min-h-screen bg-slate-50 dark:bg-slate-900 antialiased'}>{children}</body>
    </html>
  )
}
