"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface BlogCardProps {
  id: string;
  title: string;
  summary: string;
  author: string;
  coverImage?: string;
}

const BlogCard = ({ id, title, summary, author, coverImage }: BlogCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white shadow-md rounded-2xl overflow-hidden border border-gray-200"
    >
      {coverImage && <img src={coverImage} alt={title} className="w-full h-48 object-cover" />}
      <div className="p-5">
        <h2 className="text-xl font-bold text-gray-900">{title}</h2>
        <p className="text-gray-700 mt-2 line-clamp-3">{summary}</p>
        <p className="text-sm text-gray-500 mt-3">By {author}</p>
        <Link
          href={`/blog/${id}`}
          className="inline-block mt-4 text-blue-500 font-medium hover:underline"
        >
          Read more →
        </Link>
      </div>
    </motion.div>
  );
};

export default BlogCard;
