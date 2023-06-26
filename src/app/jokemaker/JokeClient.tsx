'use client';

import { useState } from "react";
import { buttonVariants } from "@/components/ui/Button";
import axios from "axios";
import { Paragraph } from "@/components/ui";
import { JokeBody } from "@/components";


const JokeClient = () => {
    
    const [prompt, setPrompt] = useState('');
    const [response, setResponse] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { data } = await axios.post('/api/generate', { prompt });
        setResponse(data.msg);
        setPrompt('');
    }


    return (
        <div className='flex flex-col w-auto'>
            <div className=' mt-32 flex  items-center justify-center  rounded-lg'>
                <form onSubmit={e=>handleSubmit(e)} className='p-4 rounded-lg border border-slate-700'>
                    <div className='py-2 px-4 flex flex-col'>
                        <label htmlFor='text' className='text-slate-800 dark:text-white font-seimbold my-2'>Enter a Topic</label>
                        <input 
                            name='text' 
                            type='text' 
                            value={ prompt }
                            onChange={ e => setPrompt(e.target.value) } 
                            placeholder="For example :  'in java..' " 
                            className='text-white rounded-md p-2 bg-transparent mb-3 border border-gray-500'
                        />
                        <input type='submit' value='Generate' className={buttonVariants({variant:'subtle'})}/>
                    </div>
                </form>
            </div>
            <JokeBody response={response}/>
        </div>
     )
 }
 
 export default JokeClient;