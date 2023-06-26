'use client';

import { FC } from 'react'
import { Paragraph } from './ui';


interface Props{
    response: string;
}

const JokeBody:FC<Props> = ({ response }) => {
     return (
        <div className='mt-10'>
            <Paragraph className='text-slate-800 dark:text-slate-200 font-black my-2'>Generated</Paragraph>
            <Paragraph className='text-slate-600 dark:text-gray-500 font-seimbold my-2'>{response}</Paragraph>
        </div>
    )
}

export default JokeBody;