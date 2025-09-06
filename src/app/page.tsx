"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "./components/header";
import { useEffect, useState } from "react";

interface Post {
  _id: string;
  title: string;
  summary: string;
  slug?: string; // you can generate slug later
  coverImage?: string;
}

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch("/api/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-28 px-6 text-center">
        <motion.h1
          className="text-5xl font-extrabold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Write Smarter, Faster, with AI
        </motion.h1>
        <motion.p
          className="text-lg max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Harness the power of AI to generate summaries, titles, and SEO
          suggestions for your blog posts. Say goodbye to writer’s block!
        </motion.p>

        <Link href="/createArticle">
          <motion.button
            className="mt-8 px-8 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
        </Link>
      </section>

      {/* Featured Posts */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-10 text-center">
          Featured Posts
        </h2>

        {posts.length === 0 ? (
          <p className="text-center text-gray-500">No posts available yet.</p>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.div
                key={post._id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <Link href={`/blogs/${post.slug || post._id}`}>
                  {post.coverImage && (
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                  )}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 hover:text-indigo-600 transition mb-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{post.summary}</p>
                    <span className="text-indigo-600 font-semibold hover:underline">
                      Read More →
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}

        <div className="text-center mt-12">
          <Link href="/blog">
            <motion.button
              className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Blogs
            </motion.button>
          </Link>
        </div>
      </section>
    </div>
  );
}
