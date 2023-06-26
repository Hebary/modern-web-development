import Link from 'next/link'
import{ LargeHeading, Paragraph } from '@/components/ui'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Joke maker - Home page',
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
            Open AI <br /> Joke maker app.
          </LargeHeading>

          <Paragraph className='max-w-xl lg:text-left'>
            Builded with Open AI & Next.js 13 this app generates jokes {' '}<br/>
            <Link
              href='/jokemaker'
              className='underline underline-offset-2 text-black dark:text-light-gold'>
                Just give it a try!
            </Link>
            .
          </Paragraph>
        </div>
      </div>
    </div>
  )
}