"use client";

import { useState } from "react";
import { motion } from "framer-motion";
//import { Button } from "@/components/ui/button";

const BlogEditor = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handlePublish = () => {
    alert(`Publishing: ${title}`);
    // later: call API route to save post
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-6 border border-gray-200"
    >
      <h2 className="text-2xl font-bold mb-4 text-gray-900">Create a Blog</h2>

      <input
        type="text"
        placeholder="Enter blog title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border border-gray-300 p-3 rounded-xl mb-4"
      />

      <textarea
        placeholder="Write your blog content here..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows={10}
        className="w-full border border-gray-300 p-3 rounded-xl mb-4"
      />

      {/* <Button onClick={handlePublish} className="bg-blue-600 text-white hover:bg-blue-700">
        Publish
      </Button> */}
    </motion.div>
  );
};

export default BlogEditor;
