"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Upload, FileText, Loader2 } from "lucide-react";

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
      if (data.content) setContent(data.content);
    } catch (error) {
      console.error("AI Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ title, summary, content, image });
    alert("✅ Blog post submitted! (Hook this to API later)");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-10">
      <motion.div
        className="max-w-5xl mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden border border-gray-200"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-10 text-white">
          <motion.h1
            className="text-4xl font-extrabold text-center"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            ✍️ Create a New Blog Post
          </motion.h1>
          <p className="text-center mt-3 text-lg opacity-90">
            Share your thoughts with AI-powered assistance
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="p-10 grid gap-8 sm:grid-cols-2"
        >
          {/* Title */}
          <motion.div
            className="sm:col-span-2"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            <label className="block text-lg font-semibold mb-2 text-black">
              Blog Title
            </label>
            <div className="flex items-center gap-3 bg-gray-50 border rounded-xl p-3 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500">
              <FileText className="text-black" />
              <input
                type="text"
                placeholder="Enter a captivating blog title..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full bg-transparent outline-none text-black"
                required
              />
            </div>
          </motion.div>

          {/* Summary */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            <label className="block text-lg font-semibold mb-2 text-black">
              Summary
            </label>
            <input
              type="text"
              placeholder="A quick overview of your post..."
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              className="w-full p-3 border rounded-xl bg-gray-50 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black"
              required
            />
          </motion.div>

          {/* Image Upload */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            <label className="block text-lg font-semibold mb-2 text-black">
              Upload Image
            </label>
            <div className="flex items-center justify-center w-full border-2 border-dashed border-black rounded-xl p-6 cursor-pointer hover:border-indigo-500 transition">
              <input
                type="file"
                accept="image/*"
                onChange={(e) =>
                  setImage(e.target.files ? e.target.files[0] : null)
                }
                className="hidden"
                id="upload"
              />
              <label
                htmlFor="upload"
                className="flex flex-col items-center gap-2 text-gray-600 cursor-pointer"
              >
                <Upload size={28} />
                {image ? (
                  <span className="font-medium text-black">{image.name}</span>
                ) : (
                  <span className="text-sm text-black">
                    Click to upload or drag & drop
                  </span>
                )}
              </label>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="sm:col-span-2"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center justify-between mb-3">
              <label className="text-lg font-semibold text-black">
                Content
              </label>
              <motion.button
                type="button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={generateWithAI}
                disabled={loading}
                className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg shadow hover:bg-green-700 transition disabled:opacity-60"
              >
                {loading ? (
                  <>
                    <Loader2 className="animate-spin" size={18} /> Generating...
                  </>
                ) : (
                  <>
                    <Sparkles size={18} /> Generate with AI
                  </>
                )}
              </motion.button>
            </div>

            <textarea
              placeholder="Write your blog content here..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={12}
              className="w-full p-4 border rounded-xl bg-gray-50 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black"
              required
            />
          </motion.div>

          {/* Submit */}
          <motion.div
            className="sm:col-span-2 flex justify-center"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <button
              type="submit"
              className="w-full sm:w-auto px-10 py-3 bg-indigo-600 text-white text-lg font-semibold rounded-2xl shadow-lg hover:bg-indigo-700 transition"
            >
              🚀 Publish Blog
            </button>
          </motion.div>
        </form>
      </motion.div>
    </div>
  );
}
