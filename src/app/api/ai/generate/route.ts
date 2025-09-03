import { NextResponse } from "next/server";

export async function POST(req:Request){

    try{
        const { propmt } = await req.json();
        const response = await fetch("https://api.openai.com/v1/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
            },
            body:JSON.stringify({
                model: "gpt-4o-mini",
                messages:[{role:"user", content: 'Write a blog post about: ${prompt}'}],
            }),
    });
        const data = await response.json();
        return NextResponse.json({content:data.choices[0].message.content});
    }catch(error){
        console.error(error);
        return NextResponse.json({message:"AI error"},{status:500});
    }
}