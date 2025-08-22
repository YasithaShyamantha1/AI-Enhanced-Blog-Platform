"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface Post {
  id: string;
  title: string;
  summary: string;
  image: string;
}

const dummyPosts: Post[] = [
  {
    id: "1",
    title: "How AI is Changing Blogging Forever",
    summary:
      "Discover how AI-powered tools can help you write better and faster.",
    image: "/images/post1.jpg",
  },
  {
    id: "2",
    title: "Next.js 15: What You Need to Know",
    summary:
      "A breakdown of the latest features in Next.js and why it matters for developers.",
    image: "/images/post2.jpg",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <h1 className="text-3xl font-extrabold mb-8 text-center text-gray-900">
        Our Blog
      </h1>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {dummyPosts.map((post) => (
          <motion.div
            key={post.id}
            className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition"
            whileHover={{ scale: 1.02 }}
          >
            <Image
              src={post.image}
              alt={post.title}
              width={600}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h2 className="text-xl font-bold mb-3 text-gray-900">
                {post.title}
              </h2>
              <p className="text-gray-800 mb-4 leading-relaxed">
                {post.summary}
              </p>
              <Link
                href={`/blog/${post.id}`}
                className="text-blue-700 font-semibold hover:underline"
              >
                Read more →
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
