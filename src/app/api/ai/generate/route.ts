// app/api/ai/generate/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { title } = await req.json();

    if (!title) {
      return NextResponse.json({ message: "Title is required" }, { status: 400 });
    }

    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini", // lightweight + fast
        messages: [
          { role: "system", content: "You are a professional blog writer." },
          { role: "user", content: `Write a blog post about: ${title}. Make it detailed and engaging.` },
        ],
        max_tokens: 800,
      }),
    });

    const data = await res.json();
    const content = data.choices?.[0]?.message?.content || "No content generated.";

    return NextResponse.json({ content });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "AI error" }, { status: 500 });
  }
}
