import Link from 'next/link'
import{ LargeHeading, Paragraph } from '@/components/ui'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Text maker - Home page',
  description: 'Welcome to the home page ',
}

export default function Home() {
  return (
    <div className='relative h-screen flex items-center justify-center overflow-x-hidden'>
      <div className='container pt-32 max-w-7xl w-full mx-auto h-full'>
        <div className='h-full gap-6 flex flex-col justify-start lg:justify-center items-center lg:items-start'>
          <LargeHeading
            size='lg'
            className='three-d text-black dark:text-light-gold'>
            Open AI <br /> Text maker app.
          </LargeHeading>

          <Paragraph className='max-w-xl lg:text-left'>
            Builded with Open AI & Next.js 13 this app generates text, jokes, tips and more. {' '}<br/>
            <Link
              href='/textmaker'
              className='underline underline-offset-2 text-black dark:text-light-gold'>
                Just try it!
            </Link>
            .
          </Paragraph>
        </div>
      </div>
    </div>
  )
}