import Link from 'next/link'
import{ LargeHeading, Paragraph } from '@/components/ui'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Next Template',
  description: 'Personal Template for projects top level ',
}

export default function Home() {
  return (
    <div className='relative h-screen flex items-center justify-center overflow-x-hidden'>
      <div className='container pt-32 max-w-7xl w-full mx-auto h-full'>
        <div className='h-full gap-6 flex flex-col justify-start lg:justify-center items-center lg:items-start'>
          <LargeHeading
            size='lg'
            className='three-d text-black dark:text-light-gold'>
            How we <br /> Code 1.0.
          </LargeHeading>

          <Paragraph className='max-w-xl lg:text-left'>
            Template using Next 13.4.2 has implemented next auth with google and toggleTheme{' '}
            <Link
              href='/signin'
              className='underline underline-offset-2 text-black dark:text-light-gold'>
                Build something new
            </Link>
            .
          </Paragraph>


        </div>
      </div>
    </div>
  )
}