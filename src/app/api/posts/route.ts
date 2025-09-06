// app/api/posts/route.ts
import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Post from "@/models/post";

export async function POST(req: Request) {
  try {
    await dbConnect();
    const { title, summary, content, image } = await req.json();

    if (!title || !summary || !content) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    const newPost = await Post.create({
      title,
      summary,
      content,
      image,
      status: "Published",
    });

    return NextResponse.json(newPost, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Server error" },
      { status: 500 }
    );
  }
}
