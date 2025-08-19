"use client";

import { motion } from "framer-motion";

interface Post {
  id: string;
  title: string;
  summary: string;
  slug: string;
  coverImage?: string;
}

const dummyPosts: Post[] = [
  {
    id: "1",
    title: "How AI is Changing Blogging Forever",
    summary: "Discover how AI-powered tools can help you write better and faster.",
    slug: "ai-changing-blogging",
    coverImage: "/images/post1.png",
  },
  {
    id: "2",
    title: "5 Tips for Writing Viral Blog Posts",
    summary: "Learn the secrets behind creating blog content that spreads like wildfire.",
    slug: "viral-blog-tips",
    coverImage: "/images/post2.jpg",
  },
  {
    id: "3",
    title: "AI-Powered SEO: The Future of Blog Optimization",
    summary: "How AI can suggest the perfect keywords and structure for your posts.",
    slug: "ai-seo-future",
    coverImage: "/images/post3.png",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
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
        <motion.button
          className="mt-8 px-8 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started
        </motion.button>
      </section>

      {/* Featured Posts */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-10 text-center">
          Featured Posts
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {dummyPosts.map((post, index) => (
            <motion.div
              key={post.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
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
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
