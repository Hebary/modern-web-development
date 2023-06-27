import { NextResponse } from 'next/server';
import { Configuration, OpenAIApi } from 'openai' 

const config = new Configuration({ apiKey: process.env.OPENAI_API_KEY });
if(!config.apiKey) throw new Error('No OpenAI API Key found!');

const openai = new OpenAIApi(config);

export async function POST(req: Request) {
    let msg;
    const body = await req.json();

    if(!body.prompt || body.prompt.trim().length<=0) throw new Error('No prompt provided!');

    try {
        const response = await openai.createCompletion({
            model: 'text-davinci-003',
            prompt: `Dime algo relacionado con${body.prompt}`,
            temperature: 1,
            max_tokens: 60,
        });
        msg = response.data.choices[0].text;
    } catch (error: any) {
        console.log(error);
    }    
    return NextResponse.json({ msg });
}