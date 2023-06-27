'use client';

import { useState } from "react";
import { buttonVariants } from "@/components/ui/Button";
import axios from "axios";
import { TextBody } from "@/components";


const TextClient = () => {
    
    const [prompt, setPrompt] = useState('');
    const [response, setResponse] = useState('');
    const [disabled, setDisabled] = useState(true);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        if(prompt.length === 0 || Number(prompt) || prompt.length > 15 || /\d/.test(prompt) ) {
            return alert('Please enter a valid topic');
        } else {
            setDisabled(false);
        }

        const { data } = await axios.post('/api/generate', { prompt });
        setResponse(data.msg);
        setPrompt('');
    }


    return (
        <div className='flex flex-col'>
            <div className=' mt-32 flex  items-center justify-center  rounded-lg'>
                <form onSubmit={e=>handleSubmit(e)} className='p-4 rounded-lg border border-slate-700'>
                    <div className='py-2 px-4 flex flex-col w-80'>
                        <label htmlFor='text' className='text-slate-800 dark:text-white font-seimbold my-2'>Enter a Topic</label>
                        <input 
                            name='text' 
                            type='text' 
                            value={ prompt }
                            onChange={ e => setPrompt(e.target.value) } 
                            placeholder="For example :  'make me a joke' " 
                            className='dark:text-white text-slate-900 rounded-md p-2 bg-transparent mb-3 border border-gray-500'
                        />
                        <input type='submit' value='Generate' disabled={!prompt} className={buttonVariants({variant:'subtle'})}/>
                    </div>
                </form>
            </div>
            <TextBody response={response}/>
        </div>
     )
 }
 
 export default TextClient;