import { NextResponse } from 'next/server';
import { Configuration, OpenAIApi } from 'openai' 

const config = new Configuration({ apiKey: process.env.OPENAI_API_KEY });
if(!config.apiKey) throw new Error('No OpenAI API Key found!');

const openai = new OpenAIApi(config);

export async function POST(req: Request) {
    let msg;
    try {
        const response = await openai.createCompletion({
            model: 'text-davinci-003',
            prompt: 'Dame un chiste',
            temperature: 0.7,
            max_tokens: 64,
        });
        msg = response.data.choices[0].text;
    } catch (error: any) {
        console.log(error);
    }    
    return NextResponse.json({ msg });
}