"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function CreateBlogPage() {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState<File | null>(null);

  const [loading, setLoading] = useState(false);

  // ✅ AI Blog Generator
  const generateWithAI = async () => {
    if (!title) {
      alert("Please enter a blog title first!");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/ai/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title }),
      });

      const data = await res.json();
      if (data.content) {
        setContent(data.content);
      } else {
        alert("Failed to generate blog content.");
      }
    } catch (error) {
      console.error("AI Error:", error);
      alert("Error generating blog content.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log({ title, summary, content, image });

    alert("Blog post submitted! (Hook this to API later)");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <motion.div
        className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl font-bold text-black mb-6 text-center">
          ✍️ Create a New Blog Post
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6 text-black">
          {/* Title */}
          <div>
            <label className="block font-semibold text-black mb-2">
              Blog Title
            </label>
            <input
              type="text"
              placeholder="Enter blog title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              required
            />
          </div>

          {/* Summary */}
          <div>
            <label className="block font-semibold text-black mb-2">
              Summary
            </label>
            <input
              type="text"
              placeholder="Short summary of your blog"
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              required
            />
          </div>

          {/* Content */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="font-semibold text-black">Content</label>
              <motion.button
                type="button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={generateWithAI}
                disabled={loading}
                className="bg-green-600 text-white px-4 py-1 rounded-lg shadow hover:bg-green-700 transition"
              >
                {loading ? "✨ Generating..." : "✨ Generate with AI"}
              </motion.button>
            </div>

            <textarea
              placeholder="Write your blog content here..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={8}
              className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              required
            />
          </div>

          {/* Image Upload */}
          <div>
            <label className="block font-semibold text-black mb-2">
              Upload Image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) =>
                setImage(e.target.files ? e.target.files[0] : null)
              }
              className="w-full p-2 border border-gray-300 rounded-xl text-black"
            />
          </div>

          {/* Submit */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-xl shadow-md hover:bg-blue-700 transition"
          >
            🚀 Publish Blog
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}
